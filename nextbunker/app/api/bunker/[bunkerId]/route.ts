import { db } from "@/lib/db";
import { BunkerStatus, GamePhase } from "@prisma/client";
import { Key } from "lucide-react";
import { NextResponse } from "next/server";
// nfie3j5kb67kmd2m7fnh7mar01bkfnjsmjm8
export async function GET(
  req: Request,
  { params }: { params: { bunkerId: string } }
) {
  const {bunkerId } = params;
  try {
    const bunker = await db.bunker.findUnique({
      where: {
        id: bunkerId
      },
      include: {

        profile: true,
        members:{include:{profile:true}}
      },
    });

    if (!bunker) {
      return NextResponse.json({ error: "Бункер не найден" }, { status: 404 });
    }
    
    return NextResponse.json({
      id: bunker.id,
      players: bunker.members.map((member) => ({
        id: member.profile.id,
        name: member.profile.name,
        isBot: member.profile.isBot,
      })),
      status: bunker.status,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "бункер не найден" }, { status: 500 });
  }
}

