import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const LobbuScreen = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/rooms")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  });

  return (
    <div>
      <h2>ожидание_игроков</h2>
 <ul>
{data.map(item => (
    <li key={item.id}>{item.name}</li>
))}



 </ul>

 <Link to={`room`}>start game</Link>
  

    </div>
  );
};

export default LobbuScreen;
