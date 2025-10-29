'use client'

import { motion } from 'framer-motion';
import { 
  Stethoscope, 
  Heart, 
  Baby, 
  Eye, 
  Activity, 
  Building2,
  Phone,
  ArrowRight
} from 'lucide-react';
import { Button } from '../common/SMButton/SMButton';
import { Card } from '../common/SMCard/SMCard';

export function ServicesContent() {
  const services = [
    {
      name: "Стоматология",
      description: "Полный спектр стоматологических услуг: лечение, имплантация, ортодонтия, протезирование",
      icon: Stethoscope
    },
    {
      name: "Гинекология",
      description: "Консультации, диагностика и лечение женских заболеваний современными методами",
      icon: Heart
    },
    {
      name: "Детские услуги",
      description: "Специализированная медицинская помощь для детей: стоматология, гинекология, урология",
      icon: Baby
    },
    {
      name: "УЗИ диагностика",
      description: "Современная ультразвуковая диагностика на оборудовании экспертного класса",
      icon: Eye
    },
    {
      name: "Эндокринология",
      description: "Диагностика и лечение заболеваний эндокринной системы",
      icon: Activity
    },
    {
      name: "Дневной стационар",
      description: "Комфортное размещение для проведения процедур и наблюдения",
      icon: Building2
    }
  ];

  return (
    <div className="p-4 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 lg:mb-12"
        >
          <div className="text-center mb-6 lg:mb-8">
            <div className="w-16 h-16 bg-[#18A36C] rounded-lg flex items-center justify-center mx-auto mb-4">
              <Stethoscope className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl lg:text-3xl text-[#2E2E2E] mb-3 lg:mb-4">Услуги клиники Doctor Family</h1>
            <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
              Добро пожаловать в медицинскую клинику Doctor Family! Мы предоставляем широкий спектр 
              медицинских услуг высокого качества. Выберите нужную категорию в меню слева.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8"
        >
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer border border-[#E8E6E3] hover:border-[#18A36C] rounded-lg"
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#18A36C]/10 rounded-lg flex items-center justify-center group-hover:bg-[#18A36C]/20 transition-all duration-300 flex-shrink-0">
                    <service.icon className="w-6 h-6 text-[#18A36C]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg text-[#2E2E2E] mb-2 group-hover:text-[#18A36C] transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center bg-white border border-[#E8E6E3] rounded-lg p-8 lg:p-12"
        >
          <h2 className="text-xl lg:text-2xl text-[#2E2E2E] mb-3 lg:mb-4">Готовы записаться на прием?</h2>
          <p className="text-gray-600 mb-6 lg:mb-8 text-sm lg:text-base">
            Выберите услугу в меню <span className="lg:inline hidden">слева</span><span className="lg:hidden inline">выше</span> или свяжитесь с нами для консультации
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 lg:gap-6">
            <Button className="bg-[#18A36C] hover:bg-[#18A36C]/90 text-white px-8 py-4 h-auto rounded-lg transition-all duration-300">
              Записаться онлайн
              <ArrowRight className="w-5 h-5 ml-[2.5px]" />
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-[#18A36C] text-[#18A36C] hover:bg-[#18A36C] hover:text-white px-8 py-4 h-auto rounded-lg transition-all duration-300"
            >
              Позвонить нам
              <Phone className="w-5 h-5 ml-[2.5px]" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
