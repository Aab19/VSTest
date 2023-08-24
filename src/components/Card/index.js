import React from 'react'
import PropType from 'prop-types'
import {Image, Platform, Text, View} from 'react-native'
import {CardStyle} from './Card.Style'
import Button from 'components/Button'

const Card = ({containerClass, image, like, onPressLike, onPressDislike}) => {
  return (
    <View
      className={`bg-white ${containerClass}`}
      style={[
        Platform.OS === 'ios'
          ? CardStyle.cardContainerIOS
          : CardStyle.cardContainer,
      ]}>
      <Image
        className="w-full h-[200px] rounded-tl-lg rounded-tr-lg"
        source={{
          uri: image,
        }}
      />
      <View className="p-4 flex flex-row justify-between items-center">
        <Text>{like} Like</Text>
        <View className="flex flex-row">
          <Button text="Like" like onPress={onPressLike} />
          <Button
            containerClass="ml-2"
            text="Dislike"
            dislike
            onPress={onPressDislike}
          />
        </View>
      </View>
    </View>
  )
}

Card.propTypes = {
  containerClass: PropType.string,
  image: PropType.string,
  like: PropType.number,
  onPressLike: PropType.func,
  onPressDislike: PropType.func,
}

Card.defaultProps = {
  containerClass: '',
  onPressLike: () => {},
  onPressDislike: () => {},
}

export default React.memo(Card)
