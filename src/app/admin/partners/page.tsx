'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSession } from 'next-auth/react';
import { AnimatePresence } from 'framer-motion';
import { Handshake, Loader2, Globe, Hash } from 'lucide-react';
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

interface Partner {
  id: number;
  name: string;
  description: string;
  image_url: string;
  website_url: string;
  number: number;
  category_id: number;
  category: {
    id: number;
    name: string;
    slug: string;
  };
}

interface Category {
  id: number;
  name: string;
  slug: string;
}

export default function AdminPartnersPage() {
  const { status } = useSession();
  const { sessionVerified, isLoading: sessionLoading, verifySession } = useAdminSession();
  const [hasAdminRole, setHasAdminRole] = useState<boolean | null>(null);

  // Data states
  const [partners, setPartners] = useState<Partner[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Form states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPartner, setEditingPartner] = useState<Partner | null>(null);
  const [formLoading, setFormLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image_url: '',
    website_url: '',
    number: '1',
    category_id: '',
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
    try {
      const res = await fetch('/api/admin/auth');
      const data = await res.json();
      setHasAdminRole(data.isAdmin);
    } catch (error) {
      setHasAdminRole(false);
    }
  };

  const handleAuthSuccess = () => {
    verifySession();
  };

  const loadData = async () => {
    setLoading(true);
    try {
      const [partnersRes, categoriesRes] = await Promise.all([
        fetch('/api/admin/partners'),
        fetch('/api/categories'),
      ]);

      if (partnersRes.ok) {
        const data = await partnersRes.json();
        setPartners(data);
      }

      if (categoriesRes.ok) {
        const data = await categoriesRes.json();
        setCategories(data);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Filtered partners
  const filteredPartners = useMemo(() => {
    if (!searchQuery) return partners;
    const query = searchQuery.toLowerCase();
    return partners.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.name.toLowerCase().includes(query)
    );
  }, [partners, searchQuery]);

  // Form handlers
  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      image_url: '',
      website_url: '',
      number: '1',
      category_id: '',
    });
    setEditingPartner(null);
    setIsModalOpen(false);
  };

  const handleAdd = () => {
    resetForm();
    setIsModalOpen(true);
  };

  const handleEdit = (partner: Partner) => {
    setEditingPartner(partner);
    setFormData({
      name: partner.name,
      description: partner.description,
      image_url: partner.image_url,
      website_url: partner.website_url,
      number: partner.number.toString(),
      category_id: partner.category_id.toString(),
    });
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    setFormLoading(true);
    try {
      const url = editingPartner
        ? `/api/admin/partners/${editingPartner.id}`
        : '/api/admin/partners';

      const method = editingPartner ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        await loadData();
        resetForm();
      } else {
        const error = await res.json();
        alert(error.error || 'Ошибка сохранения');
      }
    } catch (error) {
      alert('Ошибка сохранения');
    } finally {
      setFormLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Вы уверены, что хотите удалить партнёра?')) return;

    try {
      const res = await fetch(`/api/admin/partners/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        await loadData();
      } else {
        const error = await res.json();
        alert(error.error || 'Ошибка удаления');
      }
    } catch (error) {
      alert('Ошибка удаления');
    }
  };

  // Loading state
  if (status === 'loading' || hasAdminRole === null || sessionLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="w-10 h-10 animate-spin text-[#18A36C] mx-auto mb-4" />
          <p className="text-gray-500">Проверка доступа...</p>
        </div>
      </div>
    );
  }

  // Not admin - show 404
  if (status === 'unauthenticated' || !hasAdminRole) {
    return <NotFound />;
  }

  // Admin login form (only if session not verified)
  if (!sessionVerified) {
    return <AdminAuthForm onSuccess={handleAuthSuccess} />;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminMenu />

      <div className="flex-1 p-4 lg:p-8 overflow-auto">
        <div className="max-w-7xl mx-auto">
          <AdminSection
            title="Партнёры"
            icon={Handshake}
            count={partners.length}
            loading={loading}
            searchValue={searchQuery}
            onSearchChange={setSearchQuery}
            onAdd={handleAdd}
            addButtonText="Добавить партнёра"
          >
            {filteredPartners.length === 0 ? (
              <EmptyState
                icon={Handshake}
                title="Партнёры не найдены"
                description={searchQuery ? 'Попробуйте изменить поисковый запрос' : 'Добавьте первого партнёра'}
                actionText={!searchQuery ? 'Добавить партнёра' : undefined}
                onAction={!searchQuery ? handleAdd : undefined}
              />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                <AnimatePresence>
                  {filteredPartners.map((partner) => (
                    <ItemCard key={partner.id}>
                      <div className="flex gap-4">
                        {/* Logo */}
                        <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100 flex items-center justify-center p-2">
                          <img
                            src={partner.image_url}
                            alt={partner.name}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-800 truncate">{partner.name}</h3>
                          <p className="text-sm text-gray-500 line-clamp-2">{partner.description}</p>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex items-center gap-2 mt-3">
                        <Badge variant="primary">{partner.category.name}</Badge>
                        <Badge variant="secondary">
                          <Hash className="w-3 h-3 mr-1" />
                          {partner.number}
                        </Badge>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                        <a
                          href={partner.website_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-[#18A36C] hover:underline flex items-center gap-1"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Globe className="w-3 h-3" />
                          Сайт
                        </a>
                        <CardActions
                          onEdit={() => handleEdit(partner)}
                          onDelete={() => handleDelete(partner.id)}
                        />
                      </div>
                    </ItemCard>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </AdminSection>

          {/* Form Modal */}
          <FormModal
            isOpen={isModalOpen}
            onClose={resetForm}
            title={editingPartner ? 'Редактирование партнёра' : 'Новый партнёр'}
            onSubmit={handleSave}
            loading={formLoading}
            disabled={!formData.name || !formData.description || !formData.category_id}
          >
            <div className="space-y-6">
              <FormField label="Название" required>
                <FormInput
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Название компании"
                />
              </FormField>

              <FormField label="Описание" required>
                <FormTextarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  placeholder="Описание партнёра"
                />
              </FormField>

              <FormField label="Категория" required>
                <FormSelect
                  value={formData.category_id}
                  onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
                >
                  <option value="">Выберите категорию</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </FormSelect>
              </FormField>

              <FormField label="URL логотипа" required>
                <FormInput
                  type="text"
                  value={formData.image_url}
                  onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                  placeholder="/images/partners/logo.png"
                />
              </FormField>

              <FormField label="Ссылка на сайт" required>
                <FormInput
                  type="text"
                  value={formData.website_url}
                  onChange={(e) => setFormData({ ...formData, website_url: e.target.value })}
                  placeholder="https://example.com"
                />
              </FormField>

              <FormField label="Порядковый номер">
                <FormInput
                  type="number"
                  value={formData.number}
                  onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                  placeholder="1"
                />
              </FormField>
            </div>
          </FormModal>
        </div>
      </div>
    </div>
  );
}
