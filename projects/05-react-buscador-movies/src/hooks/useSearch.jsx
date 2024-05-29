import { useRef, useEffect, useState } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = search === ''
      return
    }

    if (search === '') {
      setError('Please enter a search')
      return
    }
    if (search.match(/^\d+$/)) {
      setError('Please enter a string search')
      return
    }

    if (search.length < 3) {
      setError('Please enter a minimum of three search characters')
      return
    }

    return () => {
      setError(null)
    }
  }, [search])

  return { search, setSearch, errorField: error }
}
