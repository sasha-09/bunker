import { db } from "@/lib/db";
import { BunkerStatus, GamePhase } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { bunkerId: string } }
) {
  const { bunkerId } = params;

  const body = await req.json();
  const { players } = body;

  try {
    const updateBunker = await db.bunker.update({
      where: {
        id: bunkerId,
      },
      data: {
        status: BunkerStatus.IN_PROCESS,
      },
    });
    
    const newGame = await db.game.create({
      data: {
        bunkerId: bunkerId,
        phase: GamePhase.CHARACTER_SELECTION,
      },
    });

  // Создание записей для игроков
  const playerData = players.map((player) => ({
    gameId: newGame.id,
    userId: player.id,
    action: "JOIN",
  }));

  await db.action.createMany({
    data: playerData,
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

//  _____________________
//        *             |
//       <=>            |
//      <<=>>           |
//     <<<=>>>          |
//    <<<===>>>         |
// _____________________|

// DA HET HABEPHOE /|? 
//  /\
// /|\
//  |
//  |
//  |