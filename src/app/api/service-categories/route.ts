import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - публичный endpoint для получения дерева категорий
export async function GET() {
  try {
    // Получаем только активные категории
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

    return NextResponse.json(categories);
  } catch (error) {
    console.error('Error fetching service categories:', error);
    return NextResponse.json(
      { error: 'Failed to fetch service categories' },
      { status: 500 }
    );
  }
}
