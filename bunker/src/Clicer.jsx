import React from 'react'
import { useState } from "react";
import cokie from "./печенье.png";
import "./App.css";

const Clicer = () => {
    const [clicks, setClicks] = useState(0);
    const [cookieClick, setCookieClick] = useState(false);
  
    function clicers() {
      setClicks(clicks + 1);
    }
  
  return (
    <div>  <div>
    <p>вы нажали двоеточие:{clicks} </p>
    <img
      className={cookieClick ? "heartBit" : ""}
      src={cokie}
      alt=""
      width="250"
      onClick={() => {
        clicers();
        setCookieClick(true);
        setTimeout(() => setClicked(false), 1000);
      }}
    />
  </div></div>
  )
}

export default Clicer