import useResult from "../hooks/useResult";
import useGame from "../hooks/useGame";

function Result() {
  const { result, dispatch } = useGame();
  useResult();

  return (
    <div className={`result ${result && "show"}`}>
      <p>{result}</p>
      <button onClick={() => dispatch({ type: "restart" })}>play again</button>
    </div>
  );
}

export default Result;
