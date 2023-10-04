import { View, StyleSheet, Text } from 'react-native'
import { Colors, FontSizes } from '../../constants/styles/theme'

interface IButton {
  size: string
  text: string
}

export function Button({ size, text }: IButton) {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonInner}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 250,
    height: 50,
    display: 'flex',
    border: `1px solid ${Colors.secondary}`,
    backgroundColor: Colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonInner: {
    color: Colors.secondary,
    fontSize: FontSizes.large,
    letterSpacing: 1,
    fontWeight: 'bold',
  },
})
