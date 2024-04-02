import { useEffect } from "react";
import useGame from "./useGame";

function useResult() {
  const { userPicked, computerPicked, dispatch } = useGame();

  let result = "";

  if (userPicked === computerPicked) {
    result = "draw";
  } else if (
    (userPicked === "paper" && computerPicked === "rock") ||
    (userPicked === "scissors" && computerPicked === "paper") ||
    (userPicked === "rock" && computerPicked === "scissors")
  ) {
    result = "win";
  } else {
    result = "lose";
  }

  // save the score in local storage
  useEffect(() => {
    if (!computerPicked) return;

    const setResutl = setTimeout(() => {
      dispatch({ type: "setResult", payload: result });
    }, 1000);

    return () => clearTimeout(setResutl);
  }, [result, dispatch, computerPicked]);
}

export default useResult;
