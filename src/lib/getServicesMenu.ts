import { prisma } from './prisma';

interface ServiceCategory {
  id: number;
  name: string;
  slug: string;
  icon: string | null;
  parent_id: number | null;
  order: number;
  children?: ServiceCategory[];
}

interface MenuItem {
  id: string;
  title: string;
  icon?: string;
  description?: string;
  children?: MenuItem[];
}

// Функция для рекурсивного построения дерева меню
function buildMenuTree(categories: ServiceCategory[]): MenuItem[] {
  return categories.map((category) => {
    const menuItem: MenuItem = {
      id: category.slug,
      title: category.name,
    };

    // Добавляем иконку только для корневых элементов
    if (!category.parent_id && category.icon) {
      menuItem.icon = category.icon;
    }

    // Добавляем только подкатегории в меню
    if (category.children && category.children.length > 0) {
      menuItem.children = buildMenuTree(category.children);
    }

    return menuItem;
  });
}

// Получение меню услуг из БД (для использования на сервере)
export async function getServicesMenuFromDB(): Promise<MenuItem[]> {
  try {
    // @ts-ignore - ServiceCategory будет доступна после npx prisma generate
    const categories = await prisma.serviceCategory.findMany({
      where: {
        is_active: true,
        parent_id: null, // Только корневые категории
      },
      orderBy: [
        { order: 'asc' },
        { name: 'asc' },
      ],
      include: {
        children: {
          where: { is_active: true },
          orderBy: [
            { order: 'asc' },
            { name: 'asc' },
          ],
          include: {
            children: {
              where: { is_active: true },
              orderBy: [
                { order: 'asc' },
                { name: 'asc' },
              ],
            },
          },
        },
      },
    });

    return buildMenuTree(categories as ServiceCategory[]);
  } catch (error) {
    console.error('Error fetching services menu from DB:', error);
    return [];
  }
}
