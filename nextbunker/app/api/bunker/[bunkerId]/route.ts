import { db } from "@/lib/db"
import { NextResponse } from "next/server"
// nfie3j5kb67kmd2m7fnh7mar01bkfnjsmjm8
export async function GET (req:Request,{params}:{params:{lobbyId:string}}) {
    const {lobbyId}= params
    try {
    const bunkers= await db.bunker.findUnique({
        where:{
            id:lobbyId
        },
        include:{
            profile:true
        }
    })
    return NextResponse.json(bunkers)
    } catch (error) {
    console.log (error)   
    return NextResponse.json({error:"бункер не найден"},{status:500})
    }
  }