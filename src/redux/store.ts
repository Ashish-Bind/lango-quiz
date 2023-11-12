import { configureStore } from '@reduxjs/toolkit'
import root from './slices'

export const store = configureStore({
  reducer: root,
})
