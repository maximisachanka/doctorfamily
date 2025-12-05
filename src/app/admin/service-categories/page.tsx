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
  'Baby',
  'Smile',
  'Heart',
  'Activity',
  'Eye',
  'Brain',
  'Users',
  'Stethoscope',
  'ShieldPlus',
  'Syringe',
  'Pill',
  'Microscope',
  'Hospital',
  'Dna',
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
  const [searchValue, setSearchValue] = useState('');

  // Form states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<ServiceCategory | null>(null);
  const [formLoading, setFormLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
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

  const handleSave = async () => {
    setFormLoading(true);
    try {
      const url = editingCategory
        ? `/api/admin/service-categories/${editingCategory.id}`
        : '/api/admin/service-categories';

      const method = editingCategory ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
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
      slug: category.slug,
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
      slug: '',
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
      <div key={category.id} className="mb-2 relative" style={{ marginLeft: `${level * 24}px` }}>
        <ItemCard>
          {/* Toggle button */}
          {hasChildren && (
            <button
              onClick={() => toggleExpand(category.id)}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded transition-colors"
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4 text-gray-600" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-600" />
              )}
            </button>
          )}

          <div className={hasChildren ? 'ml-8' : 'ml-2'}>
            {/* Icon and info */}
            <div className="flex items-center gap-3 mb-3">
              {Icon && (
                <div className="w-10 h-10 bg-[#18A36C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#18A36C]" />
                </div>
              )}
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{category.name}</h3>
                <p className="text-xs text-gray-500">/{category.slug}</p>
              </div>
            </div>

            {/* Description */}
            {category.description && (
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{category.description}</p>
            )}

            {/* Tags */}
            <div className="flex items-center gap-2 flex-wrap mb-3">
              <Badge variant="secondary">Порядок: {category.order}</Badge>
              <Badge variant={category.is_active ? 'success' : 'danger'}>
                {category.is_active ? 'Активна' : 'Неактивна'}
              </Badge>
              {hasChildren && (
                <Badge variant="primary">
                  Подкатегорий: {category.children!.length}
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
        </ItemCard>

        {/* Render children */}
        {hasChildren && isExpanded && (
          <div className="mt-2">
            {category.children!.map((child) => renderCategory(child, level + 1))}
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
            searchValue={searchValue}
            onSearchChange={setSearchValue}
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
            disabled={!formData.name || !formData.slug}
          >
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField label="Название" required>
                  <FormInput
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      const name = e.target.value;
                      setFormData({
                        ...formData,
                        name,
                        // Auto-generate slug from name if creating new
                        slug: !editingCategory ? name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') : formData.slug
                      });
                    }}
                    placeholder="Детская стоматология"
                  />
                </FormField>

                <FormField label="Slug (URL)" required>
                  <FormInput
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    placeholder="detskaya-stomatologiya"
                  />
                </FormField>
              </div>

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