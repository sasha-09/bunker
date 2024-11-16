import { date } from "zod";
import create from "zustand";
import { persist } from "zustand/middleware";

interface Player {
  id: string;
  name: string;
  isBot: boolean;
}

interface LobbyState {
  players: Player[];
  status: string;
  lobbyId: string | null;
  addBot: () => void;
  removeBot: (id: string) => void;
  startGame: () => void;
  setLobbyData: (lobbyId: string, players: Player[], status: string) => void;
}

export const useLobbyStore = create<LobbyState>()(
  persist(
    (set) => ({
      players: [],
      status: "OPEN",
      lobbyId: null,
      // Добавление бота
      addBot: () => {
        set((state) => ({
          players: [
            ...state.players,
            {
              id: Date.now().toString(),
              name: `bot ${state.players.length + 1}`,
              isBot: true,
            },
          ],
        }));
      },
      // Удаление бота
      removeBot: (id) => {
        set((state) => ({
          players: state.players.filter(
            (player) => player.id !== id || !player.isBot
          ),
        }));
      },
      startGame:()=>{
        const gameId=Date.now().toString()
        set({status:"IN_PROCESS"})
        return gameId
      },
      // Установка данных лобби
      setLobbyData: (lobbyId, players, status) => {
        set({ lobbyId, players, status });
      },
    }),
    { name: "lobby-storage" }
  )
);
