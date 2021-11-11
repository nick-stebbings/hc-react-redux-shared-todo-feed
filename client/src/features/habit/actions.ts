// import zomeApis, { RedDotActionTypes } from "services/zomeApis";

import { Habit, HabitInfo } from "./types";
import { habitSlice } from "./reducer";
const { createHabit, deleteHabit, updateHabit } = habitSlice.actions;

// const createHabitZome = (
//   cellIdString: string,
//   list: Habit
// ): Promise<HabitInfo> =>
//   zomeApis.reddot[RedDotActionTypes["0"]].create({
//     cellIdString,
//     payload: {payload},
//   });

// const fetchHabitZome = (cellIdString: string): Promise<HabitInfo> =>
//   zomeApis.reddot[RedDotActionTypes["1"]].create({
//     cellIdString,
//   });

// const updateHabitZome = (
//   cellIdString: string,
//   list: Habit
// ): Promise<TodoListInfo> =>
//   zomeApis.reddot[RedDotActionTypes["2"]].create({
//     cellIdString,
//     payload: {payload},
//   });

export {
  RedDotActionTypes,
  createHabit,
  deleteHabit,
  updateHabit,
  // createHabitZome,
  // fetchHabitZome,
  // updateHabitZome
};
