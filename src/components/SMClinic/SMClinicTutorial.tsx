import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/common/SMDialog/SMDialog';
import { Button } from '@/components/common/SMButton/SMButton';
import { ChevronLeft, ChevronRight, Menu, Building2, X } from "lucide-react";

interface ClinicTutorialProps {
  isOpen: boolean;
  onClose: () => void;
}

const tutorialSlides = [
  {
    id: 1,
    title: "Добро пожаловать в клинику!",
    content: "Здесь вы узнаете всё о нашей клинике: оборудование, условия, лицензии и многое другое. Покажем, как найти нужную информацию.",
    illustration: (
      <div className="w-full h-48 bg-[#18A36C] rounded-lg flex items-center justify-center relative overflow-hidden">
        <div className="text-center text-white">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Building2 className="w-12 h-12" />
          </div>
          <h3 className="text-lg font-medium">О клинике</h3>
          <p className="text-sm text-white/80 mt-1">Современная медицинская клиника</p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Откройте меню клиники",
    content: "Нажмите на кнопку меню, чтобы увидеть всю информацию о клинике: оборудование, лицензии, условия и многое другое.",
    illustration: (
      <div className="w-full h-48 bg-gray-100 rounded-lg relative border-2 border-[#CACACA] overflow-hidden">
        <div className="bg-white p-3 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-xs text-gray-400">9:41</div>
            <div className="text-xs text-gray-400">100%</div>
          </div>
        </div>
        
        <div className="bg-white p-3 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#18A36C] rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="text-xs text-[#18A36C]">DOCTOR FAMILY</div>
            </div>
            <div className="flex gap-2">
              <div className="w-6 h-6 bg-gray-200 rounded"></div>
              <div className="w-6 h-6 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-20 left-4">
          <div className="w-12 h-12 bg-[#18A36C] rounded-full flex items-center justify-center shadow-lg">
            <Menu className="w-5 h-5 text-white" />
          </div>
        </div>
        
        <div className="absolute bottom-4 left-4 right-4 bg-[#18A36C]/10 rounded-lg p-2">
          <p className="text-xs text-[#18A36C] text-center font-medium">
            Откройте информацию о клинике
          </p>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Изучите информацию",
    content: "Выберите интересующий раздел: оборудование, лицензии, условия пребывания или другую информацию о нашей клинике.",
    illustration: (
      <div className="w-full h-48 bg-white rounded-lg border border-[#CACACA] overflow-hidden relative">
        <div className="bg-[#18A36C] p-3">
          <h3 className="text-white text-sm font-medium">О клинике</h3>
          <p className="text-white/80 text-xs">Информация о нашей клинике</p>
        </div>
        
        <div className="p-2 space-y-1">
          {[
            { name: 'Оборудование', icon: '🏥', highlight: true },
            { name: 'Лицензии', icon: '📋', highlight: false },
            { name: 'Условия', icon: '✨', highlight: false },
            { name: 'О нас', icon: '🏢', highlight: false }
          ].map((service, index) => (
            <div 
              key={service.name} 
              className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-300 relative ${
                service.highlight 
                  ? 'bg-[#18A36C]/10 border border-[#18A36C]/30 shadow-sm' 
                  : 'hover:bg-[#F4F4F4]'
              }`}
            >
              <div className="text-lg">{service.icon}</div>
              <span className={`text-sm flex-1 ${service.highlight ? 'text-[#18A36C] font-medium' : 'text-[#212121]'}`}>
                {service.name}
              </span>
              <ChevronRight className={`w-4 h-4 ${service.highlight ? 'text-[#18A36C]' : 'text-gray-600'}`} />
            </div>
          ))}
        </div>
      </div>
    )
  }
];

export function ClinicTutorial({ isOpen, onClose }: ClinicTutorialProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < tutorialSlides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleFinish = () => {
    setCurrentSlide(0);
    onClose();
  };

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === tutorialSlides.length - 1;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md mx-auto p-0 overflow-hidden border-2 border-[#18A36C]/20 shadow-2xl">
        <DialogTitle className="sr-only">Обучение по разделу Клиника</DialogTitle>
        <DialogDescription className="sr-only">
          Руководство по навигации в разделе информации о клинике Doctor Family
        </DialogDescription>
        <div className="relative bg-gradient-to-br from-white to-[#F4F4F4]/50">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 h-8 w-8 p-0 bg-white/90 hover:bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center"
          >
            <X className="w-4 h-4 text-gray-600" />
          </Button>

          <div className="absolute top-4 left-4 z-10">
            <div className="flex gap-2 bg-white/90 rounded-full px-3 py-1 shadow-md border border-gray-200">
              {tutorialSlides.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-[#18A36C] w-4' 
                      : index < currentSlide 
                        ? 'bg-[#18A36C]/60' 
                        : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="p-6 pt-12"
            >
              <div className="mb-6 mx-auto max-w-sm">
                {tutorialSlides[currentSlide].illustration}
              </div>

              <div className="text-center space-y-4">
                <h2 className="text-xl text-[#085F77] mb-3">
                  {tutorialSlides[currentSlide].title}
                </h2>
                <p className="text-sm text-[#212121]/80 leading-relaxed">
                  {tutorialSlides[currentSlide].content}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="p-6 pt-2 bg-white rounded-b-lg">
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                disabled={isFirstSlide}
                className={`flex items-center gap-2 transition-all ${
                  isFirstSlide ? 'opacity-50 cursor-not-allowed' : 'hover:border-[#18A36C] hover:text-[#18A36C]'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                Назад
              </Button>

              <div className="flex items-center gap-2">
                <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {currentSlide + 1} из {tutorialSlides.length}
                </div>
              </div>

              {isLastSlide ? (
                <Button
                  size="sm"
                  onClick={handleFinish}
                  className="bg-[#18A36C] hover:bg-[#18A36C]/90 text-white shadow-lg"
                >
                  Понятно!
                </Button>
              ) : (
                <Button
                  size="sm"
                  onClick={nextSlide}
                  className="bg-[#18A36C] hover:bg-[#18A36C]/90 text-white flex items-center gap-2 shadow-lg"
                >
                  Далее
                  <ChevronRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}