import { Filters } from './../Filters/Filters'

export function Header ({ changeFilters }) {
  return (
    <header>
      <h1>Shopping Cart<span className='logo'>🛒</span></h1>
      <Filters onChange={changeFilters} />
    </header>
  )
}
