import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Star, Calendar, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '../common/SMButton/SMButton';
import { Card } from '../common/SMCard/SMCard';
import { getDoctorsByCategory, getCategoryById } from '@/data/SMDoctorData/SMDoctorData';
import { useRouter } from '@/components/SMRouter/SMRouter';
import { ImageWithFallback } from '../SMImage/ImageWithFallback';

export function DoctorsContent() {
  const { currentRoute, navigate } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const routeParts = currentRoute.split('/').filter(Boolean);
    if (routeParts[0] === 'doctors' && routeParts[1]) {
      setSelectedCategory(routeParts[1]);
    } else {
      setSelectedCategory(null);
    }
  }, [currentRoute]);

  const selectedCategoryData = selectedCategory ? getCategoryById(selectedCategory) : null;
  const doctors = selectedCategory ? getDoctorsByCategory(selectedCategory) : [];

  const handleDoctorClick = (doctorId: string) => {
    navigate(`/doctors/${selectedCategory}/${doctorId}`);
  };

  const handleBookAppointment = (doctorId: string, doctorName: string) => {
    console.log(`Booking appointment with ${doctorName} (${doctorId})`);
  };

  if (!selectedCategory) {
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
                <Users className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl lg:text-3xl text-[#2E2E2E] mb-3 lg:mb-4">
                Наши специалисты
              </h1>
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                Команда высококвалифицированных врачей Doctor Family готова оказать вам профессиональную медицинскую помощь. 
                Выберите нужную специализацию в меню слева.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <Card className="p-6 text-center rounded-lg border border-[#E8E6E3] hover:border-[#18A36C] transition-all duration-300">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-[#18A36C]/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#18A36C]" />
                </div>
              </div>
              <h3 className="text-2xl text-[#2E2E2E] mb-2">15+</h3>
              <p className="text-gray-600">Опытных врачей</p>
            </Card>

            <Card className="p-6 text-center rounded-lg border border-[#E8E6E3] hover:border-[#18A36C] transition-all duration-300">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-[#18A36C]/10 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-[#18A36C]" />
                </div>
              </div>
              <h3 className="text-2xl text-[#2E2E2E] mb-2">4.9</h3>
              <p className="text-gray-600">Средний рейтинг</p>
            </Card>

            <Card className="p-6 text-center rounded-lg border border-[#E8E6E3] hover:border-[#18A36C] transition-all duration-300">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-[#18A36C]/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-[#18A36C]" />
                </div>
              </div>
              <h3 className="text-2xl text-[#2E2E2E] mb-2">24/7</h3>
              <p className="text-gray-600">Круглосуточно</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#18A36C] rounded-lg p-6 text-white"
          >
            <h2 className="text-xl mb-4">Запись на приём</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+375 29 161-01-01</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>smartmedical.by@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>г. Минск, пр. Победителей, д. 119, пом. 504</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="mb-6">
            <h1 className="text-2xl lg:text-3xl text-[#2E2E2E] mb-2">
              {selectedCategoryData?.name}
            </h1>
            <p className="text-gray-600">
              {doctors.length} {doctors.length === 1 ? 'специалист' : 'специалистов'}
            </p>
          </div>
        </motion.div>

        {doctors.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group border border-[#E8E6E3] hover:border-[#18A36C] rounded-lg">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-shrink-0 mx-auto sm:mx-0">
                      <div 
                        className="w-24 h-24 rounded-lg overflow-hidden transition-all duration-300"
                        onClick={() => handleDoctorClick(doctor.id)}
                      >
                        <ImageWithFallback
                          src={doctor.photo}
                          alt={`${doctor.name} ${doctor.surname}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="flex-1 text-center sm:text-left">
                      <div 
                        className="cursor-pointer"
                        onClick={() => handleDoctorClick(doctor.id)}
                      >
                        <h3 className="text-lg text-[#2E2E2E] mb-1 group-hover:text-[#18A36C] transition-colors">
                          {doctor.name} {doctor.surname}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">{doctor.position}</p>
                        
                        <div className="text-sm text-gray-600 mb-3 flex flex-col gap-1 items-center sm:items-start">
                          <span>{doctor.qualification}</span>
                          <span>Стаж: {doctor.experience}</span>
                        </div>

                        <div className="flex items-center gap-1 justify-center sm:justify-start mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className="w-4 h-4 fill-[#18A36C] text-[#18A36C]" 
                            />
                          ))}
                          <span className="text-sm text-gray-600 ml-1">
                            ({doctor.reviews.length} отзывов)
                          </span>
                        </div>
                      </div>

                      <Button
                        onClick={() => handleBookAppointment(doctor.id, `${doctor.name} ${doctor.surname}`)}
                        className="w-full sm:w-auto bg-[#18A36C] hover:bg-[#18A36C]/90 text-white px-8 py-4 h-auto text-lg rounded-lg transition-all duration-300"
                      >
                        Запись онлайн
                        <ArrowRight className="w-5 h-5 ml-[2.5px]" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-[#E8E6E3] rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-gray-600" />
            </div>
            <h3 className="text-lg text-gray-600 mb-2">Врачи не найдены</h3>
            <p className="text-sm text-gray-600">
              В данной категории пока нет доступных специалистов
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
