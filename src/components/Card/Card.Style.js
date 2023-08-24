import {StyleSheet} from 'react-native'

export const CardStyle = StyleSheet.create({
  cardContainerIOS: {
    shadowColor: '#000000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.12,
    shadowRadius: 3,
    borderRadius: 8,
  },
  cardContainer: {
    elevation: 8,
    shadowColor: '#000000',
    borderRadius: 8,
  },
})
