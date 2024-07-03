import { useState } from 'react'
import './App.css'
import { Products } from './components/Products/Products'
import { products as initialProducts } from './mockup/products.json'
import { Header } from './components/Header/Header'

function App () {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({ category: 'all', price: 0 })

  const filterProducts = () => {
    return products.filter(product => {
      return (
        product.price >= filters.price &&
        (
          filters.category === 'all' ||
          filters.category === product.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return (

    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
    </>

  )
}

export default App
