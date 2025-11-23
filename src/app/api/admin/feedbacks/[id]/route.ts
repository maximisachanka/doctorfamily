import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getToken } from "next-auth/jwt";

async function checkAdmin(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET
  });

  if (!token || !token.id) {
    return { isAdmin: false, error: "Не авторизован" };
  }

  const userId = parseInt(token.id as string);
  const user = await prisma.patient.findUnique({
    where: { id: userId },
    select: { role: true },
  });

  if (!user || user.role !== "ADMIN") {
    return { isAdmin: false, error: "Нет прав доступа" };
  }

  return { isAdmin: true };
}

// PUT - Обновить отзыв
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const adminCheck = await checkAdmin(request);
    if (!adminCheck.isAdmin) {
      return NextResponse.json({ error: adminCheck.error }, { status: 403 });
    }

    const { id } = await params;
    const feedbackId = parseInt(id);
    const data = await request.json();

    const feedback = await prisma.feedback.update({
      where: { id: feedbackId },
      data: {
        name: data.name,
        text: data.text,
        date: new Date(data.date),
        grade: parseInt(data.grade),
        image_url: data.image_url,
        verified: data.verified ?? false,
        service_id: data.service_id ? parseInt(data.service_id) : null,
      },
      include: {
        service: {
          select: { id: true, title: true },
        },
      },
    });

    return NextResponse.json(feedback);
  } catch (error) {
    console.error("Update feedback error:", error);
    return NextResponse.json(
      { error: "Ошибка при обновлении отзыва" },
      { status: 500 }
    );
  }
}

// DELETE - Удалить отзыв
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const adminCheck = await checkAdmin(request);
    if (!adminCheck.isAdmin) {
      return NextResponse.json({ error: adminCheck.error }, { status: 403 });
    }

    const { id } = await params;
    const feedbackId = parseInt(id);

    await prisma.feedback.delete({
      where: { id: feedbackId },
    });

    return NextResponse.json({ success: true, message: "Отзыв удален" });
  } catch (error) {
    console.error("Delete feedback error:", error);
    return NextResponse.json(
      { error: "Ошибка при удалении отзыва" },
      { status: 500 }
    );
  }
}
