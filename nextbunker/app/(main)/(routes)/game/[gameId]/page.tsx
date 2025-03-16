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
    if (phase === "CHARACTER_SELECTION"&& players.length>0) {
      assignCharacters();
    }
  }, [phase, assignCharacters,players]);

  const handleNextPhase = () => {
    nextPhase();
  };

  const renderPhaseContent = () => {
    switch (phase) {
      case "WAITING":
        return <p>мы ждем игроков</p>
      case "CHARACTER_SELECTION":
        return <p>загрзка персонажей</p>;
       
        
      case "CHARACTER_DISCLOSURE":
        return <p>раскрытие карт</p>;
        
        
      case "DISCUSSION":
        return <p>дискутирование</p>;
        
    
      case "VOTING":
        return <p>голосование</p>;
       
    
      case "FINAL":
        return <p>финал</p>;
        

      default:
        return <p>хз какая фаза</p>;
      
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
            <li className="border p-4" key={player.id}>
                <p>{player.name}</p>
                <p>{player.isBot ? "(БОТ)" : "(ИГРОК)"}</p>
                {player.character ? (
                <>
                  <p>Имя персонажа: {player.character.name}</p>
                  <p>Биология: {player.character.biology}</p>
                  <p>Профессия: {player.character.profession}</p>
                  <p>Здоровье: {player.character.health}</p>
                  <p>Предмет: {player.character.item}</p>
                </>
              ) : (
                <p>Персонаж не назначен</p>
              )}


            
              {/* {player.name}-{player.isBot}-{player.character?.biology}-
              {player.character?.health}-{player.character?.item}-
              {player.character?.name}-{player.character?.profession} */}
            </li>
          ))
        ) : (
          <li>игроки загружаются</li>
        )}
      </ul>
      {renderPhaseContent()}

      {phase !== "FINAL" && <button onClick={handleNextPhase}>+фаза</button>}
      {/* <button>-фаза</button> */}
    </div>
  );
}


  //  /* {player.name}-{player.isBot}-{player.character?.biology}-
  //             {player.character?.health}-{player.character?.item}-
  //             {player.character?.name}-{player.character?.profession