import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../constants/types/types'

export interface IInitialState {
  prepareTime: number
  intervalExercises: {
    id: number
    exerciseTime: number
  }[]
  rounds: number
  roundsBreak: number
}

const initialState: IInitialState = {
  prepareTime: 0,
  intervalExercises: [
    {
      id: 1,
      exerciseTime: 0,
    },
  ],
  rounds: 0,
  roundsBreak: 0,
}

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState,
  reducers: {
    addPrepareTime: (state) => {
      state.prepareTime += 1
    },
    reducePrepareTime: (state) => {
      if (state.prepareTime > 0) {
        state.prepareTime -= 1
      }
    },
    addRounds: (state) => {
      state.rounds += 1
    },
    reduceRounds: (state) => {
      if (state.rounds > 0) {
        state.rounds -= 1
      }
    },
    addRoundsBreak: (state) => {
      state.roundsBreak += 1
    },
    reduceRoundsBreak: (state) => {
      if (state.roundsBreak > 0) {
        state.roundsBreak -= 1
      }
    },
  },
})

export const {
  addPrepareTime,
  addRounds,
  reduceRoundsBreak,
  reduceRounds,
  reducePrepareTime,
  addRoundsBreak,
} = exercisesSlice.actions

export const prepareTimer = (state: RootState) => state.exercises.prepareTime
export const roundsCounter = (state: RootState) => state.exercises.rounds
export const roundsBreakTimer = (state: RootState) =>
  state.exercises.roundsBreak
export const intervalExercisesCounter = (state: RootState) =>
  state.exercises.intervalExercises
export default exercisesSlice.reducer
