import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getToken } from "next-auth/jwt";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(request: NextRequest) {
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

    const formData = await request.formData();
    const file = formData.get("avatar") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "Файл не предоставлен" },
        { status: 400 }
      );
    }

    // Проверяем тип файла
    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Недопустимый формат файла. Разрешены: JPEG, PNG, GIF, WebP" },
        { status: 400 }
      );
    }

    // Проверяем размер файла (максимум 5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: "Размер файла не должен превышать 5MB" },
        { status: 400 }
      );
    }

    // Создаем директорию для аватаров если её нет
    const uploadDir = path.join(process.cwd(), "public", "uploads", "avatars");
    await mkdir(uploadDir, { recursive: true });

    // Генерируем уникальное имя файла
    const ext = file.name.split(".").pop() || "jpg";
    const fileName = `avatar_${userId}_${Date.now()}.${ext}`;
    const filePath = path.join(uploadDir, fileName);

    // Сохраняем файл
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(filePath, buffer);

    // Формируем URL для аватарки
    const avatarUrl = `/uploads/avatars/${fileName}`;

    // Обновляем пользователя в базе данных
    await prisma.patient.update({
      where: { id: userId },
      data: { avatar_url: avatarUrl },
    });

    return NextResponse.json(
      {
        message: "Аватар успешно загружен",
        avatar_url: avatarUrl
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Avatar upload error:", error);
    return NextResponse.json(
      { error: "Ошибка при загрузке аватара" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
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

    // Удаляем аватар из базы данных
    await prisma.patient.update({
      where: { id: userId },
      data: { avatar_url: null },
    });

    return NextResponse.json(
      { message: "Аватар успешно удален" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Avatar delete error:", error);
    return NextResponse.json(
      { error: "Ошибка при удалении аватара" },
      { status: 500 }
    );
  }
}
