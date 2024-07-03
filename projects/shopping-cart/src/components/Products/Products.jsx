import './Products.css'
import { AddToCartIcon } from '../Icons/Icons'

export function Products ({ products }) {
  return (
    <main className='products'>
      <ul>
        {
          products.map((product) => {
            return (
              <li key={product.id} className='product'>
                <img src={product.thumbnail} alt={product.title} />
                <div>
                  <p><strong>{product.title}</strong> - ${product.price}</p>
                  <small>{product.category}</small>
                </div>
                <div>
                  <button aria-label='Add product'>
                    <AddToCartIcon />
                  </button>
                </div>

              </li>
            )
          })
        }
      </ul>
    </main>
  )
}
