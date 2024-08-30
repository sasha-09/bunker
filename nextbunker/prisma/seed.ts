import { PrismaClient } from "@prisma/client"
import { errorMonitor } from "events"
const prisma = new PrismaClient ()
async function main() {
    const characters = [
        {userId:"<2/1>3", name:"1 бот в бункере",biology:"искуственный интелект",profession:"бот в игре бункер", health:"нормальное",item:"пусто" },
        {userId:"<2/1>3", name:"2 бот в бункере",biology:"искуственный интелект",profession:"бот в игре бункер", health:"нормальное",item:"пусто" },
        {userId:"<2/1>3", name:"3 бот в бункере",biology:"искуственный интелект",profession:"бот в игре бункер", health:"нормальное",item:"пусто" },
        {userId:"<2/1>3", name:"4 бот в бункере",biology:"искуственный интелект",profession:"бот в игре бункер", health:"нормальное",item:"пусто" },
        {userId:"<2/1>3", name:"5 бот в бункере",biology:"искуственный интелект",profession:"бот в игре бункер", health:"нормальное",item:"пусто" },
        {userId:"<2/1>3", name:"6 бот в бункере",biology:"искуственный интелект",profession:"бот в игре бункер", health:"нормальное",item:"пусто" },
        {userId:"<2/1>3", name:"7 бот в бункере",biology:"искуственный интелект",profession:"бот в игре бункер", health:"нормальное",item:"пусто" },
        {userId:"<2/1>3", name:"8 бот в бункере",biology:"искуственный интелект",profession:"бот в игре бункер", health:"нормальное",item:"пусто" },
        
    ]
    await prisma.character.createMany({data:characters}) 


}main().catch((e)=>console.log(e)).finally(async()=>{
    await prisma.$disconnect()
})