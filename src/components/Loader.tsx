import { CircularProgress, Stack } from '@mui/material'

const Loader = () => {
  return (
    <Stack alignItems="center" justifyContent="center" m="1rem">
      <CircularProgress />
    </Stack>
  )
}

export default Loader
