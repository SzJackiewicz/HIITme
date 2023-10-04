import { View, StyleSheet, Text } from 'react-native'
import { Colors, FontSizes } from '../../constants/styles/theme'

interface IButton {
  type: '+' | '-'
}

export function ModifyButton({ type }: IButton) {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonInner}>{type}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 45,
    height: 40,
    display: 'flex',
    backgroundColor: Colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingBottom: 5,
  },
  buttonInner: {
    color: Colors.secondary,
    fontSize: 40,
    letterSpacing: 1,
  },
})
