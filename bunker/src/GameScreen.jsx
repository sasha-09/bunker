import React from "react";
import Clicer from "./Clicer";
import { useState } from "react";



const GameScreen = () => {
  const [gameState, setGameState] = useState("start") // voting - голосование, gameOver, revealing - раскрытие 
  const [players, setPlayers] = useState(["игрок 1", "игрок 2","игрок 3", "игрок 4","игрок 5", "игрок 6","игрок 7"])
const[eluminatedPlayer, setEluminatedPlayer] = useState(null)
const [winners, setWinners] = useState([])
const[revealing, setRevealing] = useState (false)





  return (
    <div>
    <h1 className="text-6xl font-bold text-[]">
      Hello world!
    </h1>
 {/* <Clicer/> */}
    </div>
  );
};

export default GameScreen;
