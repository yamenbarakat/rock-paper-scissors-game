import GameProvider from "./context/GameContext";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import Main from "./ui/Main";

function App() {
  return (
    <GameProvider>
      <Header />

      <Main />

      <Footer />
    </GameProvider>
  );
}

export default App;
