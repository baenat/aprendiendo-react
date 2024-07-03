import './Header.css'
import { Filters } from './../Filters/Filters'

export function Header () {
  return (
    <header className='header'>
      <h1>Shopping Cart<span className='logo'>🛒</span></h1>
      <Filters />
    </header>
  )
}
