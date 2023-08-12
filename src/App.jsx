import { useState } from 'react'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from './pages/Home'
import SearchPage from './pages/Search'

function App() {
  const [keyword, setKeyword] = useState()
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    if (keyword.length > 0) {
      navigate(`/search/${keyword}`)
      
    }
  }

  return (
    <>
      <main>

        <header>
          <form onSubmit={handleSubmit}>
            <input onChange={(e) => setKeyword(e.target.value)} type="text" placeholder='Escribe un Gif' />
            <button>Buscar</button>
          </form>
        </header>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/search/:keyword' element={<SearchPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
