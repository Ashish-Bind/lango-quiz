import { Button, Container, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ArrowBack, VolumeUp } from '@mui/icons-material'
import { translateWord } from '../utils/features'
import { useDispatch, useSelector } from 'react-redux'
import {
  getWordsFailed,
  getWordsRequest,
  getWordsSucess,
} from '../redux/slices'

const Learning = () => {
  const [count, setCount] = useState<number>(0)
  const { words, loading } = useSelector((state: State) => state)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const params = useSearchParams()[0].get('code') as Code

  const nextHandler = (): void => {
    setCount((prev) => prev + 1)
  }

  useEffect(() => {
    dispatch(getWordsRequest())

    translateWord(params)
      .then((arr) => dispatch(getWordsSucess(arr)))
      .catch((err) => {
        alert(err)
        dispatch(getWordsFailed(err))
      })
  }, [])

  if (loading) {
    return (
      <Container maxWidth="sm">
        <Typography textAlign="center" m="2rem" variant="h6">
          Loading
        </Typography>
      </Container>
    )
  }

  return (
    <Container maxWidth="sm">
      <Typography textAlign="center" m="2rem" variant="h6">
        Learning made easy
      </Typography>
      <Stack direction="row" spacing="1rem" justifyContent="center">
        <Typography variant="h4">
          {count + 1} {words?.[count]?.word} :{' '}
        </Typography>
        <Typography variant="h4">{words?.[count]?.meaning}</Typography>
        <Button>
          <VolumeUp />
        </Button>
      </Stack>
      <Button
        variant="contained"
        sx={{ marginBlock: '1rem' }}
        fullWidth
        onClick={count === 7 ? () => navigate('/quiz') : nextHandler}
      >
        {count === words.length ? 'Test' : 'Next'}
      </Button>
      <Button
        fullWidth
        onClick={
          count === 0 ? () => navigate('/') : () => setCount((prev) => prev - 1)
        }
      >
        <ArrowBack />
      </Button>
    </Container>
  )
}

export default Learning
