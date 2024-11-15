"use client";
import { useLobbyStore } from "@/app/store/lobbyStore";
import { ModeToggle } from "@/components/mode-toggle";
import { currentProfile } from "@/lib/current-profile";
import { UserButton, useUser } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const lobbyId = searchParams.get("lobbyId");
  const { user } = useUser();
  const {
    players = [],
    addBot,
    removeBot,
    startGame,
    setLobbyData,
  } = useLobbyStore();

  const create = () => {
    // щас вернемся
    if (players.length <= 8) {
      addBot();
    } else {
      alert("MAX 8 PLAYERS");
    }
    addBot();
  };

  // const removeLastBot = () => {
  //   const lastBot = [...players].reverse().find((player) => player.isBot);
  //   if (lastBot) {
  //     removeBot(lastBot.id);
  //   }
  // };

  const handleStartGame = async () => {
    if (players.length === 7) {
      startGame();
      try {
        await fetch(`/api/bunker/${lobbyId}/start`, {
          method: "POST",
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("минимум 8 игроков");
    }
  };

  useEffect(() => {
    const fetchLobbyData = async () => {
      try {
        const r = await fetch(`/api/bunker/${lobbyId}`);
        const data = await r.json();
        setLobbyData(data.id, data.players, data.status);
      } catch (error) {
        console.log(error);
      }
    };
    if (lobbyId) fetchLobbyData();
  }, [lobbyId, setLobbyData]);
  // ЗАВИСИМОСТЬ
  return (
    <div>
      <h1 className="text-3xl">бункер</h1>
      <h1 className="text-3xl">лобби</h1>
      {user&&user.emailAddresses[0]?.emailAddress}
      <ul>
        {players.map((player) => (
          <li key={player.id}>{player.name}     <button onClick={() => removeBot(player.id)} disabled={players.length < 1}>
          удалить бота
        </button></li>
          
        ))}
      </ul>
      <button onClick={addBot} disabled={players.length >= 8}>
        добавить бота
      </button>
  
      <button onClick={startGame} disabled={players.length <= 7}>
        начать игру
      </button>

      <UserButton />
      <ModeToggle />
    </div>
  );
}
