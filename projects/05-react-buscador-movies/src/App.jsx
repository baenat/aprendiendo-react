import { useState, useCallback } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function debounce (func, delay) {
  let timer
  return (...args) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func(...args)
    }, delay)
  }
}

function App () {
  const [sort, setSort] = useState(false)
  const { search, setSearch, errorField } = useSearch()
  const { movies, error, getMovies } = useMovies({ search, sort })

  const debouncedChangeHandler = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 300),
    [getMovies]
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    // getMovies({ search: newSearch })
    debouncedChangeHandler(newSearch)
  }

  return (

    <div className='page'>
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='search' type='text' placeholder='The Matrix, Barbie ...' />
          <button type='submit'>Buscar</button>
          <label className='container'>
            <input type='checkbox' onChange={() => setSort(!sort)} checked={sort} />Sort
            <span className='checkmark' />
          </label>
        </form>
        {errorField && <p style={{ color: 'red', textAlign: 'center' }}>{errorField || error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>

  )
}

export default App
