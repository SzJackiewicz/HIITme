import { StatusBar } from 'expo-status-bar'
import { StyleSheet, SafeAreaView } from 'react-native'
import { Colors } from './constants/styles/theme'
import { Button } from './components/Button/Button'
import { Row } from './components/Row/Row'
import { ExerciseRow } from './components/ExerciseRow/ExerciseRow'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Row title='Przygotowanie' />
      <Row title='Ilość ćwiczeń w interwale' />
      <ExerciseRow exerciseNumber={1} />
      <Row title='Obwody' />
      <Row title='Przerwa między obwodami' />
      <Button text='START' size='add' />
      <StatusBar style='auto' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: Colors.main,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
