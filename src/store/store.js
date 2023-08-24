import {createStore, applyMiddleware, combineReducers} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {persistReducer, persistStore} from 'redux-persist'
import Posts from './posts/reducer'

const NODE_ENV = 'development'
export let Middlewares

if (NODE_ENV === 'production') {
  Middlewares = applyMiddleware(thunk)
} else {
  Middlewares = applyMiddleware(thunk, logger)
}

export const Reducers = combineReducers({
  Posts,
})

const persistConfig = {
  setTimeout: 2000,
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, Reducers)

export default () => {
  let store = createStore(persistedReducer, {}, Middlewares)
  let persister = persistStore(store)
  return {store, persister}
}
