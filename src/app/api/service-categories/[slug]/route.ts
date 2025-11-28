import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - получить категорию по slug с услугами и подкатегориями
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    console.log('API: Fetching category with slug:', slug);

    // @ts-ignore - ServiceCategory будет доступна после npx prisma generate
    const category = await prisma.serviceCategory.findUnique({
      where: {
        slug: slug,
        is_active: true
      },
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
        services: {
          orderBy: { title: 'asc' },
          include: {
            specialists: {
              include: {
                specialist: true,
              },
            },
            questions: {
              orderBy: { id: 'asc' },
            },
            feedbacks: {
              orderBy: { date: 'desc' },
            },
          },
        },
      },
    });

    console.log('API: Category found:', category ? 'Yes' : 'No');

    if (!category) {
      return NextResponse.json(
        { error: 'Category not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(category);
  } catch (error: any) {
    console.error('API Error fetching service category:', error);
    console.error('Error details:', error.message);
    console.error('Error stack:', error.stack);
    return NextResponse.json(
      {
        error: 'Failed to fetch service category',
        details: error.message
      },
      { status: 500 }
    );
  }
}
