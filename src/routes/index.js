import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from 'screens/Home'

const Stack = createNativeStackNavigator()

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerShown={false}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default Router
