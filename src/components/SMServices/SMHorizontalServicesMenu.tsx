'use client'

import { useState } from 'react';
import { ChevronDown, Baby, Smile, Heart, Stethoscope, Activity, Eye, Search, Building2 } from 'lucide-react';
import { Button } from '../common/SMButton/SMButton';

interface MenuItem {
  id: string;
  title: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
}

const menuData: MenuItem[] = [
  {
    id: 'pediatric-dentistry',
    title: 'Детская стоматология',
    icon: <Baby className="w-4 h-4" />,
    children: [
      { id: 'pediatric-surgeon', title: 'Детский хирург-стоматолог' },
      { id: 'milk-teeth-treatment', title: 'Лечение молочных зубов' },
      { id: 'pediatric-orthodontist', title: 'Детский ортодонт' },
      { id: 'milk-teeth-anesthesia', title: 'Лечение молочных зубов под наркозом в Минске' }
    ]
  },
  {
    id: 'dentistry',
    title: 'Стоматология',
    icon: <Smile className="w-4 h-4" />,
    children: [
      {
        id: 'therapeutic-dentistry',
        title: 'Терапевтическая стоматология',
        children: [
          { id: 'teeth-whitening', title: 'Отбеливание зубов Beyond Polus' },
          { id: 'professional-cleaning', title: 'Профессиональная чистка зубов Air Flow' },
          { id: 'ultrasonic-cleaning', title: 'Чистка зубов в Минске — ультразвуковая и профессиональная' },
          { id: 'pulpitis-treatment', title: 'Лечение пульпита в Минске — стоимость' },
          { id: 'oral-hygiene', title: 'Профессиональная гигиена полости рта' },
          { id: 'caries-treatment', title: 'Лечение кариеса в Минске' }
        ]
      },
      {
        id: 'implantation',
        title: 'Имплантация',
        children: [
          { id: 'straumann-implants', title: 'Имплантация зубов Straumann в Минске' },
          { id: 'total-implantation', title: 'Тотальная (полная) имплантация зубов в Минске' },
          { id: 'immediate-implantation', title: 'Одномоментная имплантация зубов в Минске' },
          { id: 'osstem-implants', title: 'Имплантация зубов Osstem в Минске' },
          { id: 'all-on-4-6', title: 'Имплантация зубов All-on-4 и All-on-6 в Минске' },
          { id: 'two-stage-implantation', title: 'Двухэтапная имплантация зубов в Минске' },
          { id: 'implantation-prices', title: 'Имплантация зубов в Минске — цены и виды' }
        ]
      },
      {
        id: 'orthopedics',
        title: 'Ортопедия',
        children: [
          { id: 'veneers', title: 'Виниры в Минске — цены и установка' },
          { id: 'crowns', title: 'Коронки на зубы в Минске — цены и виды' }
        ]
      },
      {
        id: 'orthodontics',
        title: 'Ортодонтия',
        children: [
          { id: 'braces-installation', title: 'Установка брекетов в Минске' },
          { id: 'orthodontist-consultation', title: 'Ортодонт в Минске — консультация врача и лечение прикуса' },
          { id: 'aligners', title: 'Элайнеры в Минске — цены на выравнивание зубов без брекетов' }
        ]
      },
      {
        id: 'surgery',
        title: 'Хирургия',
        children: [
          { id: 'tooth-extraction', title: 'Удаление зубов в Минске — удаление зуба мудрости и другие сложные случаи' },
          { id: 'sinus-lift', title: 'Синус-лифтинг в Минске — цены и виды операции' }
        ]
      },
      { id: 'anesthesia-treatment', title: 'Лечение зубов под наркозом в Минске' },
      { id: 'microscope-treatment', title: 'Лечение зубов под микроскопом в Минске' }
    ]
  },
  {
    id: 'gynecology',
    title: 'Гинекология',
    icon: <Heart className="w-4 h-4" />,
    children: [
      { id: 'gynecologist-appointment', title: 'Приём гинеколога' },
      { id: 'diagnostic-studies', title: 'Диагностические исследования' },
      { id: 'intrauterine-device', title: 'Внутриматочная спираль' },
      { id: 'cervical-conization', title: 'Конизация шейки матки' },
      { id: 'colposcopy', title: 'Кольпоскопия шейки матки' },
      { id: 'tube-patency-check', title: 'Проверка проходимости маточных труб (соногистероскопия) с помощью ExEm-геля' },
      { id: 'polyp-removal', title: 'Удаление полипов | Полипэктомия' },
      { id: 'diagnostic-curettage', title: 'Раздельное диагностическое выскабливание' },
      { id: 'culdocentesis', title: 'Кульдоцентез' }
    ]
  },
  {
    id: 'pediatric-gynecology',
    title: 'Детская гинекология',
    icon: <Baby className="w-4 h-4" />,
    children: [
      { id: 'pelvic-ultrasound-girls', title: 'УЗИ органов малого таза для девочек' },
      { id: 'adolescent-gynecologist', title: 'Подростковый гинеколог' },
      { id: 'pediatric-gynecologist', title: 'Детский гинеколог' }
    ]
  },
  {
    id: 'pediatric-urology',
    title: 'Детская урология',
    icon: <Stethoscope className="w-4 h-4" />,
    children: [
      { id: 'varicocele-treatment', title: 'Лечение варикоцеле' },
      { id: 'pediatric-urologist-appointment', title: 'Приём детского уролога' }
    ]
  },
  {
    id: 'endocrinology',
    title: 'Эндокринология',
    icon: <Activity className="w-4 h-4" />,
    children: [
      { id: 'endocrinologist-consultation', title: 'Консультация врача-эндокринолога' }
    ]
  },
  {
    id: 'oncology',
    title: 'Онкология',
    icon: <Stethoscope className="w-4 h-4" />,
    children: [
      { id: 'oncologist-appointment', title: 'Приём врача онколога' }
    ]
  },
  {
    id: 'ultrasound',
    title: 'УЗИ',
    icon: <Eye className="w-4 h-4" />,
    children: [
      { id: 'pelvic-ultrasound', title: 'УЗИ органов малого таза' },
      { id: 'breast-ultrasound', title: 'УЗИ молочных желез' },
      { id: 'thyroid-ultrasound', title: 'УЗИ щитовидной железы' },
      { id: 'abdominal-ultrasound', title: 'УЗИ брюшной полости' },
      { id: 'fetal-ultrasound', title: 'УЗИ плода' },
      { id: 'gender-party', title: 'Гендер пати' }
    ]
  },
  {
    id: 'diagnostics',
    title: 'Диагностика',
    icon: <Search className="w-4 h-4" />,
    children: [
      { id: 'expert-ultrasound', title: 'Экспертное УЗИ' },
      { id: 'analyses', title: 'Анализы' },
      { id: 'tooth-xray', title: 'Снимок зуба' },
      { id: '3d-dental-scan', title: '3D снимок зубов' },
      { id: 'panoramic-dental-scan', title: 'Панорамный снимок зубок' }
    ]
  },
  {
    id: 'day-hospital',
    title: 'Дневной стационар',
    icon: <Building2 className="w-4 h-4" />,
    children: [
      { id: 'procedure-room', title: 'Процедурный кабинет' }
    ]
  }
];

