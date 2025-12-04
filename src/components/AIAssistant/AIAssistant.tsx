"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send, Loader2, Bot, User, Trash2, Headphones, Star } from "lucide-react";
import { ResultModal } from "./ResultModal";
import { useSession, signIn } from "next-auth/react";
import { AIOnboardingModal } from "./AIOnboardingModal";
import { OperatorChatContent } from "./OperatorChatContent";
import { useAlert } from "@/components/common/SMAlert/AlertProvider";
import { usePathname } from "next/navigation";
import { AuthModals } from "@/components/SMAuthModals/SMAuthModals";
import { LoginData, RegisterData } from "@/components/SMAuthModals/SMAuthModals.styles";
import { LeaveReviewModal } from "@/components/SMClinic/LeaveReviewModal";

const CHAT_STORAGE_KEY = 'ai_assistant_messages';
const ONBOARDING_SEEN_KEY = 'ai_assistant_onboarding_seen';

interface CardData {
  type: "specialist" | "service";
  data: any;
  placeholder: string;
}

interface Message {
  role: "user" | "assistant";
  content: string;
  cards?: CardData[];
}

const DEFAULT_MESSAGE: Message = {
  role: "assistant",
  content: "Здравствуйте! Я виртуальный помощник клиники Doctor Family. Чем могу помочь?",
};

