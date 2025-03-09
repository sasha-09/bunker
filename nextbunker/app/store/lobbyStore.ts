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

      addBot: async () => {
        set(async (state) => {
          try {
            const response = await fetch(`/api/bunker/${state.lobbyId}/add-bot`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
            });
      
            if (!response.ok) {
              throw new Error("Ошибка при добавлении бота");
            }
      
            const { botId } = await response.json();
      
            return {
              players: [
                ...state.players,
                {
                  id: botId,
                  name: `Bot ${state.players.length + 1}`,
                  isBot: true,
                },
              ],
            };
          } catch (error) {
            console.error(error);
            return state; // Если ошибка, не меняем состояние
          }
        });
      },

      // addBot: () => {
      //   set((state) => {
      //     if (!Array.isArray(state.players)) {
      //       console.error("Ошибка: players должен быть массивом");
      //       return { players: [] }; // Исправляем состояние
      //     }

      //     return {
      //       players: [
      //         ...state.players,
      //         {
      //           id: Date.now().toString(),
      //           name: `bot ${state.players.length + 1}`,
      //           isBot: true,
      //         },
      //       ],
      //     };
      //   });
      // },
      // Удаление бота
      // Удаление бота
      removeBot: async (id) => {
        set(async (state) => {
          try {
            const response = await fetch(`/api/bunker/${state.lobbyId}/remove-bot`, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ botId: id }),
            });
      
            if (!response.ok) {
              throw new Error("Ошибка при удалении бота");
            }
      
            return {
              players: state.players.filter((player) => player.id !== id || !player.isBot),
            };
          } catch (error) {
            console.error(error);
            return state; // Если ошибка, не меняем состояние
          }
        });
      },
      startGame: () => {
        const gameId = Date.now().toString(); // Пример генерации gameId
        set({ status: "IN_PROCESS" });
        return gameId; // Возвращаем gameId для редиректа
      },

      // Установка данных лобби
      setLobbyData: (lobbyId, players, status) => {
        set({
          lobbyId,
          players: Array.isArray(players) ? players : [], // Защита от некорректных данных
          status,
        });
      },
    }),
    { name: "lobby-storage" }
  )
);
