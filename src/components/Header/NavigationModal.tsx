'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import navigationConfig from '@/config/navigation.json';
import { iconMap, IconName } from '@/utils/iconMapper';

interface NavigationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

interface NavigationItem {
  name: string;
  path: string;
  icon?: string;
  subPages?: { name: string; path: string }[];
}

export function NavigationModal({ isOpen, onClose, onNavigate }: NavigationModalProps) {
  const handleNavigate = (path: string) => {
    onNavigate(path);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[100]"
            onClick={onClose}
          />

          {/* Modal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-7xl h-[90vh] bg-white rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] z-[101] overflow-hidden"
          >
            {/* Header with gradient */}
            <div className="relative bg-gradient-to-r from-[#18A36C] to-[#15905f] px-10 py-8">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
              <div className="relative flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">Навигация по сайту</h2>
                  <p className="text-white/90 text-base">Выберите раздел для быстрого перехода</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-3 hover:bg-white/20 rounded-xl transition-all cursor-pointer group backdrop-blur-sm"
                >
                  <X className="w-7 h-7 text-white group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="h-[calc(90vh-140px)] overflow-y-auto px-10 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {(navigationConfig.mainNavigation as NavigationItem[]).map((item, index) => {
                  const Icon = item.icon ? iconMap[item.icon as IconName] : null;
                  const hasSubPages = item.subPages && item.subPages.length > 0;

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.4 }}
                      className="group"
                    >
                      {/* Section Card */}
                      <div className="relative bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-[#18A36C]/30 hover:shadow-xl hover:shadow-[#18A36C]/10 transition-all duration-300">
                        {/* Main Section Button */}
                        <button
                          onClick={() => handleNavigate(item.path)}
                          className="w-full p-6 cursor-pointer"
                        >
                          <div className="flex items-start gap-4">
                            {Icon && (
                              <div className="relative">
                                <div className="absolute inset-0 bg-[#18A36C]/20 rounded-xl blur-xl group-hover:bg-[#18A36C]/40 transition-all" />
                                <div className="relative p-4 rounded-xl bg-gradient-to-br from-[#18A36C] to-[#15905f] group-hover:scale-110 transition-transform duration-300">
                                  <Icon className="w-7 h-7 text-white" />
                                </div>
                              </div>
                            )}
                            <div className="flex-1 text-left">
                              <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#18A36C] transition-colors mb-1">
                                {item.name}
                              </h3>
                              <p className="text-sm text-gray-500">
                                {hasSubPages ? `${item.subPages!.length} подразделов` : 'Перейти в раздел'}
                              </p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#18A36C] group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                          </div>
                        </button>

                        {/* Subpages - Always visible */}
                        {hasSubPages && (
                          <div className="border-t border-gray-100 bg-gradient-to-b from-gray-50/50 to-transparent px-6 py-4">
                            <div className="space-y-1">
                              {item.subPages!.map((subPage, subIndex) => (
                                <motion.button
                                  key={subPage.path}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.08 + subIndex * 0.03 }}
                                  onClick={() => handleNavigate(subPage.path)}
                                  className="w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:text-[#18A36C] hover:bg-white rounded-lg transition-all cursor-pointer flex items-center justify-between group/sub"
                                >
                                  <span className="font-medium">{subPage.name}</span>
                                  <ArrowRight className="w-4 h-4 opacity-0 group-hover/sub:opacity-100 group-hover/sub:translate-x-1 transition-all" />
                                </motion.button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
