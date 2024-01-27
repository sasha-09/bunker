import React from "react";
import { Link } from "react-router-dom";
const StartScreen = () => {
  return (
    <div>
      {" "}
      <img
        src="https://i.pinimg.com/originals/61/ac/0b/61ac0ba01b5f5861e4d99cc1058405cd.jpg"
        alt="карта бункера не загрузилась"
        width="350"
      />
      <h1>Welcome to online game Bunker</h1>
      <p>
        приветствую вас в игре Бункер сдесь вам предстоит голосовать и выгонять
        игроков из бункера так как еды и ресурсов на всех не хватит.Посмотрите
        свои карты и готовтесь использовать уловки и стратегии.Прятной игры
      </p>
      <button class="btn-start">
      <Link to={`game`}>start game</Link>

      </button>
    </div>
  );
};

export default StartScreen;
