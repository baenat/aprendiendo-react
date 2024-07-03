import { useState } from 'react'
import './Filters.css'
import { useFilters } from '../../hooks/useFilters'

export function Filters () {
  const { filters, setFilters } = useFilters()

  const handleMinPriceChange = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      price: event.target.value
    }))
  }

  const handleCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>

      <div>
        <label htmlFor='price'>Precio</label>
        <input type='range' id='price' min={0} max={2000} onChange={handleMinPriceChange} value={filters.price} />
        <span>${filters.price}</span>
      </div>

      <div>
        <label htmlFor='price'>Categoría</label>
        <select name='category' id='category' onChange={handleCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>Portátiles</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>

    </section>
  )
}
