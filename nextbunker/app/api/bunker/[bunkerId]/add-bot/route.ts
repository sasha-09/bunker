import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { MemberRole } from "@prisma/client"; // Импорт ролей

export async function POST(req: Request, { params }: { params: { bunkerId: string } }) {
  const { bunkerId } = params;
  try {
    const bunker = await db.bunker.findUnique({ where: { id: bunkerId } });

    if (!bunker) {
      return NextResponse.json({ error: "Бункер не найден" }, { status: 404 });
    }

    // Создаем бота в Profile
    const botProfile = await db.profile.create({
      data: {
        name: `Bot ${Date.now()}`,
        userId: `bot_${Date.now()}`,
        imageUrl: "",
        email: `bot${Date.now()}@bunker.local`,
        isBot: true,
      },
    });

    // Добавляем его в члены бункера (Member)
    await db.member.create({
      data: {
        profileId: botProfile.id,
        bunkerId: bunkerId,
        role: MemberRole.BOT,
      },
    });

    return NextResponse.json({ message: "Бот добавлен", botId: botProfile.id });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}
