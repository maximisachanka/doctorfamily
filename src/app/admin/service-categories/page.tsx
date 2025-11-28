'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSession } from 'next-auth/react';
import { FolderTree, Loader2, ChevronRight, ChevronDown } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { AdminMenu } from '@/components/SMAdmin/SMAdminMenu';
import {
  AdminSection,
  EmptyState,
  ItemCard,
  CardActions,
  FormModal,
  FormField,
  FormInput,
  FormTextarea,
  FormSelect,
  Badge,
} from '@/components/SMAdmin/SMAdminSection';
import NotFound from '../../not-found';
import { AdminAuthForm } from '@/components/SMAdmin/SMAdminAuthForm';
import { useAdminSession } from '@/hooks/useAdminSession';
import { useAlert } from '@/components/common/SMAlert/AlertProvider';
import { AdminAccessSkeleton } from '@/components/SMAdmin/SMAdminSkeleton';
import { useConfirmDialog } from '@/hooks/useConfirmDialog';
import { ConfirmDialog } from '@/components/SMAdmin/SMConfirmDialog';
import { iconMap, IconName } from '@/utils/iconMapper';

interface ServiceCategory {
  id: number;
  name: string;
  slug: string;
  icon: string | null;
  description: string | null;
  parent_id: number | null;
  order: number;
  is_active: boolean;
  children?: ServiceCategory[];
  parent?: {
    id: number;
    name: string;
  };
}

// Список доступных иконок для выбора
const availableIcons: IconName[] = [
  'Stethoscope',
  'Baby',
  'Smile',
  'Heart',
  'Activity',
  'Eye',
  'Brain',
  'Users',
  'ShieldPlus',
  'Syringe',
  'Pill',
  'Microscope',
  'Hospital',
  'Dna',
  'Bone',
  'Droplet',
  'Waves',
  'Zap',
  'Sparkles',
  'Building',
  'Building2',
  'MessageSquare',
  'UserCheck',
  'Timer',
  'Phone',
  'MapPin',
  'Mail',
  'Search',
];

