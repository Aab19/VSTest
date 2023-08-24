import React from 'react'
import {Platform, SafeAreaView, View} from 'react-native'
import Card from 'components/Card'
import {useDispatch, useSelector} from 'react-redux'
import {FlashList} from '@shopify/flash-list'
import Button from 'components/Button'
import PostAction from 'store/posts/action'

const Home = () => {
  const dispatch = useDispatch()
  const {data} = useSelector(({Posts}) => Posts)

  const renderPost = ({item, index}) => {
    return (
      <Card
        key={index}
        containerClass={`${index !== 0 && 'mt-4'}`}
        image={item.image}
        like={item.likes}
        onPressLike={() => dispatch(PostAction.likePost(item.id))}
        onPressDislike={() => dispatch(PostAction.dislikePost(item.id))}
      />
    )
  }

  return (
    <SafeAreaView className="flex-1">
      <View className="w-full h-full px-4 pt-4">
        <View className="flex flex-row justify-between max-w-max mb-4">
          <Button
            text="Like All"
            like
            onPress={() => dispatch(PostAction.likeAllPost())}
          />
          <Button
            text="Reset All"
            reset
            onPress={() => dispatch(PostAction.resetAllPost())}
          />
          <Button
            text="Dislike All"
            dislike
            onPress={() => dispatch(PostAction.dislikeAllPost())}
          />
        </View>
        <FlashList
          key={'_'}
          data={data}
          estimatedItemSize={100}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: Platform.OS === 'ios' ? 20 : 20,
          }}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderPost}
        />
      </View>
    </SafeAreaView>
  )
}

export default Home
