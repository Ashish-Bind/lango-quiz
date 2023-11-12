import {
  Button,
  Container,
  List,
  ListItem,
  Stack,
  Typography,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { clearState } from '../redux/slices'
import { useNavigate } from 'react-router-dom'
import { getCorrectAnswerCount } from '../utils/features'

const result = ['a', 'b', 'c']

const words = [{ meaning: 'asdaf' }, { meaning: 'dafs' }]

const Result = () => {
  const { words, result } = useSelector((state: State) => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const correctAnswer = getCorrectAnswerCount(result, words)
  const percentage = (correctAnswer / words.length) * 100

  const resetHandler = (): void => {
    dispatch(clearState())
    navigate('/')
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h3" textAlign="center">
        Result
      </Typography>
      <Typography variant="h6" m="1rem" textAlign="center">
        You got {correctAnswer} out of {words.length}
      </Typography>

      <Stack direction="row" justifyContent="space-evenly">
        <Stack>
          <Typography m="1rem 0">Your answer</Typography>
          <List>
            {result.map((item, index) => (
              <ListItem key={index}>
                {index + 1} - {item}
              </ListItem>
            ))}
          </List>
        </Stack>
        <Stack>
          <Typography m="1rem 0">Correct answer</Typography>
          <List>
            {words.map((item, index) => (
              <ListItem key={index}>
                {index + 1} - {item.meaning}
              </ListItem>
            ))}
          </List>
        </Stack>
      </Stack>

      <Typography
        m="1rem"
        variant="h5"
        color={percentage > 50 ? 'green' : 'red'}
        textAlign="center"
      >
        {percentage > 50 ? 'Pass' : 'Fail'}
      </Typography>

      <Button variant="contained" fullWidth onClick={resetHandler}>
        Reset
      </Button>
    </Container>
  )
}

export default Result
