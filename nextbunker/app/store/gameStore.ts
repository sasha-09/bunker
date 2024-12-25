import { Bot } from "lucide-react";
import { boolean, string } from "zod";
import { create } from "zustand";

interface Player {
  id: string;
  name: string;
  isBot: boolean;
  character: Character | null;
}

interface Character {
  id: string;
  name: string;
  biology: string;
  profession: string;
  health: string;
  item: string;
}
interface GameState {
  gameId: string | null;
  phase: " WAITING" | "CHARACTER_SELECTION" | "DISCUSSION" | "VOTING" | "FINAL";
  players: Player[];
  actions: { [playerId: string]: string };
  setGameData: (game: string, players: Player[]) => void;
  assignCharacters: () => void;
  nextPhase: () => void;
  addAction: (playerId: string, action: string) => void;
}
export const useGameStore = create<GameState>()((set) => ({
  gameId: null,
  phase: " WAITING",
  players: [],
  actions: {},
  setGameData: (gameId, players) => {
    set({ gameId, players, phase: "CHARACTER_SELECTION" });
  },
  assignCharacters: () => {
    set((state) => {
      const characters = state.players.map((player) => ({
        id: player.id,
        name: "тип fjdd17fjs3fhwv30heva452fj2hr44aogve90kwbw2",
        biology: "ламинат_42_года",
        profession: "пол",
        health: "треснутый",
        item: "иголка",
      }));
      const updatetPlayers = state.players.map((player, index) => ({
        ...player,
        character: characters[index],
      }));
      return {
        players: updatetPlayers,
      };
    });
  },
  nextPhase: () => {
    set((state) => {
      const phase: readonly GameState["phase"][] = [
        " WAITING",
        "CHARACTER_SELECTION",
        "DISCUSSION",
        "VOTING",
        "FINAL",
      ];
      const currentIndex = phase.indexOf(state.phase);
      const nextPhase = phase[currentIndex + 1] || "FINAL";
      return {
        phase: nextPhase,
      };
    });
  },
  addAction: (playerId, action) => {
    set((state) => ({
      actions: {
        ...state.actions,
        [playerId]: action,
      },
    }));
  },
}));
// "ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы"
// fjdd17fjs3fhwv30heva452fj2hr44aogve90kwbw2       1733045244902