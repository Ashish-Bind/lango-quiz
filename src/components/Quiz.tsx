import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { saveResult } from '../redux/slices'

const Quiz = () => {
  const [result, setResult] = useState<string[]>([])
  const [count, setCount] = useState<number>(0)
  const [answer, setAnswer] = useState<string>('')

  const { words } = useSelector((state: State) => state)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const nextHandler = (): void => {
    setResult((prev) => [...prev, answer])
    setCount((prev) => prev + 1)
    setAnswer('')
  }

  useEffect(() => {
    dispatch(saveResult(result))
    if (count + 1 > words.length) {
      navigate('/result')
    }
  }, [result])

  return (
    <Container maxWidth="sm" sx={{ padding: '1rem' }}>
      <Typography m="2rem 0">Quiz</Typography>

      <Typography variant="h3">
        {count + 1} - {words[count]?.word}
      </Typography>

      <FormControl>
        <FormLabel sx={{ margin: '1rem 0' }}>Meaning</FormLabel>
        <RadioGroup value={answer} onChange={(e) => setAnswer(e.target.value)}>
          {words[count]?.options.map((i) => (
            <FormControlLabel value={i} control={<Radio />} label={i} key={i} />
          ))}
        </RadioGroup>
      </FormControl>

      <Button
        variant="contained"
        fullWidth
        onClick={nextHandler}
        disabled={answer === ''}
      >
        {count === words.length ? 'Submit' : 'Next'}
      </Button>
    </Container>
  )
}

export default Quiz
