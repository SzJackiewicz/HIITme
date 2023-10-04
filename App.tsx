import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from './constants/styles/theme'
import { Button } from './components/Button/Button'
import { ModifyButton } from './components/ModifyButtons/ModifyButton'
import { Row } from './components/Row/Row'

export default function App() {
  return (
    <View style={styles.container}>
      <Row title='Przygotowanie' />
      <Row title='Ilość ćwiczeń w interwale' />
      <Row title='Obwody' />
      <Row title='Przerwa między obwodami' />
      <Row title='Prepare' />
      <Button text='START' size='add' />
      <StatusBar style='auto' />
    </View>
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
