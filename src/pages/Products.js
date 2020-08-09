import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { ProductContext } from '../context/products';


const Products = () => {
    const { products } = useContext(ProductContext);

    if (!products.length) {
        return <h3>No Products Available</h3>
    }

    return (
        <section className="products">
            {products.map(({ image: image, id, name }) => (
                <article key={id} className="product">
                    <div className="product-image">
                        <img src={image} alt={name} />
                    </div>
                    <Link to={`products/${id}`} className="btn product-link">details</Link>
                </article>
            ))}
        </section>
    )
}

export default Products
