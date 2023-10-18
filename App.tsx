import { StatusBar } from 'expo-status-bar'
import { StyleSheet, SafeAreaView } from 'react-native'
import { Colors } from './constants/styles/theme'
import { Button } from './components/Button/Button'
import { Row } from './components/Row/Row'
import { ExerciseRow } from './components/ExerciseRow/ExerciseRow'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { CounterTypes } from './constants/types/types'

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Row title='Przygotowanie' type={CounterTypes.PREPARETIME} />
        <Row
          title='Ilość ćwiczeń w interwale'
          type={CounterTypes.EXERCISECOUNT}
        />
        <ExerciseRow exerciseNumber={1} />
        <Row title='Obwody' type={CounterTypes.ROUNDS} />
        <Row title='Przerwa między obwodami' type={CounterTypes.BREAKTIME} />
        <Button text='START' size='add' />
        <StatusBar style='auto' />
      </SafeAreaView>
    </Provider>
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
