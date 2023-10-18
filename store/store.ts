import { configureStore } from '@reduxjs/toolkit'
import exerciesReducer from './exercisesSlice'

export const store = configureStore({
  reducer: {
    exercises: exerciesReducer,
  },
})
