import { View, StyleSheet, Text } from 'react-native'
import { ModifyButton } from '../ModifyButtons/ModifyButton'
import { Colors, FontSizes } from '../../constants/styles/theme'

interface IExerciseRow {
  exerciseNumber: number
}

export function ExerciseRow({ exerciseNumber }: IExerciseRow) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ćwiczenie {exerciseNumber}</Text>
      <View style={styles.innerContainer}>
        <ModifyButton counterType='-' colorReverse type='exerciseCount'  />
        <Text style={styles.counter}>0</Text>
        <ModifyButton counterType='+' colorReverse type='exerciseCount'  />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '60%',
    gap: 7,
    alignItems: 'center',
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: Colors.secondary,
  },
  title: {
    fontSize: FontSizes.medium,
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
