'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../common/SMDialog/SMDialog';
import { CalendarDays } from 'lucide-react';
import { ImageWithFallback } from '../SMImage/ImageWithFallback';

interface Material {
  id: string;
  title: string;
  content: string;
  detailed_content?: string | null;
  image: string;
  date: string;
  dateRaw?: string;
  year: number;
}

interface MaterialDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  material: Material | null;
}

// Функция для проверки, является ли материал новым (менее месяца)
export function isNewMaterial(dateRaw?: string): boolean {
  if (!dateRaw) return false;

  const materialDate = new Date(dateRaw);
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

  return materialDate > oneMonthAgo;
}

export function MaterialDetailModal({ isOpen, onClose, material }: MaterialDetailModalProps) {
  if (!material) return null;

  const isNew = isNewMaterial(material.dateRaw);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto pt-12 [&>button]:w-12 [&>button]:h-12 [&>button]:top-6 [&>button]:right-6 [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button]:!border-0 [&>button]:!outline-none [&>button]:!ring-0 [&>button]:!shadow-none [&>button]:focus:!ring-0 [&>button]:focus:!outline-none [&>button]:focus-visible:!ring-0 [&>button]:focus-visible:!outline-none [&_svg]:!size-6">
        <DialogHeader className="pt-4">
          <DialogTitle className="text-2xl text-[#2E2E2E]">
            {material.title}
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Специальное предложение {isNew && '• Новое'}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Image */}
          <div className="relative h-64 rounded-lg overflow-hidden">
            <ImageWithFallback
              src={material.image}
              alt={material.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-[#2E2E2E] mb-3">О материале</h3>
            <p className="text-gray-700 leading-relaxed">
              {material.content}
            </p>
          </div>

          {/* Detailed description */}
          {material.detailed_content && (
            <div>
              <h3 className="text-lg font-semibold text-[#2E2E2E] mb-3">Подробная информация</h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {material.detailed_content}
              </p>
            </div>
          )}

          {/* Additional Info */}
          <div>
            <h3 className="text-lg font-semibold text-[#2E2E2E] mb-3">Дополнительно</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-10 h-10 bg-[#18A36C]/10 rounded-lg flex items-center justify-center">
                  <CalendarDays className="w-5 h-5 text-[#18A36C]" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Дата публикации</div>
                  <div className="font-medium">{material.date}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
