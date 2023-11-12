import { ThemeProvider } from '@emotion/react'
import { CssBaseline, createTheme } from '@mui/material'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import { store } from './redux/store.ts'

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
)
