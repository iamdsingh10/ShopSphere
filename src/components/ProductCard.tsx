import type {Product} from "../types/Product";

interface ProductCardProps{
    product: Product;
}

function ProductCard({product}: ProductCardProps){
    return (
        <article>
            <img src={product.image} alt={product.title} />
            <div>
                <p>{product.category}</p>
                <h2>{product.title}</h2>
                <p>₹{product.price}</p>
            </div>
        </article>
    )
}

export default ProductCard;