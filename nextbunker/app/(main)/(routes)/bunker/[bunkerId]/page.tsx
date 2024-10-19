"use client";
import { useLobbyStore } from "@/app/store/lobbyStore";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { link } from "fs";
import Image from "next/image";
import { useRouter } from "next/router";

import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  const { lobbyId } = router.query;
  const { players, addBot, removeBot, startGame, setLobbyData } =
    useLobbyStore();

  const create = async () => {
    const newBot = {
      id: Date.now().toString(),
      name: `bot ${players.length + 1}`,
      isBot: true,
    };
    const updatePlayers = [...players, newBot];
    // await updateLobbyData (lobbyId,updatePlayers,"OPEN")
    addBot();
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
    fetchLobbyData();
  }, []);
  return (
    <div>
      <h1 className="text-3xl">бункер</h1>
      <h1 className="text-3xl">лобби</h1>
      <ul>
        {players.map((player) => (
          <li>{player.name}</li>
        ))}
      </ul>
      <button onClick={create}>добавить бота</button>
      <button>удалить бота</button>
      <button disabled={players.length < 7}>начать игру</button>

      <UserButton />
      <ModeToggle />
    </div>
  );
}
