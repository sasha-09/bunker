import { useLobbyStore } from "@/app/store/lobbyStore";

export default function GamaPage() {
 
  return (
    <div>
      <h1 className="text-3xl">лобби</h1>
      <ul><li>Крестоносец</li></ul>
      <button>добавить бота</button>
      <button>удалить бота</button>
      <button>начать игру</button>
    </div>
  );
}
