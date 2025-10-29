import { ChevronRight, Home } from 'lucide-react';
import { useRouter } from '../SMRouter/SMRouter';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const { navigate } = useRouter();

  return (
    <div className="bg-white border-b border-[#CACACA]">
      <div className="px-4 lg:px-8">
        <div className="max-w-4xl lg:max-w-6xl mx-auto">
          <nav className="h-14 flex items-center space-x-1 text-sm overflow-hidden">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-1 text-[#212121] hover:text-[#18A36C] transition-colors flex-shrink-0"
            >
              <Home className="w-4 h-4 flex-shrink-0" />
              <span className="hidden sm:inline whitespace-nowrap overflow-hidden text-ellipsis">Медицинский центр "Doctor Family"</span>
              <span className="sm:hidden whitespace-nowrap overflow-hidden text-ellipsis">Главная</span>
            </button>
            
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              
              return (
                <div key={index} className="flex items-center gap-1 min-w-0">
                  <ChevronRight className="w-4 h-4 text-[#CACACA] flex-shrink-0" />
                  {isLast ? (
                    <span className="text-gray-400 cursor-default whitespace-nowrap overflow-hidden text-ellipsis">{item.label}</span>
                  ) : (
                    <button
                      onClick={() => item.href && navigate(item.href)}
                      className="text-[#212121] hover:text-[#18A36C] transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}