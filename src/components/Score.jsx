import { useSelector } from "react-redux";

function Score() {
  const score = useSelector((state) => state.gamePlay.score);

  return (
    <div className="score">
      <p>Score</p>
      <p>{score}</p>
    </div>
  );
}

export default Score;
