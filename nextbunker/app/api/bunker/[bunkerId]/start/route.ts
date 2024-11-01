import { db } from "@/lib/db";
import { BunkerStatus, GamePhase } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(
    req: Request,
    { params }: { params: { lobbyId: string } }
  ) {
    const { lobbyId } = params;
    try {
      const updateBunker = await db.bunker.update({
        where: {
          id: lobbyId,
        },
        data: {
          status: BunkerStatus.IN_PROCESS,
        },
      });
      const newGame = await db.game.create({
        data: {
          bunkerId: lobbyId,
          phase: GamePhase.CHARACTER_SELECTION,
        },
      });
      return NextResponse.json(newGame);
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        { error: "бункер не открылся (игра не началась)" },
        { status: 500 }
      );
    }
  }
  