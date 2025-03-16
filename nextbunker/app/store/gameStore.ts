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
  phase: "WAITING" | "CHARACTER_SELECTION" |"CHARACTER_DISCLOSURE"| "DISCUSSION" | "VOTING" | "FINAL";
  players: Player[];
  actions: { [playerId: string]: string };
  setGameData: (gameId: string, players: Player[]) => void;
  assignCharacters: () => void;
  nextPhase: () => void;
  addAction: (playerId: string, action: string) => void;
}
export const useGameStore = create<GameState>()((set) => ({
  gameId: null,
  phase: "WAITING",
  players: [],
  actions: {},
  setGameData: (gameId, players) => {
    set({ gameId, players, phase: "CHARACTER_SELECTION" });

  },
  assignCharacters: () => {
    set((state) => {
      if (state.players.every((player) => player.character !== null)) {
        return state;
      }

      const randomFromArray = (array: string[]) => array[Math.floor(Math.random() * array.length)];
      
      const name = ["fjdd17fjs3fhwv30heva452fj2hr44aogve90kwbw2","g3g3f1238j5g2-1634bj4gf22-56n7kfs22335hjk-8y65","dc6ee94f-187a-44f5-a7c0-ba4ac1480d5d"]
      const biology = ["ламинат_42_года","линолиум_1_год","паркет_35"]
      const profession = ["пол","потолок","лестница"]
      const health = ["треснутуй","новый","проверенный"]
      const item = ["иголка","нож","скатерть"]
      

      
      

      const updatedPlayers = state.players.map((player) => ({
        ...player,
        character: player.character ?? {
          id: player.id,
          name: randomFromArray(name),
          biology: randomFromArray(biology),
          profession: randomFromArray(profession),
          health: randomFromArray(health),
          item: randomFromArray(item),
        },
      }));
      
      return { players: updatedPlayers };
    });
  },
  nextPhase: () => {
    set((state) => {
      const phases: readonly GameState["phase"][] = [
        "WAITING",
        "CHARACTER_SELECTION",
        "CHARACTER_DISCLOSURE",
        "DISCUSSION",
        "VOTING",
        "FINAL",
      ];
      const currentIndex = phases.indexOf(state.phase);
      const nextPhase = phases[currentIndex + 1] || "FINAL";
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
// fjdd17fjs3fhwv30heva452fj2hr44aogve90kwbw2
// g3g3f1238j5g2-1634bj4gf22-56n7kfs22335hjk-8y65
// dc6ee94f-187a-44f5-a7c0-ba4ac1480d5d