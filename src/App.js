import React from 'react'
import Store from './store/store'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {NavigationContainer} from '@react-navigation/native'
import Router from 'routes'

const App = () => {
  const {store, persister} = Store()

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App
