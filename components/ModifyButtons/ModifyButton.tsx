import { View, StyleSheet, Text } from 'react-native'
import { Colors } from '../../constants/styles/theme'

interface IButton {
  type: '+' | '-'
  colorReverse?: boolean
}

export function ModifyButton({ type, colorReverse = false }: IButton) {
  const buttonBackgroundColor = colorReverse ? Colors.secondary : Colors.accent
  const fontColor = colorReverse ? Colors.accent : Colors.secondary

  return (
    <View
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
        {type}
      </Text>
    </View>
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
