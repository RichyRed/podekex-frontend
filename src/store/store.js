import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import pokedexReducer from './pokedex/pokedexSlice'
import authReducer from './auth/authSlice' 
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE, 
  PERSIST,
  PURGE, 
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    //pokedex: pokedexReducer,
    //auth: authReducer
},

middleware: (getDefaultMiddleware) =>
getDefaultMiddleware({
  serializableCheck: {
    ignoredActions:[FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
}),
})