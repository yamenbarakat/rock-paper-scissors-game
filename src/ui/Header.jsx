import useGame from "../hooks/useGame";

function Header() {
  const { score } = useGame();

  return (
    <header className="header container">
      <h1 className="logo">
        <span>rock</span>
        <span>paper</span>
        <span>scissors</span>
      </h1>
      <div className="score-container">
        <p>score</p>
        <span className="score-number">{score}</span>
      </div>
    </header>
  );
}

export default Header;
