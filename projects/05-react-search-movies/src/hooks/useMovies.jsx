import { useCallback, useMemo, useRef, useState } from 'react'
import resultMovies from './../mockup/response-data.json'
import resultNoMovies from './../mockup/response-nodata.json'
import { searchMovies } from '../services/movies'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  // const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previusSearch = useRef(search)

  const getMovies = useCallback(
    async ({ search }) => {
      if (search === previusSearch.current) return

      if (search) {
        try {
          previusSearch.current = search
          const newMovies = await searchMovies({ search })
          setMovies(newMovies)
        } catch (error) {
          setError(error.message)
        }
      } else {
        setMovies(resultNoMovies)
      }
    }, []
  )

  const sortMovies = useMemo(() => {
    return sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
  }, [sort, movies])

  return { movies: sortMovies, error, getMovies }
}
