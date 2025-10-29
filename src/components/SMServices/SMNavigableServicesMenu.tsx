'use client'

import { useState } from 'react';
import { ChevronRight, Baby, Smile, Heart, Stethoscope, Activity, Eye, Search, Building2, Menu } from 'lucide-react';
import { Button } from '../common/SMButton/SMButton';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../common/SMTooltip/SMTooltip';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from '../common/SMSheet/SMSheet';
import { useRouter } from '../SMRouter/SMRouter';
import { useMenu } from '../SMMenuContext/SMMenuContext';

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

interface MenuItemProps {
  item: MenuItem;
  level: number;
  activeItem: string | null;
  onItemClick: (itemId: string, item: MenuItem) => void;
  expandedItems: Set<string>;
  onToggleExpand: (itemId: string) => void;
  currentRoute: string;
}

function MenuItemComponent({ item, level, activeItem, onItemClick, expandedItems, onToggleExpand, currentRoute }: MenuItemProps) {
  const hasChildren = item.children && item.children.length > 0;
  const isExpanded = expandedItems.has(item.id);
  const isActive = activeItem === item.id;

  const handleClick = () => {
    if (hasChildren) {
      onToggleExpand(item.id);
    } else {
      onItemClick(item.id, item);
    }
  };

  const getItemStyles = () => {
    if (level === 0) {
      return isActive
        ? 'bg-[#18A36C] text-white border-l-4 border-white'
        : 'text-[#2E2E2E] hover:bg-gray-50 border-l-4 border-transparent hover:border-[#18A36C]';
    } else if (level === 1) {
      return isActive
        ? 'bg-[#18A36C]/10 text-[#18A36C] border-l-2 border-[#18A36C]'
        : 'text-[#2E2E2E] hover:bg-white border-l-2 border-transparent hover:border-[#E8E6E3]';
    } else {
      return isActive
        ? 'bg-[#18A36C]/5 text-[#18A36C]'
        : 'text-gray-600 hover:bg-white hover:text-[#2E2E2E]';
    }
  };

  return (
    <div className="group">
      <Button
        variant="ghost"
        className={`w-full justify-start text-left p-0 h-auto transition-all duration-200 ${getItemStyles()}`}
        onClick={handleClick}
      >
        <div
          className="flex items-start justify-between w-full py-3 px-4 gap-3"
          style={{ paddingLeft: `${level * 16 + 16}px` }}
        >
          <div className="flex items-start gap-3 flex-1 min-w-0">
            {level === 0 && item.icon && (
              <div className={`flex-shrink-0 mt-0.5 ${isActive ? 'text-white' : 'text-[#18A36C]'}`}>
                {item.icon}
              </div>
            )}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className={`leading-relaxed transition-all duration-200 break-words-soft text-wrap-balance ${level === 0 ? 'text-sm' : level === 1 ? 'text-sm' : 'text-xs'
                    }`}>
                    {item.title}
                  </span>
                </TooltipTrigger>
                {item.title.length > 50 && (
                  <TooltipContent side="right" className="max-w-sm">
                    <p className="text-sm">{item.title}</p>
                  </TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          </div>
          {hasChildren && (
            <div className={`flex-shrink-0 transition-transform duration-200 mt-0.5 ${isExpanded ? 'rotate-90' : ''
              } ${isActive && level === 0 ? 'text-white' : 'text-gray-400'}`}>
              <ChevronRight className="w-4 h-4" />
            </div>
          )}
        </div>
      </Button>

      {hasChildren && (
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="bg-white">
            {item.children!.map((child) => (
              <MenuItemComponent
                key={child.id}
                item={child}
                level={level + 1}
                activeItem={activeItem}
                onItemClick={onItemClick}
                expandedItems={expandedItems}
                onToggleExpand={onToggleExpand}
                currentRoute={currentRoute}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function NavigableServicesMenu() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navigate, currentRoute } = useRouter();
  const { isBurgerMenuOpen } = useMenu();

  const handleItemClick = (itemId: string, item: MenuItem) => {
    setActiveItem(itemId);

    let categoryId = '';
    let foundItem: MenuItem | null = null;

    const findCategory = (items: MenuItem[], parentId = ''): boolean => {
      for (const menuItem of items) {
        if (menuItem.id === itemId) {
          categoryId = parentId || menuItem.id;
          foundItem = item;
          return true;
        }
        if (menuItem.children && findCategory(menuItem.children, parentId || menuItem.id)) {
          return true;
        }
      }
      return false;
    };

    findCategory(menuData);

    if (foundItem) {
      navigate(`/services/${categoryId}/${itemId}`);
    }
  };

  const handleToggleExpand = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  const MenuContent = ({ onItemClick: onItemClickProp }: { onItemClick?: (itemId: string, item: MenuItem) => void }) => (
    <div className="bg-white flex flex-col">
      <div className="bg-[#18A36C] p-4 lg:p-6">
        <h2 className="text-white text-lg lg:text-xl mb-1 lg:mb-2">Услуги</h2>
        <p className="text-white/80 text-xs lg:text-sm">Выберите нужное направление</p>
      </div>
      <div className="py-2">
        {menuData.map((item) => (
          <MenuItemComponent
            key={item.id}
            item={item}
            level={0}
            activeItem={activeItem}
            onItemClick={onItemClickProp || handleItemClick}
            expandedItems={expandedItems}
            onToggleExpand={handleToggleExpand}
            currentRoute={currentRoute}
          />
        ))}
      </div>

      <div className="p-3 lg:p-4 mt-2 lg:mt-4 border-t border-[#E8E6E3] bg-white">
        <div className="text-center">
          <p className="text-xs text-gray-600 mb-2 lg:mb-3">Не нашли нужную услугу?</p>
          <Button
            size="sm"
            className="bg-[#18A36C] hover:bg-[#18A36C]/90 text-white w-full text-xs"
          >
            Связаться с нами
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="hidden lg:block w-72 bg-white border-r border-[#CACACA] shadow-lg flex-shrink-0 sticky top-[80px] h-[calc(100vh-80px)] overflow-y-auto">
        <MenuContent />
      </div>

      <div className="lg:hidden fixed top-24 left-4 z-50">
        <Sheet open={mobileMenuOpen && !isBurgerMenuOpen} onOpenChange={(open) => !isBurgerMenuOpen && setMobileMenuOpen(open)}>
          <SheetTrigger asChild>
            <Button
              size="sm"
              disabled={isBurgerMenuOpen}
              className="bg-[#18A36C] hover:bg-[#18A36C]/90 text-white shadow-xl rounded-full w-14 h-14 p-0 transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 p-0">
            <SheetHeader className="sr-only">
              <SheetTitle>Меню услуг</SheetTitle>
              <SheetDescription>Навигация по медицинским услугам клиники</SheetDescription>
            </SheetHeader>
            <MenuContent onItemClick={(itemId, item) => {
              handleItemClick(itemId, item);
              if (!item.children || item.children.length === 0) {
                setMobileMenuOpen(false);
              }
            }} />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}