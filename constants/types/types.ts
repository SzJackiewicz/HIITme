import { IInitialState } from '../../store/exercisesSlice'

export const CounterTypes = {
  PREPARETIME: 'prepareTime',
  EXERCISECOUNT: 'exerciseCount',
  ROUNDS: 'rounds',
  BREAKTIME: 'roundsBreak',
  EXERCISETIME: 'exerciseTime',
} as const

export interface RootState {
  exercises: IInitialState
}

export const ModifyCounterType = {
  ADD: '+',
  REDUCE: '-',
}

export enum CounterType {
  PREPARETIME = 'prepareTime',
  EXERCISECOUNT = 'exerciseCount',
  ROUNDS = 'rounds',
  BREAKTIME = 'roundsBreak',
  EXERCISETIME = 'exerciseTime',
}
