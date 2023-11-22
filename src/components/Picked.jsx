import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";

import { gamePlayActions } from "../store/gamePlaySlice";

function Picked() {
  const userPick = useSelector((state) => state.gamePlay.userPick);
  const isHousePicked = useSelector((state) => state.gamePlay.isHousePicked);
  const housePick = useSelector((state) => state.gamePlay.housePick);
  const result = useSelector((state) => state.gamePlay.result);

  const dispatch = useDispatch();

  return (
    <>
      <div className="picked">
        <div className="user-pick">
          <motion.img
            src={`./assets/images/icon-${userPick}.svg`}
            alt={userPick}
            animate={{ scale: [0.8, 1.3, 1] }}
          />
          <p>You Picked</p>
        </div>
        <div className="house-pick">
          {!isHousePicked ? (
            <img
              src="./assets/images/empty-picked.svg"
              alt="waiting for house to pick"
            />
          ) : (
            <motion.img
              className="house-choice"
              src={`./assets/images/icon-${housePick}.svg`}
              alt={housePick}
              animate={{ scale: [0.8, 1.3, 1] }}
            />
          )}
          <p>The House Picked</p>
        </div>
      </div>
      {result && (
        <div className="result">
          {result === "win" && <p>You Win</p>}
          {result === "lose" && <p>You Lose</p>}
          {result === "draw" && <p>You Drew</p>}
          <button
            className="play-again-btn"
            onClick={() => dispatch(gamePlayActions.playAgain())}
          >
            Play Again
          </button>
        </div>
      )}
    </>
  );
}

export default Picked;
