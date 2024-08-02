import React from "react";
import Clicer from "./Clicer";
import { useState } from "react";
import Card from "./Card";
import PlayersCharacteristics from "./PlayersCharacteristics";

const GameScreen = () => {
  const [gameState, setGameState] = useState("start"); // voting - голосование, gameOver, revealing - раскрытие
  const [players, setPlayers] = useState([
    "игрок 1",
    "игрок 2",
    "игрок 3",
    "игрок 4",
    "игрок 5",
    "игрок 6",
    "игрок 7",
  ]);
  const [eluminatedPlayer, setEluminatedPlayer] = useState(null);
  const [winners, setWinners] = useState([]);
  const [revealing, setRevealing] = useState(false);

  return (
    <div className="bg-slate-900 w-screen h-screen">
      <div className="flex  text-sm font-montserrat">
        <div className="bg-[#0E1C3D] text-[#FFFFFF] border-2 border-sky-500 rounded p-2 h-screen w-1/5">
          <div>
            <h2 className="font-russo">КОТОПОКАЛИПСИС</h2>
            <p>
              весь мир был нагружен огромным количеством котов и создатели его
              перезапускают единственое место спасение этот бункер
            </p>
          </div>
          <div>
            <h2 className="font-russo">БУНКЕР</h2>
            <p>2 жилые комнаты запас еды и воды на 40 дней</p>
          </div>
          <Card player="твой персонаж" />
          <button className="btn text-[#FFFFFF] bg-blue-950 border-2 border-sky-500 mt-2">
            Подтвердите_действие
          </button>
        </div>
        <div className="flex justify-between bg-slate-950">
          <PlayersCharacteristics/>
          {/* <Card player="игрок 2" />
          <Card player="игрок 3" />
          <Card player="игрок 4" /> */}
        </div>
      </div>
      {/* <Clicer/> */}
    </div>
  );
};

export default GameScreen;
