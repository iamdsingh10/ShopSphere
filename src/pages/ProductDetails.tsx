import {useParams} from "react-router-dom";
import {products} from "../data/products";

function ProductDetails(){
    const {id} = useParams();
    const product = products.find(
        (product)=> product.id === Number(id)
    )

    if(!product){
        return (
            <section>
                <h1>Product Not Found</h1>
                <p>The product you are looking for does not exist.</p>
            </section>
        )
    }
    return (
        <section className="product-details">
      <div className="product-details-image">
        <img
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="product-details-info">
        <p className="product-details-category">
          {product.category}
        </p>

        <h1>{product.title}</h1>

        <p className="product-details-price">
          ₹{product.price}
        </p>

        <p className="product-details-description">
          A great product for everyday use.
        </p>

        <button type="button">
          Add to Cart
        </button>
      </div>
    </section>
    )
}

export default ProductDetails;