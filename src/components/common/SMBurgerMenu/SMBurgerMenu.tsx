import SMBurgerMenuLogo from "@/icons/SMBurgerMenuLogo";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../SMButton/SMButton";
import { useRouter } from "@/components/SMRouter/SMRouter";
import { useMenu } from "@/components/SMMenuContext/SMMenuContext"; 
import { Phone, X, Users, MessageSquare, Stethoscope, Building, UserCheck, User, MapPin, Mail } from "lucide-react";

const SMBurgerMenu = () => {
  const { isBurgerMenuOpen, setIsBurgerMenuOpen } = useMenu();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isAuthenticated] = useState(false);
  const { navigate } = useRouter();
    return (
      <AnimatePresence>
      {isBurgerMenuOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsBurgerMenuOpen(false)}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 200,
              duration: 0.4,
            }}
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
          >
            <div className="bg-[#18A36C] p-6 text-white">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <SMBurgerMenuLogo />
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      setIsBurgerMenuOpen(false)
                    }
                    className="p-2 hover:bg-white/20 text-white"
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>

                <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-green-200" />
                    <span>+375 29 161-01-01</span>
                  </div>
                  <button className="text-xs text-green-200 hover:text-white transition-colors mt-1">
                    Заказать звонок
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <nav className="space-y-2">
                {[
                  { name: "Услуги", icon: Stethoscope },
                  { name: "Клиника", icon: Building },
                  { name: "Специалисты", icon: Users },
                  {
                    name: "Контакты",
                    icon: MessageSquare,
                  },
                  { name: "Пациенту", icon: UserCheck },
                ].map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.1 + 0.2,
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-[#2E2E2E] hover:text-[#18A36C] hover:bg-gray-50 transition-all duration-200 group"
                    onClick={() => {
                      if (item.name === "Услуги") {
                        navigate("/services");
                      } else if (
                        item.name === "Специалисты"
                      ) {
                        navigate("/doctors");
                      } else if (
                        item.name === "Клиника"
                      ) {
                        navigate("/clinic");
                      } else if (
                        item.name === "Контакты"
                      ) {
                        navigate("/contacts");
                      } else if (
                        item.name === "Пациенту"
                      ) {
                        navigate("/patient");
                      }
                      setIsBurgerMenuOpen(false);
                    }}
                  >
                    <item.icon className="w-5 h-5 text-gray-400 group-hover:text-[#18A36C] transition-colors" />
                    <span className="text-base">
                      {item.name}
                    </span>
                  </motion.button>
                ))}
              </nav>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-8 pt-6 border-t border-[#E8E6E3]"
              >
                <Button
                  className="w-full bg-[#18A36C] hover:bg-[#18A36C]/90 text-white py-3 h-auto"
                  onClick={() =>
                    setIsBurgerMenuOpen(false)
                  }
                >
                  Запись онлайн
                </Button>

                <div className="mt-4 flex items-center justify-center gap-2 text-[#18A36C]">
                  <User className="w-4 h-4" />
                  {isAuthenticated ? (
                    <button
                      onClick={() => {
                        navigate("/account");
                        setIsBurgerMenuOpen(false);
                      }}
                      className="text-sm hover:text-[#18A36C]/80 transition-colors"
                    >
                      Личный кабинет
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setIsAuthModalOpen(true);
                        setIsBurgerMenuOpen(false);
                      }}
                      className="text-sm hover:text-[#18A36C]/80 transition-colors"
                    >
                      Войти
                    </button>
                  )}
                </div>
              </motion.div>

              {/* Contact info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="mt-6 pt-6 border-t border-[#E8E6E3] text-center text-sm text-[#2E2E2E]"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-[#18A36C]" />
                  <span>
                    г. Минск, пр. Победителей, д. 119,
                    пом. 504
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4 text-[#18A36C]" />
                  <span>smartmedical.by@gmail.com</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    )
};

export default SMBurgerMenu;