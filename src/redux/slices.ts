import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: State = {
  loading: false,
  words: [],
  result: [],
}

const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    getWordsRequest: (state) => {
      state.loading = true
    },
    getWordsSucess: (state, action: PayloadAction<Word[]>) => {
      state.loading = false
      state.words = action.payload
    },
    getWordsFailed: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
    saveResult: (state, action: PayloadAction<string[]>) => {
      state.loading = false
      state.result = action.payload
    },
    clearState: (state) => {
      state.loading = false
      state.result = []
      state.words = []
      state.error = undefined
    },
  },
})

export default rootSlice.reducer
export const {
  clearState,
  getWordsFailed,
  getWordsRequest,
  getWordsSucess,
  saveResult,
} = rootSlice.actions
