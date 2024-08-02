import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import StartScreen from './StartScreen.jsx';
import GameScreen from './GameScreen.jsx';
import StartRoom from './StartRoom.jsx';
import LobbuScreen from './LobbuScreen.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<StartScreen/>
  },
  {
    path: "/lobbu/room/game",
    element: <GameScreen/>
  },
  {
    path: "/lobbu/room",
    element: <StartRoom/>
  },
  {
    path: "/lobbu",
    element: <LobbuScreen/>
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
