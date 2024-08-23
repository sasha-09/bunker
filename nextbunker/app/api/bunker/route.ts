import { db } from "@/lib/db";


import { NextResponse } from "next/server";

import { MemberRole } from "@prisma/client";

import { v4 as uuidv4 } from "uuid";
import { currentProfile } from "@/lib/current-profile";

export async function POST(req: Request) {
  try {
    const { name } = await req.json();


  
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }


    const bunker = await db.bunker.create({
        data: {
                profileId: profile.id,
                name: name,
                inviteCode: uuidv4(),
                members: {
                    create: [{ profileId: profile.id,role: MemberRole.ADMIN }]
                }
            }
        });

    return NextResponse.json(bunker);
  } catch (error) {
    console.log("[BUNKERS_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
export async function GET () {
  try {
  const bunkers= await db.bunker.findMany()
  return NextResponse.json(bunkers)
  } catch (error) {
  console.log (error)   
  return NextResponse.json({error:"бункер не найден"},{status:500})
  }
}