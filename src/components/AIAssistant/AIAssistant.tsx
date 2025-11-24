"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send, Loader2, Bot, User, Trash2 } from "lucide-react";
import { ResultModal } from "./ResultModal";
import { useSession } from "next-auth/react";

const CHAT_STORAGE_KEY = 'ai_assistant_messages';

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
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([DEFAULT_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [modalCards, setModalCards] = useState<CardData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load messages from localStorage on mount
  useEffect(() => {
    try {
      const savedMessages = localStorage.getItem(CHAT_STORAGE_KEY);
      if (savedMessages) {
        const parsed = JSON.parse(savedMessages);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
        }
      }
    } catch (error) {
      console.error('Error loading chat messages from localStorage:', error);
    }
    setIsInitialized(true);
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

  // Clear chat history
  const handleClearChat = useCallback(() => {
    setMessages([DEFAULT_MESSAGE]);
    try {
      localStorage.removeItem(CHAT_STORAGE_KEY);
    } catch (error) {
      console.error('Error clearing chat from localStorage:', error);
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
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: "Unknown error" }));
        throw new Error(errorData.error || `Server error: ${response.status}`);
      }

      const data = await response.json();
      console.log("📨 API Response data:", data);
      console.log("📦 Cards in response:", data.cards);
      console.log("💬 Message in response:", data.message);

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

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-[#18A36C] to-[#15905f] rounded-full shadow-2xl flex items-center justify-center text-white hover:shadow-[#18A36C]/50 transition-all duration-300"
          >
            <MessageCircle className="w-7 h-7" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-50 w-[400px] h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#18A36C] to-[#15905f] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">AI Помощник</h3>
                  <p className="text-white/80 text-xs">Doctor Family</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {/* Clear chat button */}
                {messages.length > 1 && (
                  <button
                    onClick={handleClearChat}
                    title="Очистить чат"
                    className="w-8 h-8 rounded-lg bg-white/20 hover:bg-red-500/80 flex items-center justify-center text-white transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden ${
                      message.role === "user"
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
                    className={`max-w-[75%] rounded-2xl p-3 ${
                      message.role === "user"
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

            {/* Input */}
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
                  className="w-12 h-12 bg-gradient-to-br from-[#18A36C] to-[#15905f] rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
          </motion.div>
        )}
      </AnimatePresence>

      {/* Result Modal */}
      <ResultModal
        isOpen={isModalOpen}
        cards={modalCards}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
