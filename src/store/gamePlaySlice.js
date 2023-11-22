import { createSlice } from "@reduxjs/toolkit";

const initialGameState = {
  isPicked: false,
  isHousePicked: false,
  score: localStorage.getItem("score") || 0,
  userPick: undefined,
  housePick: undefined,
  result: undefined,
};

const OPTIONS = ["rock", "paper", "scissors", "lizard", "spock"];

const OUTCOMES = {
  rock: {
    rock: "draw",
    paper: "lose",
    scissors: "win",
    lizard: "win",
    spock: "lose",
  },
  paper: {
    rock: "win",
    paper: "draw",
    scissors: "lose",
    lizard: "lose",
    spock: "win",
  },
  scissors: {
    rock: "lose",
    paper: "win",
    scissors: "draw",
    lizard: "win",
    spock: "lose",
  },
  lizard: {
    rock: "lose",
    paper: "win",
    scissors: "lose",
    lizard: "draw",
    spock: "win",
  },
  spock: {
    rock: "win",
    paper: "lose",
    scissors: "win",
    lizard: "lose",
    spock: "draw",
  },
};

const gamePlaySlice = createSlice({
  name: "gamePlay",
  initialState: initialGameState,
  reducers: {
    userPick(state, action) {
      state.isPicked = true;
      state.userPick = action.payload;
    },
    housePick(state) {
      state.isHousePicked = true;
      state.housePick = OPTIONS[Math.floor(Math.random() * 5)];
      state.result = OUTCOMES[state.userPick][state.housePick];

      if (state.result === "win") state.score++;
      if (state.result === "lose") state.score--;
      localStorage.setItem("score", state.score);
    },
    playAgain(state) {
      state.isPicked = false;
      state.isHousePicked = false;
      state.housePick = undefined;
      state.result = undefined;
    },
  },
});

export const gamePlayActions = gamePlaySlice.actions;
export default gamePlaySlice.reducer;
