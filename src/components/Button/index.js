import React from 'react'
import PropType from 'prop-types'
import {Text, TouchableOpacity} from 'react-native'

const Button = ({
  text,
  containerClass,
  customClass,
  customStyle,
  like,
  dislike,
  reset,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      customStyle={customStyle}
      onPress={onPress}
      className={` ${
        dislike ? 'bg-[#DB2C2C]' : like ? 'bg-[#2B72C4]' : 'bg-white'
      }  rounded-[4px] justify-center items-center py-2 px-6 ${containerClass}`}>
      <Text
        className={`${
          reset ? 'text-[#000000]' : 'text-white'
        }  text-[16px] ${customClass}`}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

Button.propTypes = {
  text: PropType.string.isRequired,
  containerClass: PropType.string,
  customClass: PropType.string,
  like: PropType.bool,
  dislike: PropType.bool,
  reset: PropType.bool,
  onPress: PropType.func,
}

Button.defaultProps = {
  containerClass: '',
  customClass: '',
  onPress: () => {},
}

export default React.memo(Button)
