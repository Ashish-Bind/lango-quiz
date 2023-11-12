import axios from 'axios'
import _ from 'lodash'
import { generate } from 'random-words'

const generateOptionsForQuiz = (
  words: {
    Text: string
  }[],
  index: number
) => {
  const correctAnswer = words[index].Text
  const wordsWithIncorrectAnswer = words.filter((i) => i.Text !== correctAnswer)
  const incorrectOptions: string[] = _.sampleSize(
    wordsWithIncorrectAnswer,
    3
  ).map((i) => i.Text)

  return _.shuffle([...incorrectOptions, correctAnswer])
}

export const translateWord = async (languageCode: string): Promise<Word[]> => {
  const words = generate(8).map((i) => {
    return { Text: i }
  })
  const options = {
    method: 'POST',
    url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
    params: {
      'to[0]': languageCode,
      'api-version': '3.0',
      profanityAction: 'NoAction',
      textType: 'plain',
    },
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '83f44e0e5bmshb757be853ede9f4p1775bajsn96e76ef60f7a',
      'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
    },
    data: words,
  }

  try {
    const response = await axios.request(options)
    const translatedWords: API[] = response.data

    const wordArray: Word[] = translatedWords.map((item, i) => {
      return {
        word: item.translations[0].text,
        meaning: words[i].Text,
        options: generateOptionsForQuiz(words, i),
      }
    })

    return wordArray
  } catch (error) {
    throw new Error('Something went wrong')
  }
}

export const getCorrectAnswerCount = (arr1: string[], arr2: Word[]): number => {
  let count: number = 0
  arr1.forEach((item, index) => {
    if (item === arr2[index].meaning) {
      count++
    }
  })

  return count
}
