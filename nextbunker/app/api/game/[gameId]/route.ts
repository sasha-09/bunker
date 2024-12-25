import { db } from "@/lib/db";
import { error } from "console";
import next from "next";
import { isBot } from "next/dist/server/web/spec-extension/user-agent";
import { NextResponse } from "next/server";
import { json } from "stream/consumers";

export async function GET(
  req: Request,
  { params }: { params: { gameId: string } }
) {
  const { gameId } = params;
  const game = await db.game.findUnique({
    where: {
      id: gameId,
    },
    include: {
      bunker: { include: { members: { include: { profile: true } } } },
    },
  });
  if (!game) {
    return NextResponse.json({ error: "игра не найдена" }, { status: 404 });
  }
  const players = game.bunker.members.map((player) => ({
    id: player.profile.id,
    name: player.profile.name,
    isBot: player.profile.isBot,
  }));
  return NextResponse.json({ gameId: game.id, players });
}
