import { createContext, useReducer } from "react";

export const GameContext = createContext();

const initialState = {
  userPicked: "",
  computerPicked: "",
  score: 12,
  result: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "setUserPicked":
      return { ...state, userPicked: action.payload };
    case "setComputerPicked":
      return { ...state, computerPicked: action.payload };
    case "setResult":
      if (state.score === 0 && action.payload === "lose")
        return { ...state, result: "you lose" };

      return {
        ...state,
        result:
          action.payload === "draw" ? action.payload : `you ${action.payload}`,
        score:
          action.payload === "draw"
            ? state.score
            : action.payload === "win"
            ? state.score + 1
            : state.score - 1,
      };
    case "restart":
      return { ...initialState, score: state.score };
  }
}

function GameProvider({ children }) {
  const [{ userPicked, computerPicked, result, score }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <GameContext.Provider
      value={{ userPicked, computerPicked, result, score, dispatch }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameProvider;
