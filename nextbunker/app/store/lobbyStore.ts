import create from "zustand"
import {persist} from "zustand/middleware"
interface Player{
    id:string 
    name:string
    isBot:boolean
}
interface LobbyState{
    players:Player[]
    status:string
    lobbyId:string | null
    addBot:()=> void 
    removeBot:(id:string) => void
    startGame:() => void
    setLobbyData:(lobbyId:string , players:Player[] ,status:string )=> void
    
}

export const useLobbyStore = create<LobbyState>()(persist())













































































































































































































































































































































































