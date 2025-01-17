"use client";

import { useGameStore } from "@/app/store/gameStore";
import next from "next";
import { use, useEffect } from "react";
import { set, string } from "zod";

export default function GamaPage({ params }: { params: { gameId: string } }) {
  const { gameId } = params;
  const { setGameData, assignCharacters, players, phase, nextPhase } =
    useGameStore();

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const r = await fetch(`/api/game/${gameId}`);
        if (!r.ok) {
          throw new Error("ошибка о получинии игровых данных");
        }
        const data = await r.json();
        setGameData(gameId, data.players);
      } catch (error) {
        console.log("ERRORs", error);
      }
    };
    fetchGameData();
  }, [gameId, setGameData]);

  useEffect(() => {
    if (phase === "CHARACTER_SELECTION") {
      assignCharacters();
    }
  }, [phase, assignCharacters]);
  
  const handleNextPhase = () => {
    nextPhase();
  };

  const renderPhaseContent = () => {
    switch (phase) {
      case "WAITING":
        return;
        <p>мы ждем игроков</p>;
        break;
      case "CHARACTER_SELECTION":
        return;
        <p>загрзка персонажей</p>;
        break;
      case "DISCUSSION":
        return;
        <p>дискутирование</p>;
        break;
      case "VOTING":
        return;
        <p>голосование</p>;
        break;
      case "FINAL":
        return;
        <p>финал</p>;

        break;
      default:
        return;
        <p>хз какая фазв</p>;
        break;
    }    
  };    
//  _______________________  
//   //     *             |
//   //    <=>            |
//   //   <<=>>           |
//   //  <<<=>>>          |
//   // <<<===>>>         |
// _______________________|
  return (
    <div>
      <h1 className="text-3xl">Игра</h1>
      <h2>текущая Игра:{gameId}</h2>
      <h2>мониторинг фазы игры:{phase}</h2>
      <ul>
        {players?.length > 0 ? (
          players.map((player) => (
            <li key={player.id}>
              {player.name}-{player.isBot}-{player.character?.biology}-
              {player.character?.health}-{player.character?.item}-
              {player.character?.name}-{player.character?.profession}
            </li>
          ))
        ) : (
          <li>игроки загружаются</li>
        )}
      </ul>
      {renderPhaseContnt()}
      
      {phase !== "FINAL" && <button onClick={handleNextPhase}>+фаза</button>}
      {/* <button>-фаза</button> */}
    </div>
  );
}
