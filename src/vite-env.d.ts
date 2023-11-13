/// <reference types="vite/client" />

interface Language {
  name: string
  code: Code
}

type Code = 'fr' | 'hi' | 'es' | 'ja'

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
