import { Button, Container, Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearState } from '../redux/slices'

const languages: Language[] = [
  { name: 'Hindi', code: 'hi' },
  { name: 'French', code: 'fr' },
  { name: 'Spanish', code: 'es' },
  { name: 'Japanese', code: 'ja' },
]

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const selectLanguageHandler = (languageCode: string): void => {
    navigate(`/learn?code=${languageCode}`)
  }

  useEffect(() => {
    dispatch(clearState())
  }, [])

  return (
    <Container>
      <Typography variant="h4" textAlign="center" p="2rem">
        Welcome, Begin your journey of learning new Languages.
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing="1rem"
      >
        {languages.map((i) => {
          return (
            <Button
              key={i.code}
              variant="contained"
              sx={{ textTransform: 'capitalize' }}
              onClick={() => selectLanguageHandler(i.code)}
            >
              {i.name}
            </Button>
          )
        })}
      </Stack>

      <Typography textAlign="center" p="2rem">
        Choose any one language.
      </Typography>
    </Container>
  )
}

export default Home
