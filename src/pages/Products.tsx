import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All')

   const categories = ['All', 'Electronics', 'Accessories', 'Footwear']

  const filteredProducts = products.filter((product) => {
  const matchesSearch = product.title
    .toLowerCase()
    .includes(searchTerm.toLowerCase())

  const matchesCategory =
    selectedCategory === 'All' ||
    product.category === selectedCategory
  return matchesSearch && matchesCategory
})

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

           <div className="category-filters">
    {categories.map((category) => (
      <button
        key={category}
        type="button"
        onClick={() => setSelectedCategory(category)}
      >
        {category}
      </button>
    ))}
  </div>


          <p className="products-count">
            {filteredProducts.length} products
          </p>
        </div>
      </div>


{filteredProducts.length > 0 ? (
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
  ) : (<div className="products-empty">
    <h2>No products found</h2>

    <p>
      We couldn't find any products matching "{searchTerm}".
    </p>
  </div>)}
    </section>
  )
}

export default Products