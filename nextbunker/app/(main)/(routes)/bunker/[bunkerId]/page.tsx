"use client";
import { useLobbyStore } from "@/app/store/lobbyStore";
import { ModeToggle } from "@/components/mode-toggle";
import { currentProfile } from "@/lib/current-profile";
import { UserButton, useUser } from "@clerk/nextjs";
import { Router } from "lucide-react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter()
  const params = useParams()
  const bunkerId = params.bunkerId
  console.log(bunkerId)
  const { user } = useUser();
  const {
    players = [],
    addBot,
    removeBot,
    startGame,
    setLobbyData,
  } = useLobbyStore();
  // dc6ee94f-187a-44f5-a7c0-ba4ac1480d5d
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

  const handleStartGame = () => {
    if (players.length === 8) {
      const gameId = startGame()
      router.push(`/game/${gameId}`)
    } else {
      console.log("минимум 8 игроков");
    }
  };

  useEffect(() => {
    const fetchLobbyData = async () => {
      try {
        const r = await fetch(`/api/bunker/${bunkerId}`);
        const data = await r.json();
        setLobbyData(data.id, data.players, data.status);
      } catch (error) {
        console.log(error);
      }
    };
    if (bunkerId) fetchLobbyData();
  }, [bunkerId, setLobbyData]);
  // bunkerId
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
  
      <button onClick={handleStartGame} disabled={players.length <= 7}>
        начать игру
      </button>

      <UserButton />
      <ModeToggle />
    </div>
  );
}
// g3g3f1238j5g2-1634bj4gf22-56n7kfs22335hjk-8y65
// dc6ee94f-187a-44f5-a7c0-ba4ac1480d5d