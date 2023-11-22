import { useState } from "react";
import { useSelector } from "react-redux";

import Button from "./components/Button";
import Game from "./components/Game";
import Header from "./components/Header";
import Picked from "./components/Picked";
import Rules from "./components/Rules";

function App() {
  const isPicked = useSelector((state) => state.gamePlay.isPicked);

  const [showRulesModal, setShowRulesModal] = useState(false);

  function handleOpenRulesModal() {
    setShowRulesModal(true);
  }

  function handleCloseRulesModal() {
    setShowRulesModal(false);
  }

  return (
    <>
      {!showRulesModal && (
        <div className="app">
          <Header />
          {isPicked ? <Picked /> : <Game />}
          <Button onOpenModal={handleOpenRulesModal} />
        </div>
      )}
      {showRulesModal && <Rules onCloseModal={handleCloseRulesModal} />}
    </>
  );
}

export default App;
