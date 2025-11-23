import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getToken } from "next-auth/jwt";

export async function PUT(request: NextRequest) {
  try {
    // Получаем токен из cookies
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
    const body = await request.json();
    const { name, email, phone, login } = body;

    // Валидация
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Имя должно содержать минимум 2 символа" },
        { status: 400 }
      );
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Некорректный email адрес" },
        { status: 400 }
      );
    }

    if (!phone || phone.trim().length < 10) {
      return NextResponse.json(
        { error: "Некорректный номер телефона" },
        { status: 400 }
      );
    }

    if (!login || login.trim().length < 3) {
      return NextResponse.json(
        { error: "Логин должен содержать минимум 3 символа" },
        { status: 400 }
      );
    }

    // Проверяем уникальность email (кроме текущего пользователя)
    const existingEmailUser = await prisma.patient.findFirst({
      where: {
        email: email,
        NOT: { id: userId }
      }
    });

    if (existingEmailUser) {
      return NextResponse.json(
        { error: "Этот email уже используется" },
        { status: 400 }
      );
    }

    // Проверяем уникальность телефона (кроме текущего пользователя)
    const existingPhoneUser = await prisma.patient.findFirst({
      where: {
        phone: phone,
        NOT: { id: userId }
      }
    });

    if (existingPhoneUser) {
      return NextResponse.json(
        { error: "Этот номер телефона уже используется" },
        { status: 400 }
      );
    }

    // Обновляем профиль
    const updatedUser = await prisma.patient.update({
      where: { id: userId },
      data: {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        login: login.trim(),
      },
      select: {
        id: true,
        login: true,
        email: true,
        name: true,
        phone: true,
        registration_date: true,
        avatar_url: true,
      },
    });

    return NextResponse.json(
      {
        message: "Профиль успешно обновлен",
        user: updatedUser
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Profile update error:", error);
    return NextResponse.json(
      { error: "Ошибка при обновлении профиля" },
      { status: 500 }
    );
  }
}
