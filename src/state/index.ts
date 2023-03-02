import { configureStore } from '@reduxjs/toolkit'
import { load, save } from 'redux-localstorage-simple';
import weather from './weather/reducer'

const PERSISTED_KEYS: string[] = ['weather'];

const store = configureStore({
    reducer: {
      weather,
    },
    preloadedState: load({ states: PERSISTED_KEYS })
  })
  
export default store