import { useState } from 'react'
import './Filters.css'

export function Filters ({ onChange }) {
  const [minPrice, setMinPrice] = useState(0)

  const handleMinPriceChange = (event) => {
    setMinPrice(Number(event.target.value))
    onChange((prevState) => ({
      ...prevState,
      price: event.target.value
    }))
  }

  const handleCategory = (event) => {
    onChange((prevState) => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>

      <div>
        <label htmlFor='price'>Precio</label>
        <input type='range' id='price' min={0} max={2000} onChange={handleMinPriceChange} />
        <span>${minPrice}</span>
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
