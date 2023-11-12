import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import { lazy, Suspense } from 'react'
import Loader from './components/Loader'

const Home = lazy(() => import('./components/Home'))
const Learning = lazy(() => import('./components/Learning'))
const Quiz = lazy(() => import('./components/Quiz'))
const Result = lazy(() => import('./components/Result'))

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learning />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
