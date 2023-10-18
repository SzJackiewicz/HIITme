import { StyleSheet, Button, TouchableOpacity, Text } from 'react-native'
import { Colors } from '../../constants/styles/theme'
import { useDispatch, useSelector } from 'react-redux'
import {
  addPrepareTime,
  addRounds,
  addRoundsBreak,
  reducePrepareTime,
  reduceRounds,
  reduceRoundsBreak,
} from '../../store/exercisesSlice'
import {
  RootState,
  ModifyCounterType,
  CounterType,
} from '../../constants/types/types'

interface IButton {
  counterType: '+' | '-'
  colorReverse?: boolean
  type:
    | 'rounds'
    | 'prepareTime'
    | 'roundsBreak'
    | 'exerciseTime'
    | 'exerciseCount'
}

export function ModifyButton({
  counterType,
  type,
  colorReverse = false,
}: IButton) {
  const buttonBackgroundColor = colorReverse ? Colors.secondary : Colors.accent
  const fontColor = colorReverse ? Colors.accent : Colors.secondary
  const counter = useSelector((state: RootState) => state.exercises[type])
  const dispatch = useDispatch()

  const modifyCounter = (
    addOrReduce: string,
    typeOfModify: string,
    dispatch
  ) => {
    if (
      addOrReduce === ModifyCounterType.ADD &&
      typeOfModify === CounterType.PREPARETIME
    ) {
      dispatch(addPrepareTime(counter))
    }
    if (
      addOrReduce === ModifyCounterType.REDUCE &&
      typeOfModify === CounterType.PREPARETIME
    ) {
      dispatch(reducePrepareTime(counter))
    }
    if (
      addOrReduce === ModifyCounterType.ADD &&
      typeOfModify === CounterType.ROUNDS
    ) {
      dispatch(addRounds(counter))
    }
    if (
      addOrReduce === ModifyCounterType.REDUCE &&
      typeOfModify === CounterType.ROUNDS
    ) {
      dispatch(reduceRounds(counter))
    }
    if (
      addOrReduce === ModifyCounterType.ADD &&
      typeOfModify === CounterType.BREAKTIME
    ) {
      dispatch(addRoundsBreak(counter))
    }
    if (
      addOrReduce === ModifyCounterType.REDUCE &&
      typeOfModify === CounterType.BREAKTIME
    ) {
      dispatch(reduceRoundsBreak(counter))
    }
  }

  return (
    <TouchableOpacity
      onPress={() => modifyCounter(counterType, type, dispatch)}
      style={[
        styles.buttonContainer,
        { backgroundColor: buttonBackgroundColor },
      ]}
    >
      <Text
        style={[
          styles.buttonInner,
          {
            color: fontColor,
          },
        ]}
      >
        {counterType}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 45,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingBottom: 5,
  },
  buttonInner: {
    fontSize: 40,
    letterSpacing: 1,
  },
})
