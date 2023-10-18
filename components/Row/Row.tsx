import { View, StyleSheet, Text } from 'react-native'
import { ModifyButton } from '../ModifyButtons/ModifyButton'
import { Colors, FontSizes } from '../../constants/styles/theme'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../constants/types/types'

interface IRow {
  title: string
  type:
    | 'rounds'
    | 'prepareTime'
    | 'roundsBreak'
    | 'exerciseTime'
    | 'exerciseCount'
}

export function Row({ title, type }: IRow) {
  const counter = useSelector((state: RootState) => state.exercises[type])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.innerContainer}>
        <ModifyButton counterType='-' type={type} />
        <Text style={styles.counter}>{counter}</Text>
        <ModifyButton counterType='+' type={type} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '70%',
    gap: 10,
    alignItems: 'center',
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: Colors.secondary,
  },
  title: {
    fontSize: FontSizes.large,
    color: Colors.secondary,
  },
  counter: {
    fontSize: FontSizes.xl,
    color: Colors.secondary,
    fontWeight: 'bold',
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    padding: 3,
  },
})
