'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSession } from 'next-auth/react';
import { AnimatePresence } from 'framer-motion';
import { MessageSquare, Loader2, Star, Calendar, CheckCircle } from 'lucide-react';
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

interface Feedback {
  id: number;
  name: string;
  text: string;
  date: string;
  grade: number;
  image_url: string;
  verified: boolean;
  service_id: number | null;
  service: {
    id: number;
    title: string;
  } | null;
}

interface Service {
  id: number;
  title: string;
}

export default function AdminFeedbacksPage() {
  const { status } = useSession();
  const { sessionVerified, isLoading: sessionLoading, verifySession } = useAdminSession();
  const [hasAdminRole, setHasAdminRole] = useState<boolean | null>(null);

  // Data states
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Form states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFeedback, setEditingFeedback] = useState<Feedback | null>(null);
  const [formLoading, setFormLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    text: '',
    date: '',
    grade: '5',
    image_url: '',
    verified: false,
    service_id: '',
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
      const [feedbacksRes, servicesRes] = await Promise.all([
        fetch('/api/admin/feedbacks'),
        fetch('/api/services'),
      ]);

      if (feedbacksRes.ok) {
        const data = await feedbacksRes.json();
        setFeedbacks(data);
      }

      if (servicesRes.ok) {
        const data = await servicesRes.json();
        setServices(data);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Filtered feedbacks
  const filteredFeedbacks = useMemo(() => {
    if (!searchQuery) return feedbacks;
    const query = searchQuery.toLowerCase();
    return feedbacks.filter(
      (f) =>
        f.name.toLowerCase().includes(query) ||
        f.text.toLowerCase().includes(query) ||
        f.service?.title.toLowerCase().includes(query)
    );
  }, [feedbacks, searchQuery]);

  // Form handlers
  const resetForm = () => {
    setFormData({
      name: '',
      text: '',
      date: '',
      grade: '5',
      image_url: '',
      verified: false,
      service_id: '',
    });
    setEditingFeedback(null);
    setIsModalOpen(false);
  };

  const handleAdd = () => {
    resetForm();
    setFormData(prev => ({
      ...prev,
      date: new Date().toISOString().split('T')[0],
    }));
    setIsModalOpen(true);
  };

  const handleEdit = (feedback: Feedback) => {
    setEditingFeedback(feedback);
    setFormData({
      name: feedback.name,
      text: feedback.text,
      date: new Date(feedback.date).toISOString().split('T')[0],
      grade: feedback.grade.toString(),
      image_url: feedback.image_url,
      verified: feedback.verified,
      service_id: feedback.service_id?.toString() || '',
    });
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    setFormLoading(true);
    try {
      const url = editingFeedback
        ? `/api/admin/feedbacks/${editingFeedback.id}`
        : '/api/admin/feedbacks';

      const method = editingFeedback ? 'PUT' : 'POST';

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
    if (!confirm('Вы уверены, что хотите удалить отзыв?')) return;

    try {
      const res = await fetch(`/api/admin/feedbacks/${id}`, {
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

  // Render stars
  const renderStars = (grade: number) => {
    return (
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${star <= grade ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
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
            title="Отзывы"
            icon={MessageSquare}
            count={feedbacks.length}
            loading={loading}
            searchValue={searchQuery}
            onSearchChange={setSearchQuery}
            onAdd={handleAdd}
            addButtonText="Добавить отзыв"
          >
            {filteredFeedbacks.length === 0 ? (
              <EmptyState
                icon={MessageSquare}
                title="Отзывы не найдены"
                description={searchQuery ? 'Попробуйте изменить поисковый запрос' : 'Добавьте первый отзыв'}
                actionText={!searchQuery ? 'Добавить отзыв' : undefined}
                onAction={!searchQuery ? handleAdd : undefined}
              />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <AnimatePresence>
                  {filteredFeedbacks.map((feedback) => (
                    <ItemCard key={feedback.id}>
                      <div className="flex gap-4">
                        {/* Avatar */}
                        <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                          <img
                            src={feedback.image_url}
                            alt={feedback.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-gray-800">{feedback.name}</h3>
                            {feedback.verified && (
                              <CheckCircle className="w-4 h-4 text-[#18A36C]" />
                            )}
                          </div>

                          <div className="flex items-center gap-3 mb-2">
                            {renderStars(feedback.grade)}
                            <span className="text-xs text-gray-400 flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {new Date(feedback.date).toLocaleDateString('ru-RU')}
                            </span>
                          </div>

                          <p className="text-sm text-gray-500 line-clamp-2">{feedback.text}</p>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex items-center gap-2 mt-3">
                        {feedback.service && (
                          <Badge variant="secondary">{feedback.service.title}</Badge>
                        )}
                        {!feedback.service && (
                          <Badge variant="primary">Общий отзыв</Badge>
                        )}
                        {feedback.verified && (
                          <Badge variant="success">Верифицирован</Badge>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-end mt-4 pt-4 border-t border-gray-100">
                        <CardActions
                          onEdit={() => handleEdit(feedback)}
                          onDelete={() => handleDelete(feedback.id)}
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
            title={editingFeedback ? 'Редактирование отзыва' : 'Новый отзыв'}
            onSubmit={handleSave}
            loading={formLoading}
            disabled={!formData.name || !formData.text || !formData.image_url}
          >
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <FormField label="Имя автора" required>
                  <FormInput
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов"
                  />
                </FormField>

                <FormField label="Дата" required>
                  <FormInput
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </FormField>
              </div>

              <FormField label="Текст отзыва" required>
                <FormTextarea
                  value={formData.text}
                  onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                  rows={4}
                  placeholder="Текст отзыва"
                />
              </FormField>

              <div className="grid grid-cols-2 gap-4">
                <FormField label="Оценка (1-5)" required>
                  <FormSelect
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                  >
                    <option value="5">5 - Отлично</option>
                    <option value="4">4 - Хорошо</option>
                    <option value="3">3 - Нормально</option>
                    <option value="2">2 - Плохо</option>
                    <option value="1">1 - Ужасно</option>
                  </FormSelect>
                </FormField>

                <FormField label="Привязка к услуге">
                  <FormSelect
                    value={formData.service_id}
                    onChange={(e) => setFormData({ ...formData, service_id: e.target.value })}
                  >
                    <option value="">Общий отзыв клиники</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.title}
                      </option>
                    ))}
                  </FormSelect>
                </FormField>
              </div>

              <FormField label="URL фото автора" required>
                <FormInput
                  type="text"
                  value={formData.image_url}
                  onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                  placeholder="/images/reviews/avatar.jpg"
                />
              </FormField>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, verified: !formData.verified })}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    formData.verified ? 'bg-[#18A36C]' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      formData.verified ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className="text-sm text-gray-700">
                  {formData.verified ? 'Отзыв верифицирован' : 'Отзыв не верифицирован'}
                </span>
              </div>
            </div>
          </FormModal>
        </div>
      </div>
    </div>
  );
}
