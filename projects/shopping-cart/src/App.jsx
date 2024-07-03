import { useContext, useState } from 'react'
import './App.css'
import { products as initialProducts } from './mockup/products.json'
import { Products } from './components/Products/Products'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { FiltersContext } from './context/filters'

function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products) => {
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

  return { filterProducts, setFilters }
}

function App () {
  const [products] = useState(initialProducts)
  const { filterProducts, setFilters } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      <Footer />
    </>
  )
}

export default App