export default function AdminServiceCategoriesPage() {
  const { status } = useSession();
  const { sessionVerified, isLoading: sessionLoading, verifySession } = useAdminSession();
  const [hasAdminRole, setHasAdminRole] = useState<boolean | null>(null);
  const [isCheckingRole, setIsCheckingRole] = useState(true);
  const { success, error: showError } = useAlert();
  const confirmDialog = useConfirmDialog();

  // Data states
  const [categories, setCategories] = useState<ServiceCategory[]>([]);
  const [loading, setLoading] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(new Set());

  // Form states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<ServiceCategory | null>(null);
  const [formLoading, setFormLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    icon: '',
    description: '',
    parent_id: '',
    order: '0',
    is_active: true,
  });

  // Check admin role
  useEffect(() => {
    if (status === 'authenticated') {
      checkAdminRole();
    } else if (status === 'unauthenticated') {
      setHasAdminRole(false);
    }
  }, [status]);

  // Load data when session is verified
  useEffect(() => {
    if (sessionVerified && hasAdminRole) {
      loadData();
    }
  }, [sessionVerified, hasAdminRole]);

  const checkAdminRole = async () => {
    setIsCheckingRole(true);
    try {
      const res = await fetch('/api/admin/auth');
      const data = await res.json();
      setHasAdminRole(data.isAdmin);
    } catch (error) {
      setHasAdminRole(false);
    } finally {
      setIsCheckingRole(false);
    }
  };

  const handleAuthSuccess = () => {
    verifySession();
  };

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/service-categories');

      if (res.ok) {
        const data = await res.json();
        setCategories(data);
      }
    } catch (error) {
      console.error('Error loading data:', error);
      showError('Ошибка загрузки данных');
    } finally {
      setLoading(false);
    }
  };

  // Flatten categories for parent selection
  const flattenedCategories = useMemo(() => {
    const flatten = (cats: ServiceCategory[], level = 0): Array<ServiceCategory & { level: number }> => {
      const result: Array<ServiceCategory & { level: number }> = [];
      for (const cat of cats) {
        result.push({ ...cat, level });
        if (cat.children && cat.children.length > 0) {
          result.push(...flatten(cat.children, level + 1));
        }
      }
      return result;
    };
    return flatten(categories);
  }, [categories]);

  // Toggle category expansion
  const toggleExpand = (id: number) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedCategories(newExpanded);
  };

  // Generate slug from name
  const generateSlug = (name: string): string => {
    return name
      .toLowerCase()
      .trim()
      // Replace Russian letters
      .replace(/а/g, 'a')
      .replace(/б/g, 'b')
      .replace(/в/g, 'v')
      .replace(/г/g, 'g')
      .replace(/д/g, 'd')
      .replace(/е/g, 'e')
      .replace(/ё/g, 'yo')
      .replace(/ж/g, 'zh')
      .replace(/з/g, 'z')
      .replace(/и/g, 'i')
      .replace(/й/g, 'y')
      .replace(/к/g, 'k')
      .replace(/л/g, 'l')
      .replace(/м/g, 'm')
      .replace(/н/g, 'n')
      .replace(/о/g, 'o')
      .replace(/п/g, 'p')
      .replace(/р/g, 'r')
      .replace(/с/g, 's')
      .replace(/т/g, 't')
      .replace(/у/g, 'u')
      .replace(/ф/g, 'f')
      .replace(/х/g, 'h')
      .replace(/ц/g, 'ts')
      .replace(/ч/g, 'ch')
      .replace(/ш/g, 'sh')
      .replace(/щ/g, 'sch')
      .replace(/ъ/g, '')
      .replace(/ы/g, 'y')
      .replace(/ь/g, '')
      .replace(/э/g, 'e')
      .replace(/ю/g, 'yu')
      .replace(/я/g, 'ya')
      // Replace spaces and special characters
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
      // Remove multiple dashes
      .replace(/-+/g, '-')
      // Remove leading/trailing dashes
      .replace(/^-|-$/g, '');
  };

  const handleSave = async () => {
    setFormLoading(true);
    try {
      const url = editingCategory
        ? `/api/admin/service-categories/${editingCategory.id}`
        : '/api/admin/service-categories';

      const method = editingCategory ? 'PUT' : 'POST';

      // Generate slug from name
      const slug = generateSlug(formData.name);

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          slug, // Use auto-generated slug
          parent_id: formData.parent_id ? parseInt(formData.parent_id) : null,
          order: parseInt(formData.order),
        }),
      });

      if (res.ok) {
        await loadData();
        resetForm();
        success(editingCategory ? 'Категория обновлена' : 'Категория создана');
      } else {
        const error = await res.json();
        showError(error.error || 'Ошибка сохранения');
      }
    } catch (error) {
      showError('Ошибка сохранения');
    } finally {
      setFormLoading(false);
    }
  };

  const handleDelete = async (id: number, categoryName: string) => {
    const confirmed = await confirmDialog.confirm({
      title: 'Удаление категории',
      message: `Вы уверены, что хотите удалить категорию "${categoryName}"? Это также удалит все вложенные подкатегории. Это действие нельзя отменить.`,
      confirmText: 'Удалить',
      cancelText: 'Отмена',
      variant: 'danger',
    });

    if (!confirmed) return;

    try {
      const res = await fetch(`/api/admin/service-categories/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        await loadData();
        success('Категория удалена');
      } else {
        const error = await res.json();
        showError(error.error || 'Ошибка удаления');
      }
    } catch (error) {
      showError('Ошибка удаления');
    }
  };

  const handleEdit = (category: ServiceCategory) => {
    setEditingCategory(category);
    setFormData({
      name: category.name,
      icon: category.icon || '',
      description: category.description || '',
      parent_id: category.parent_id?.toString() || '',
      order: category.order.toString(),
      is_active: category.is_active,
    });
    setIsModalOpen(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      icon: '',
      description: '',
      parent_id: '',
      order: '0',
      is_active: true,
    });
    setEditingCategory(null);
    setIsModalOpen(false);
  };

  const handleAdd = () => {
    resetForm();
    setIsModalOpen(true);
  };

  // Recursive category rendering
  const renderCategory = (category: ServiceCategory, level = 0) => {
    const Icon = category.icon ? iconMap[category.icon as IconName] : null;
    const hasChildren = category.children && category.children.length > 0;
    const isExpanded = expandedCategories.has(category.id);

    return (
      <div key={category.id} className="relative">
        {/* Vertical line for hierarchy */}
        {level > 0 && (
          <div
            className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#18A36C]/20 via-[#18A36C]/10 to-transparent hidden md:block"
            style={{ marginLeft: `${(level - 1) * 32 + 16}px` }}
          />
        )}

        {/* Horizontal connector */}
        {level > 0 && (
          <div
            className="absolute top-8 left-0 h-0.5 bg-[#18A36C]/20 hidden md:block"
            style={{
              marginLeft: `${(level - 1) * 32 + 16}px`,
              width: '16px'
            }}
          />
        )}

        <div
          className="mb-3 md:mb-4"
          style={{ marginLeft: level > 0 ? `${level * 32}px` : '0' }}
        >
          <div className="group relative bg-white rounded-xl border border-gray-200 hover:border-[#18A36C]/50 hover:shadow-lg transition-all duration-300">
            {/* Gradient decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#18A36C]/0 via-[#18A36C]/5 to-[#18A36C]/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative p-4 md:p-5">
              <div className="flex items-start gap-3 md:gap-4">
                {/* Toggle button + Icon */}
                <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
                  {hasChildren && (
                    <button
                      onClick={() => toggleExpand(category.id)}
                      className="p-1.5 hover:bg-[#18A36C]/10 rounded-lg transition-all duration-200 group/btn cursor-pointer"
                      aria-label={isExpanded ? 'Свернуть' : 'Развернуть'}
                    >
                      {isExpanded ? (
                        <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-[#18A36C] group-hover/btn:scale-110 transition-transform" />
                      ) : (
                        <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover/btn:text-[#18A36C] group-hover/btn:scale-110 transition-all" />
                      )}
                    </button>
                  )}

                  {Icon && (
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#18A36C]/20 rounded-xl blur-md group-hover:blur-lg transition-all" />
                      <div className="relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#18A36C] to-[#15905f] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-md">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Header */}
                  <div className="mb-2 md:mb-3">
                    <h3 className="text-base md:text-lg font-semibold text-gray-800 group-hover:text-[#18A36C] transition-colors truncate">
                      {category.name}
                    </h3>
                  </div>

                  {/* Description */}
                  {category.description && (
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed line-clamp-2 mb-3">
                      {category.description}
                    </p>
                  )}

                  {/* Tags */}
                  <div className="flex items-center gap-1.5 md:gap-2 flex-wrap mb-3 md:mb-4">
                    <Badge variant="secondary">
                      <span className="hidden sm:inline">Порядок:</span> {category.order}
                    </Badge>
                    <Badge variant={category.is_active ? 'success' : 'danger'}>
                      {category.is_active ? 'Активна' : 'Неактивна'}
                    </Badge>
                    {hasChildren && (
                      <Badge variant="primary">
                        <span className="hidden sm:inline">Подкатегорий:</span> {category.children!.length}
                      </Badge>
                    )}
                    {level > 0 && (
                      <Badge variant="secondary">
                        <span className="hidden sm:inline">Уровень:</span> {level}
                      </Badge>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-end pt-3 border-t border-gray-100">
                    <CardActions
                      onEdit={() => handleEdit(category)}
                      onDelete={() => handleDelete(category.id, category.name)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="h-1 bg-gradient-to-r from-transparent via-[#18A36C]/20 to-transparent group-hover:via-[#18A36C] transition-all duration-300 rounded-b-xl" />
          </div>
        </div>

        {/* Render children */}
        {hasChildren && isExpanded && (
          <div className="relative">
            {category.children!.map((child, idx) => (
              <div key={child.id}>
                {renderCategory(child, level + 1)}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Loading state
  if (status === 'loading' || hasAdminRole === null || sessionLoading || isCheckingRole) {
    return <AdminAccessSkeleton />;
  }

  // Not admin - show 404
  if (status === 'unauthenticated' || hasAdminRole === false) {
    return <NotFound />;
  }

  // Admin login form
  if (!sessionVerified) {
    return <AdminAuthForm onSuccess={handleAuthSuccess} />;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminMenu />

      <div className="flex-1 p-4 lg:p-8 overflow-auto">
        <div className="max-w-7xl mx-auto">
          <AdminSection
            title="Категории услуг"
            icon={FolderTree}
            count={flattenedCategories.length}
            loading={loading}
            onAdd={handleAdd}
            addButtonText="Добавить категорию"
            hideSearch
          >
            {categories.length === 0 ? (
              <EmptyState
                icon={FolderTree}
                title="Категории не найдены"
                description="Добавьте первую категорию услуг"
                actionText="Добавить категорию"
                onAction={handleAdd}
              />
            ) : (
              <div className="space-y-2">
                <AnimatePresence>
                  {categories.map((category) => renderCategory(category))}
                </AnimatePresence>
              </div>
            )}
          </AdminSection>

          {/* Form Modal */}
          <FormModal
            isOpen={isModalOpen}
            onClose={resetForm}
            title={editingCategory ? 'Редактирование категории' : 'Новая категория'}
            onSubmit={handleSave}
            loading={formLoading}
            disabled={!formData.name}
          >
            <div className="space-y-4">
              <FormField label="Название" required>
                <FormInput
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Детская стоматология"
                />
                {formData.name && (
                  <p className="text-xs text-gray-500 mt-1.5">
                    URL будет: <span className="font-mono text-[#18A36C]">/{generateSlug(formData.name)}</span>
                  </p>
                )}
              </FormField>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField label="Иконка">
                  <FormSelect
                    value={formData.icon}
                    onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                  >
                    <option value="">Без иконки</option>
                    {availableIcons.map((iconName) => (
                      <option key={iconName} value={iconName}>
                        {iconName}
                      </option>
                    ))}
                  </FormSelect>
                  {formData.icon && iconMap[formData.icon as IconName] && (
                    <div className="mt-2 flex items-center gap-2">
                      <div className="w-8 h-8 bg-[#18A36C]/10 rounded flex items-center justify-center">
                        {(() => {
                          const PreviewIcon = iconMap[formData.icon as IconName];
                          return <PreviewIcon className="w-4 h-4 text-[#18A36C]" />;
                        })()}
                      </div>
                      <span className="text-xs text-gray-500">Предпросмотр</span>
                    </div>
                  )}
                </FormField>

                <FormField label="Родительская категория">
                  <FormSelect
                    value={formData.parent_id}
                    onChange={(e) => setFormData({ ...formData, parent_id: e.target.value })}
                  >
                    <option value="">Корневая категория</option>
                    {flattenedCategories
                      .filter((cat) => !editingCategory || cat.id !== editingCategory.id)
                      .map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {'—'.repeat(cat.level)} {cat.name}
                        </option>
                      ))}
                  </FormSelect>
                </FormField>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField label="Порядок сортировки">
                  <FormInput
                    type="number"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: e.target.value })}
                    placeholder="0"
                  />
                </FormField>

                <FormField label="Статус">
                  <FormSelect
                    value={formData.is_active ? 'true' : 'false'}
                    onChange={(e) => setFormData({ ...formData, is_active: e.target.value === 'true' })}
                  >
                    <option value="true">Активна</option>
                    <option value="false">Неактивна</option>
                  </FormSelect>
                </FormField>
              </div>

              <FormField label="Описание">
                <FormTextarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  placeholder="Краткое описание категории..."
                />
              </FormField>
            </div>
          </FormModal>

          {/* Confirm Dialog */}
          <ConfirmDialog
            isOpen={confirmDialog.isOpen}
            onClose={confirmDialog.handleCancel}
            onConfirm={confirmDialog.handleConfirm}
            title={confirmDialog.options.title}
            message={confirmDialog.options.message}
            confirmText={confirmDialog.options.confirmText}
            cancelText={confirmDialog.options.cancelText}
            variant={confirmDialog.options.variant}
            loading={confirmDialog.loading}
          />
        </div>
      </div>
    </div>
  );
}
