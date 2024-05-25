import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

// Consumo del primer endpoint al cargar la pagina.
export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
