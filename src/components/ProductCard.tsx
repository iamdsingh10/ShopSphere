import {Link} from 'react-router-dom';
import type {Product} from "../types/product";

interface ProductCardProps{
    product: Product;
}

function ProductCard({product}: ProductCardProps){
    return (
        <Link to={`/products/${product.id}`} className="product-card-link">
        <article>
            <img src={product.image} alt={product.title} />
            <div>
                <p>{product.category}</p>
                <h2>{product.title}</h2>
                <p>₹{product.price}</p>
            </div>
        </article>
        </Link>
    )
}

export default ProductCard;