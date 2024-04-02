import { useContext } from "react";
import { GameContext } from "../context/GameContext";

function useGame() {
  const context = useContext(GameContext);
  return context;
}

export default useGame;
