import { createContext, useState } from 'react'

// 1. Crear el Contexto
// Este es el que tenemos que consumir
export const FiltersContext = createContext()

// 2. Crear Provider para proveer el Contexto
// Este es el que nos provee el acceso al contexto
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({ category: 'all', price: 500 })

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  )
}
