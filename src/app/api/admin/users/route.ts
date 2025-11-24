import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getToken } from "next-auth/jwt";
import bcrypt from "bcryptjs";

// GET - Получить всех пользователей (только для главного врача)
export async function GET(request: NextRequest) {
  try {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET
    });

    if (!token || !token.id) {
      return NextResponse.json(
        { error: "Не авторизован" },
        { status: 401 }
      );
    }

    const userId = parseInt(token.id as string);

    // Проверяем роль - только главный врач
    const currentUser = await prisma.patient.findUnique({
      where: { id: userId },
      select: { role: true },
    });

    if (!currentUser || currentUser.role !== "CHIEF_DOCTOR") {
      return NextResponse.json(
        { error: "Нет доступа" },
        { status: 403 }
      );
    }

    // Получаем всех пользователей кроме CHIEF_DOCTOR
    const users = await prisma.patient.findMany({
      where: {
        role: {
          not: "CHIEF_DOCTOR"
        }
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        login: true,
        role: true,
        avatar_url: true,
        registration_date: true,
        is_messages_blocked: true,
      },
      orderBy: { registration_date: 'desc' },
    });

    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Ошибка при получении пользователей" },
      { status: 500 }
    );
  }
}

// PUT - Изменить роль пользователя (только для главного врача)
export async function PUT(request: NextRequest) {
  try {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET
    });

    if (!token || !token.id) {
      return NextResponse.json(
        { error: "Не авторизован" },
        { status: 401 }
      );
    }

    const chiefDoctorId = parseInt(token.id as string);

    // Проверяем роль - только главный врач
    const chiefDoctor = await prisma.patient.findUnique({
      where: { id: chiefDoctorId },
      select: { role: true, password: true },
    });

    if (!chiefDoctor || chiefDoctor.role !== "CHIEF_DOCTOR") {
      return NextResponse.json(
        { error: "Нет доступа" },
        { status: 403 }
      );
    }

    const { userId, newRole, adminPassword } = await request.json();

    // Валидация данных
    if (!userId || !newRole) {
      return NextResponse.json(
        { error: "Не указан пользователь или роль" },
        { status: 400 }
      );
    }

    // Проверяем что роль допустимая
    if (!["USER", "ADMIN"].includes(newRole)) {
      return NextResponse.json(
        { error: "Недопустимая роль" },
        { status: 400 }
      );
    }

    // Если назначаем ADMIN - требуем подтверждение пароля
    if (newRole === "ADMIN") {
      if (!adminPassword) {
        return NextResponse.json(
          { error: "Для назначения администратора требуется подтверждение пароля" },
          { status: 400 }
        );
      }

      // Проверяем пароль главного врача
      const isPasswordValid = await bcrypt.compare(adminPassword, chiefDoctor.password);
      if (!isPasswordValid) {
        return NextResponse.json(
          { error: "Неверный пароль" },
          { status: 401 }
        );
      }
    }

    // Получаем целевого пользователя
    const targetUser = await prisma.patient.findUnique({
      where: { id: parseInt(userId) },
      select: { role: true },
    });

    if (!targetUser) {
      return NextResponse.json(
        { error: "Пользователь не найден" },
        { status: 404 }
      );
    }

    // Нельзя менять роль главному врачу
    if (targetUser.role === "CHIEF_DOCTOR") {
      return NextResponse.json(
        { error: "Нельзя изменить роль главного врача" },
        { status: 403 }
      );
    }

    // Обновляем роль
    const updatedUser = await prisma.patient.update({
      where: { id: parseInt(userId) },
      data: { role: newRole },
      select: {
        id: true,
        name: true,
        role: true,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("Error updating user role:", error);
    return NextResponse.json(
      { error: "Ошибка при изменении роли" },
      { status: 500 }
    );
  }
}
