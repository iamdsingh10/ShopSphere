import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

function Products() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="products-page">
      <div className="products-header">
        <div>
          <p className="products-label">Shop</p>

          <h1>All Products</h1>

          <p className="products-description">
            Discover products selected for your everyday life.
          </p>
        </div>

        <div>
          <input
            type="search"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <p className="products-count">
            {filteredProducts.length} products
          </p>
        </div>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  )
}

export default Products