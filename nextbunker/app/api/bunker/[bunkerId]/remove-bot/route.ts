import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(req: Request, { params }: { params: { bunkerId: string } }) {
  try {
    const { bunkerId } = params;
    const { botId } = await req.json(); // Получаем ID бота из тела запроса

    if (!botId) {
      return NextResponse.json({ error: "Не указан botId" }, { status: 400 });
    }

    // Проверяем, существует ли бот в этом бункере
    const bot = await db.profile.findUnique({ where: { id: botId, isBot: true } });

    if (!bot) {
      return NextResponse.json({ error: "Бот не найден" }, { status: 404 });
    }

    // Удаляем бота из членов бункера
    await db.member.deleteMany({ where: { profileId: botId, bunkerId } });

    // Удаляем профиль бота
    await db.profile.delete({ where: { id: botId } });

    return NextResponse.json({ message: "Бот удален" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}
  








