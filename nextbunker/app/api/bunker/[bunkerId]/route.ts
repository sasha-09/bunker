import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { MemberRole } from "@prisma/client";

import { v4 as uuidv4 } from "uuid";

export async function POST(req: Request) {
  try {
    const { name } = await req.json();

    const profile = await currentUser();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const bunker = await db.bunker.create({
      data: {
        profileId: profile.id,
        name: name,
        inviteCode: uuidv4(),
        members: {
          create: [
            {
              profileId: profile.id,
              role: MemberRole.ADMIN,
            },
          ],
        },
      },
    });
    return NextResponse.json(bunker);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