export function AIAssistant() {
  const { data: session, status } = useSession();
  const alert = useAlert();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'ai' | 'operator'>('ai');
  const [messages, setMessages] = useState<Message[]>([DEFAULT_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [modalCards, setModalCards] = useState<CardData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [hasUnreadChat, setHasUnreadChat] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalType, setAuthModalType] = useState<'login' | 'register'>('login');
  const [authLoading, setAuthLoading] = useState(false);
  const [showClearConfirmation, setShowClearConfirmation] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Prevent hydration mismatch and show hint after delay
  useEffect(() => {
    setIsMounted(true);

    // Show hint after 2 seconds delay on every page load
    const timer = setTimeout(() => {
      setShowHint(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Load messages from localStorage on mount and check if onboarding was seen
  useEffect(() => {
    try {
      const savedMessages = localStorage.getItem(CHAT_STORAGE_KEY);
      if (savedMessages) {
        const parsed = JSON.parse(savedMessages);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
        }
      }

      // Проверяем, видел ли пользователь обучение
      const onboardingSeen = localStorage.getItem(ONBOARDING_SEEN_KEY);
      if (!onboardingSeen && isOpen) {
        setShowOnboarding(true);
      }
    } catch (error) {
      console.error('Error loading chat messages from localStorage:', error);
    }
    setIsInitialized(true);
  }, [isOpen]);

  // Слушаем событие для открытия AI помощника с определенной вкладкой
  useEffect(() => {
    const handleOpenAIAssistant = (event: CustomEvent) => {
      const { tab } = event.detail;
      setIsOpen(true);
      if (tab === 'operator') {
        setActiveTab('operator');
      } else {
        setActiveTab('ai');
      }
    };

    window.addEventListener('openAIAssistant', handleOpenAIAssistant as EventListener);
    return () => {
      window.removeEventListener('openAIAssistant', handleOpenAIAssistant as EventListener);
    };
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (isInitialized && messages.length > 0) {
      try {
        localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages));
      } catch (error) {
        console.error('Error saving chat messages to localStorage:', error);
      }
    }
  }, [messages, isInitialized]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Check for unread chat messages
  const checkUnreadChat = useCallback(async () => {
    if (status !== 'authenticated') {
      setHasUnreadChat(false);
      return;
    }

    try {
      const response = await fetch('/api/operator-chat/my-chat/unread', {
        cache: 'no-store'
      });
      if (response.ok) {
        const data = await response.json();
        setHasUnreadChat(data.hasUnread || false);
      }
    } catch (error) {
      console.error('Error checking unread chat:', error);
    }
  }, [status]);

  // Check for unread messages periodically
  useEffect(() => {
    if (status !== 'authenticated') return;

    checkUnreadChat();
    const interval = setInterval(checkUnreadChat, 15000); // Every 15 seconds
    return () => clearInterval(interval);
  }, [status, checkUnreadChat]);

  // Clear unread indicator when operator tab is opened
  useEffect(() => {
    if (isOpen && activeTab === 'operator') {
      setHasUnreadChat(false);
    }
  }, [isOpen, activeTab]);

  // Clear chat history
  const handleClearChat = useCallback(() => {
    setShowClearConfirmation(true);
  }, []);

  // Confirm clear chat
  const confirmClearChat = useCallback(() => {
    setMessages([DEFAULT_MESSAGE]);
    try {
      localStorage.removeItem(CHAT_STORAGE_KEY);
    } catch (error) {
      console.error('Error clearing chat from localStorage:', error);
    }
    setShowClearConfirmation(false);
  }, []);

  const handleCloseOnboarding = useCallback(() => {
    setShowOnboarding(false);
    try {
      localStorage.setItem(ONBOARDING_SEEN_KEY, 'true');
    } catch (error) {
      console.error('Error saving onboarding state:', error);
    }
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
        cache: 'no-store'
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: "Unknown error" }));
        throw new Error(errorData.error || `Server error: ${response.status}`);
      }

      const data = await response.json();
      console.log("📨 API Response data:", data);
      console.log("📦 Cards in response:", data.cards);
      console.log("💬 Message in response:", data.message);
      console.log("🔄 Need operator:", data.needOperator);

      if (!data.message) {
        throw new Error("No message in response");
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: data.message,
        cards: data.cards || [],
      };

      setMessages((prev) => [...prev, assistantMessage]);

      // Если есть карточки - показываем модальное окно
      if (data.cards && data.cards.length > 0) {
        console.log("🎯 Opening modal with cards:", data.cards);
        setModalCards(data.cards);
        setIsModalOpen(true);
      } else {
        console.log("⚠️ No cards to display");
      }

      // Если нужен оператор - автоматически переключаемся и создаем чат
      if (data.needOperator) {
        console.log("🔄 Switching to operator tab...");
        handleSwitchToOperator();
      }
    } catch (error) {
      console.error("Chat error:", error);

      let errorText = "Извините, произошла ошибка.";

      if (error instanceof Error) {
        if (error.message.includes("API key not configured")) {
          errorText = "Чат-бот временно недоступен. Пожалуйста, свяжитесь с нами по телефону.";
        } else if (error.message.includes("Failed to load clinic data")) {
          errorText = "Не удалось загрузить данные клиники. Попробуйте позже.";
        } else {
          errorText = `Произошла ошибка: ${error.message}. Попробуйте позже или позвоните нам напрямую.`;
        }
      }

      const errorMessage: Message = {
        role: "assistant",
        content: errorText,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSwitchToOperator = async () => {
    // Проверяем авторизацию
    if (status !== 'authenticated') {
      console.log("⚠️ User not authenticated, opening login modal");
      alert.info('Для связи с оператором необходимо войти в систему', 'Требуется авторизация');
      handleOpenLoginModal();
      return;
    }

    // Переключаемся на вкладку оператора
    setActiveTab('operator');

    // Даем время на загрузку компонента
    await new Promise(resolve => setTimeout(resolve, 500));

    // Проверяем, есть ли уже активный чат
    try {
      const chatResponse = await fetch('/api/operator-chat/my-chat', {
        cache: 'no-store'
      });

      if (chatResponse.ok) {
        // Чат уже существует, просто переключились
        console.log("✅ Chat already exists");
        return;
      }

      // Чата нет - создаем новый с автоматическим сообщением
      console.log("📝 Creating new operator chat...");
      const createResponse = await fetch('/api/operator-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: 'Здравствуйте, мне нужна Ваша помощь'
        }),
        cache: 'no-store'
      });

      if (createResponse.ok) {
        console.log("✅ Operator chat created successfully");
        alert.success('Вы переключены на оператора. Менеджер скоро ответит!', 'Успех');

        // Перезагружаем компонент оператора через небольшую задержку
        await new Promise(resolve => setTimeout(resolve, 300));
        window.dispatchEvent(new CustomEvent('reloadOperatorChat'));
      } else {
        const errorData = await createResponse.json();
        throw new Error(errorData.error || 'Failed to create chat');
      }
    } catch (error) {
      console.error("❌ Error switching to operator:", error);
      alert.error('Не удалось создать чат с оператором. Попробуйте позже.', 'Ошибка');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Auth handlers
  const handleOpenLoginModal = useCallback(() => {
    setAuthModalType('login');
    setIsAuthModalOpen(true);
    setIsOpen(false); // Close chat
  }, []);

  const handleOpenRegisterModal = useCallback(() => {
    setAuthModalType('register');
    setIsAuthModalOpen(true);
    setIsOpen(false); // Close chat
  }, []);

  const handleLogin = async (loginData: LoginData) => {
    setAuthLoading(true);
    try {
      const result = await signIn('credentials', {
        login: loginData.login,
        password: loginData.password,
        redirect: false,
      });

      if (result?.error) {
        alert.error(result.error === 'CredentialsSignin'
          ? 'Неверный логин или пароль'
          : result.error, 'Ошибка входа');
      } else {
        setIsAuthModalOpen(false);
        alert.success('Вы успешно вошли в систему', 'Успех');
      }
    } catch (error) {
      alert.error('Произошла ошибка при входе', 'Ошибка');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleRegister = async (registerData: RegisterData) => {
    setAuthLoading(true);
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registerData),
        cache: 'no-store'
      });

      const data = await response.json();

      if (!response.ok) {
        alert.error(data.error || 'Ошибка при регистрации', 'Ошибка');
        return;
      }

      // Auto login after registration
      const result = await signIn('credentials', {
        login: registerData.login,
        password: registerData.password,
        redirect: false,
      });

      if (result?.error) {
        alert.error('Регистрация успешна, но не удалось войти. Попробуйте войти вручную.', 'Предупреждение');
      } else {
        setIsAuthModalOpen(false);
        alert.success('Регистрация успешна! Вы вошли в систему.', 'Успех');
      }
    } catch (error) {
      alert.error('Произошла ошибка при регистрации', 'Ошибка');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleForgotPassword = async (email: string) => {
    alert.info('Функция восстановления пароля временно недоступна', 'Информация');
  };

  // Don't render anything until mounted to avoid hydration mismatch
  if (!isMounted) return null;

  // Hide AI assistant in admin panel
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  const handleDismissHint = () => {
    setShowHint(false);
  };

  return (
    <>
      {/* Hint Card */}
      <AnimatePresence>
        {!isOpen && showHint && (
          <motion.div
            initial={{ opacity: 0, x: 20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 20, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#18A36C] to-[#15905f] p-4 relative">
              <button
                onClick={handleDismissHint}
                className="absolute top-2 right-2 w-6 h-6 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
              <h3 className="text-white font-semibold text-lg">
                Нужна помощь?
              </h3>
              <p className="text-white/90 text-sm">
                Мы всегда на связи!
              </p>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[#18A36C] to-[#15905f] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-800">AI Помощник</h4>
                  <p className="text-xs text-gray-600">Мгновенные ответы 24/7</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-800">Оператор</h4>
                  <p className="text-xs text-gray-600">Живое общение со специалистом</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-800">Отзыв</h4>
                  <p className="text-xs text-gray-600">Поделитесь своим мнением</p>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsOpen(true);
                  handleDismissHint();
                }}
                className="w-full mt-2 bg-gradient-to-r from-[#18A36C] to-[#15905f] text-white py-2 px-4 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                Начать общение
              </button>
            </div>

            {/* Arrow pointing to button */}
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45 border-r border-b border-gray-100" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setIsOpen(true);
              if (showHint) handleDismissHint();
            }}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-[#18A36C] to-[#15905f] rounded-full shadow-2xl flex items-center justify-center text-white hover:shadow-[#18A36C]/50 transition-all duration-300 cursor-pointer"
          >
            <MessageCircle className="w-7 h-7" />
            {hasUnreadChat && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop/Overlay with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-full sm:w-[480px] bg-white shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#18A36C] to-[#15905f]">
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      {activeTab === 'ai' ? (
                        <Bot className="w-6 h-6 text-white" />
                      ) : (
                        <Headphones className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">
                        {activeTab === 'ai' ? 'AI Помощник' : 'Оператор'}
                      </h3>
                      <p className="text-white/80 text-xs">Doctor Family</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* Clear chat button */}
                    {activeTab === 'ai' && messages.length > 1 && (
                      <button
                        onClick={handleClearChat}
                        title="Очистить чат"
                        className="w-8 h-8 rounded-lg bg-white/20 hover:bg-red-500/80 flex items-center justify-center text-white transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                    {/* Review button */}
                    <button
                      onClick={() => setIsReviewModalOpen(true)}
                      title="Оставить отзыв"
                      className="w-8 h-8 rounded-lg bg-white/20 hover:bg-amber-500/80 flex items-center justify-center text-white transition-colors cursor-pointer"
                    >
                      <Star className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-8 h-8 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Tabs */}
                <div className="px-4 pb-4 flex gap-2">
                  <button
                    onClick={() => setActiveTab('ai')}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all cursor-pointer ${activeTab === 'ai'
                        ? 'bg-white text-[#18A36C] shadow-sm'
                        : 'bg-white/20 text-white/80 hover:bg-white/30'
                      }`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Bot className="w-4 h-4" />
                      <span>AI Помощник</span>
                    </div>
                  </button>
                  <div className="relative group">
                    <button
                      onClick={() => setActiveTab('operator')}
                      className={`relative py-2 px-4 rounded-lg text-sm font-medium transition-all cursor-pointer ${activeTab === 'operator'
                          ? 'bg-white text-[#18A36C] shadow-sm'
                          : 'bg-white/20 text-white/80 hover:bg-white/30'
                        }`}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Headphones className="w-4 h-4" />
                        <span>Оператор</span>
                      </div>
                      {hasUnreadChat && activeTab !== 'operator' && (
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
                      )}
                    </button>
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      Связаться с операторами
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto bg-gray-50">
                {activeTab === 'operator' ? (
                  <OperatorChatContent
                    onError={(message) => alert.error(message, 'Ошибка')}
                    onOpenLoginModal={handleOpenLoginModal}
                    onOpenRegisterModal={handleOpenRegisterModal}
                  />
                ) : (
                  <div className="p-4 space-y-4">
                    {messages.map((message, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden ${message.role === "user"
                              ? session?.user?.image ? "" : "bg-gradient-to-br from-[#18A36C] to-[#15905f]"
                              : "bg-gradient-to-br from-[#18A36C] to-[#15905f]"
                            }`}
                        >
                          {message.role === "user" ? (
                            session?.user?.image ? (
                              <img
                                src={session.user.image}
                                alt="Вы"
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <User className="w-5 h-5 text-white" />
                            )
                          ) : (
                            <Bot className="w-5 h-5 text-white" />
                          )}
                        </div>
                        <div
                          className={`max-w-[75%] rounded-2xl p-3 ${message.role === "user"
                              ? "bg-gradient-to-br from-[#18A36C] to-[#15905f] text-white"
                              : "bg-white text-gray-800 shadow-sm"
                            }`}
                        >
                          <p className="text-sm leading-relaxed whitespace-pre-wrap">
                            {message.content}
                          </p>
                        </div>
                      </motion.div>
                    ))}

                    {isLoading && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-3"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#18A36C] to-[#15905f] flex items-center justify-center">
                          <Bot className="w-5 h-5 text-white" />
                        </div>
                        <div className="bg-white rounded-2xl p-3 shadow-sm">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            />
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>
                )}
              </div>

              {/* Input */}
              {activeTab === 'ai' && (
                <div className="p-4 bg-white border-t border-gray-200">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Задайте вопрос..."
                      disabled={isLoading}
                      className="flex-1 px-4 py-3 bg-gray-100 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-[#18A36C] transition-all disabled:opacity-50"
                    />
                    <button
                      onClick={handleSend}
                      disabled={isLoading || !input.trim()}
                      className="w-12 h-12 bg-gradient-to-br from-[#18A36C] to-[#15905f] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#18A36C]/20 hover:shadow-xl hover:shadow-[#18A36C]/30 transition-all duration-200 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      {isLoading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <Send className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    AI помощник может ошибаться. Проверяйте важную информацию.
                  </p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Result Modal */}
      <ResultModal
        isOpen={isModalOpen}
        cards={modalCards}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Onboarding Modal */}
      <AIOnboardingModal
        isOpen={showOnboarding}
        onClose={handleCloseOnboarding}
      />

      {/* Auth Modal */}
      <AuthModals
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={handleLogin}
        onRegister={handleRegister}
        onForgotPassword={handleForgotPassword}
        isLoading={authLoading}
        initialType={authModalType}
      />

      {/* Clear Chat Confirmation Modal */}
      <AnimatePresence>
        {showClearConfirmation && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowClearConfirmation(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] cursor-pointer"
            />

            {/* Modal */}
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trash2 className="w-8 h-8 text-red-600" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-center text-gray-900 mb-2">
                  Очистить историю чата?
                </h3>

                {/* Description */}
                <p className="text-center text-gray-600 mb-6">
                  Все сообщения будут удалены без возможности восстановления. Это действие нельзя отменить.
                </p>

                {/* Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowClearConfirmation(false)}
                    className="flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-all duration-200 cursor-pointer"
                  >
                    Отмена
                  </button>
                  <button
                    onClick={confirmClearChat}
                    className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl transition-all duration-200 shadow-lg shadow-red-600/20 hover:shadow-xl hover:shadow-red-600/30 cursor-pointer"
                  >
                    Очистить
                  </button>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Review Modal */}
      <LeaveReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
      />
    </>
  );
}
