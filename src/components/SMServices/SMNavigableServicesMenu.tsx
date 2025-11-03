'use client';

import { useState } from 'react';
import { ChevronRight, Menu } from 'lucide-react';
import { Button } from '../common/SMButton/SMButton';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../common/SMTooltip/SMTooltip';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from '../common/SMSheet/SMSheet';
import { useRouter } from '../SMRouter/SMRouter';
import { useMenu } from '../SMMenuContext/SMMenuContext';
import servicesMenuConfig from '@/config/servicesMenu.json';
import servicesMenuData from '@/data/SMServicesData/SMServicesMenuData.json';
import { iconMap, IconName } from '@/utils/iconMapper';

interface MenuItem {
  id: string;
  title: string;
  icon?: string;
  children?: MenuItem[];
}

interface MenuItemProps {
  item: MenuItem;
  level: number;
  activeItem: string | null;
  onItemClick: (itemId: string, item: MenuItem) => void;
  expandedItems: Set<string>;
  onToggleExpand: (itemId: string) => void;
  currentRoute: string;
}

function MenuItemComponent({
  item,
  level,
  activeItem,
  onItemClick,
  expandedItems,
  onToggleExpand,
  currentRoute
}: MenuItemProps) {
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

  const Icon = item.icon ? iconMap[item.icon as IconName] : null;

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
            {level === 0 && Icon && (
              <div className={`flex-shrink-0 mt-0.5 ${isActive ? 'text-white' : 'text-[#18A36C]'}`}>
                <Icon className="w-4 h-4" />
              </div>
            )}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className={`leading-relaxed transition-all duration-200 break-words-soft text-wrap-balance ${
                    level === 0 ? 'text-sm' : level === 1 ? 'text-sm' : 'text-xs'
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
            <div className={`flex-shrink-0 transition-transform duration-200 mt-0.5 ${
              isExpanded ? 'rotate-90' : ''
            } ${isActive && level === 0 ? 'text-white' : 'text-gray-400'}`}>
              <ChevronRight className="w-4 h-4" />
            </div>
          )}
        </div>
      </Button>

      {hasChildren && (
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
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

  const menuData = servicesMenuData.menuData;

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
        <h2 className="text-white text-lg lg:text-xl mb-1 lg:mb-2">
          {servicesMenuConfig.header.title}
        </h2>
        <p className="text-white/80 text-xs lg:text-sm">
          {servicesMenuConfig.header.subtitle}
        </p>
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
          <p className="text-xs text-gray-600 mb-2 lg:mb-3">
            {servicesMenuConfig.footer.text}
          </p>
          <Button
            size="sm"
            className="bg-[#18A36C] hover:bg-[#18A36C]/90 text-white w-full text-xs"
          >
            {servicesMenuConfig.footer.buttonText}
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
