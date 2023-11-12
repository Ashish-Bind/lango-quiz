/// <reference types="vite/client" />

interface Language {
  name: string
  code: string
}

type Code = 'en' | 'hi' | 'es' | 'ja'

type Word = {
  word: string
  meaning: string
  options: string[]
}

interface State {
  loading: boolean
  result: string[]
  words: Word[]
  error?: string
}

type API = {
  translations: {
    text: string
  }[]
}
