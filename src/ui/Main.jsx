import Icon from "./Icon";
import useComputerPick from "../hooks/useComputerPick";
import Result from "./Result";
import useGame from "../hooks/useGame";

function Main() {
  const { userPicked } = useGame();

  return (
    <main className="main">{userPicked ? <PickedIcons /> : <Icons />}</main>
  );
}

function Icons() {
  const { dispatch } = useGame();

  return (
    <section className="icons container">
      <div
        className="paper-img"
        role="button"
        aria-label="Choose Paper"
        onClick={() => dispatch({ type: "setUserPicked", payload: "paper" })}
      >
        <div className="circle">
          <Icon src="icon-paper.svg" />
        </div>
      </div>

      <div
        className="scissors-img"
        role="button"
        aria-label="Choose Scissors"
        onClick={() => dispatch({ type: "setUserPicked", payload: "scissors" })}
      >
        <div className="circle">
          <Icon src="icon-scissors.svg" />
        </div>
      </div>

      <div
        className="rock-img"
        role="button"
        aria-label="Choose Rock"
        onClick={() => dispatch({ type: "setUserPicked", payload: "rock" })}
      >
        <div className="circle">
          <Icon src="icon-rock.svg" />
        </div>
      </div>
    </section>
  );
}

function PickedIcons() {
  const { userPicked, result } = useGame();
  const { computerPicked } = useComputerPick();

  return (
    <section className="picked-icons container">
      <div className="user-picked">
        <div
          className={`${userPicked}-img img ${
            result.includes("win") ? "winning" : ""
          }`}
        >
          <div className="circle">
            <Icon src={`icon-${userPicked}.svg`} />
          </div>
        </div>

        <p>you picked</p>
      </div>

      <div className="computer-picked">
        <div className={computerPicked ? "" : "picking"}>
          <div
            className={`${computerPicked}-img img ${
              computerPicked ? "show" : ""
            } ${result.includes("lose") ? "winning" : ""}`}
          >
            <div className="circle">
              <Icon src={`icon-${computerPicked}.svg`} />
            </div>
          </div>
        </div>

        <p>the house picked</p>
      </div>

      <Result />
    </section>
  );
}

export default Main;
