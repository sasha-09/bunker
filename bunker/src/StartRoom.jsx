import { useState } from "react";
import { Link } from "react-router-dom";
import loadingImg from "./загрузка.gif";
import loadingImg2 from "./шестеренки.gif";

const StartRoom = () => {
  const [players, setPlayers] = useState(["где_ёж"]);
  const [playerName, setPlayerName] = useState("");

  const joinGameRoom = () => {
    if (playerName && players.length < 7 && !players.includes(playerName)) {
      setPlayers([...players, playerName]);
      setPlayerName("");
    } else {
      alert("бункер занят идите в другой бункер>>>");
    }
  };

  return (
    <div>
      <h2>ожидание_игроков</h2>
      <p>ожидается_игроков({players.length}/7)</p>
      <div><input type="text" value={playerName} placeholder="введите имя игрока" onChange={(e) => setPlayerName(e.target.value)}/>
      <button onClick={joinGameRoom}>Присоединиться к выживщим</button>
      
      </div>

            
      <div>
        <div>{players.length < 7 && <img src={loadingImg} />}</div>
        <button class="btn-start">
          {players.length >= 7 && <Link to={`game`}>start game</Link>}
        </button>
        <img src={loadingImg2} />
      </div>
    </div>
  );
};
// x=количество_игроков
export default StartRoom;
