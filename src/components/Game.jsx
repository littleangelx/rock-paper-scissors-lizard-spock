import { useDispatch } from "react-redux";
import { motion, useAnimate, stagger } from "framer-motion";

import { gamePlayActions } from "../store/gamePlaySlice";

function Game() {
  const dispatch = useDispatch();
  const [scope, animate] = useAnimate();

  function animateShake(choice) {
    animate(
      `.${choice}`,
      { x: [-10, 0, 10, 0] },
      { type: "spring", duration: 0.2, delay: stagger(0.01) }
    );
  }
  return (
    <div className="game" ref={scope}>
      <img src="./assets/images/bg-pentagon.svg" className="game-background" />
      <motion.img
        src="./assets/images/icon-scissors.svg"
        alt="scissors"
        className="scissors option"
        onClick={() => {
          animateShake("scissors");
          setTimeout(() => {
            dispatch(gamePlayActions.userPick("scissors"));
          }, 500);
          setTimeout(() => {
            dispatch(gamePlayActions.housePick());
          }, 1500);
        }}
      />
      <motion.img
        src="./assets/images/icon-spock.svg"
        alt="spock"
        className="spock option"
        onClick={() => {
          animateShake("spock");
          setTimeout(() => {
            dispatch(gamePlayActions.userPick("spock"));
          }, 500);
          setTimeout(() => {
            dispatch(gamePlayActions.housePick());
          }, 1500);
        }}
      />
      <motion.img
        src="./assets/images/icon-paper.svg"
        alt="paper"
        className="paper option"
        onClick={() => {
          animateShake("paper");
          setTimeout(() => {
            dispatch(gamePlayActions.userPick("paper"));
          }, 500);
          setTimeout(() => {
            dispatch(gamePlayActions.housePick());
          }, 1500);
        }}
      />
      <motion.img
        src="./assets/images/icon-lizard.svg"
        alt="lizard"
        className="lizard option"
        onClick={() => {
          animateShake("lizard");

          setTimeout(() => {
            dispatch(gamePlayActions.userPick("lizard"));
          }, 500);
          setTimeout(() => {
            dispatch(gamePlayActions.housePick());
          }, 1500);
        }}
      />
      <motion.img
        src="./assets/images/icon-rock.svg"
        alt="rock"
        className="rock option"
        onClick={() => {
          animateShake("rock");
          setTimeout(() => {
            dispatch(gamePlayActions.userPick("rock"));
          }, 500);
          setTimeout(() => {
            dispatch(gamePlayActions.housePick());
          }, 1500);
        }}
      />
    </div>
  );
}

export default Game;
