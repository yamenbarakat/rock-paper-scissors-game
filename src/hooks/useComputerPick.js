import { useEffect } from "react";
import useGame from "./useGame";

function useComputerPick() {
  const { computerPicked, dispatch } = useGame();

  useEffect(() => {
    const options = ["paper", "scissors", "rock"];

    const randomOption = options[Math.floor(Math.random() * 3)];

    const picked = setTimeout(() => {
      dispatch({ type: "setComputerPicked", payload: randomOption });
    }, 2000);

    return () => clearTimeout(picked);
  }, [dispatch]);

  return { computerPicked };
}

export default useComputerPick;