interface DropdownMenuProps {
  item: MenuItem;
  activeItem: string | null;
  onItemClick: (itemId: string) => void;
}

function DropdownMenu({ item, activeItem, onItemClick }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const renderSubmenu = (items: MenuItem[], level: number = 0) => {
    return items.map((subItem) => (
      <div key={subItem.id}>
        <button
          onClick={() => {
            onItemClick(subItem.id);
            setIsOpen(false);
          }}
          className={`w-full text-left px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm hover:bg-[#F4F4F4] transition-colors ${
            activeItem === subItem.id ? 'bg-[#18A36C]/10 text-[#18A36C]' : 'text-[#212121]'
          } ${level > 0 ? 'pl-6 md:pl-8' : ''}`}
        >
          <span className="line-clamp-2">{subItem.title}</span>
        </button>
        {subItem.children && (
          <div className="bg-[#F4F4F4]/30">
            {renderSubmenu(subItem.children, level + 1)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="relative group">
      <Button
        variant="ghost"
        className={`flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1.5 md:py-2 h-auto text-xs md:text-sm transition-all duration-200 ${
          isOpen || (item.children && item.children.some(child => 
            activeItem === child.id || (child.children && child.children.some(grandchild => activeItem === grandchild.id))
          ))
            ? 'bg-[#18A36C] text-white shadow-md'
            : 'text-[#212121] hover:bg-[#18A36C]/10 hover:text-[#18A36C]'
        }`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
      >
        {item.icon && (
          <span className="flex-shrink-0">
            {item.icon}
          </span>
        )}
        <span className="whitespace-nowrap truncate max-w-[120px] md:max-w-none">{item.title}</span>
        {item.children && (
          <ChevronDown className={`w-3 h-3 md:w-4 md:h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        )}
      </Button>

      {item.children && (
        <div
          className={`absolute top-full left-0 mt-1 min-w-72 md:min-w-80 max-w-sm bg-white border border-[#CACACA]/20 rounded-lg shadow-xl z-50 transition-all duration-200 ${
            isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
          }`}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="py-2 max-h-80 md:max-h-96 overflow-y-auto">
            {renderSubmenu(item.children)}
          </div>
        </div>
      )}
    </div>
  );
}

export function HorizontalServicesMenu() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
  };

  return (
    <div className="bg-white border-b border-[#CACACA] shadow-sm relative z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="py-3 md:py-4">
          <div className="mb-3 md:mb-4">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-[#18A36C] rounded-full flex items-center justify-center">
                <span className="text-white text-xs md:text-sm">+</span>
              </div>
              <h2 className="text-base md:text-lg text-[#212121]">Наши услуги</h2>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 md:gap-2">
            {menuData.map((item) => (
              <DropdownMenu
                key={item.id}
                item={item}
                activeItem={activeItem}
                onItemClick={handleItemClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}