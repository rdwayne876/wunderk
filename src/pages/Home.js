import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

import { ProductContext } from "../context/products";

const Home = () => {
    const { featured } = useContext(ProductContext);
    if (!featured.length) {
        return <h3>No Featured Products</h3>
    }
    return (
        <>
            <Hero />
            <section className="featured">
                <header className="featured-head">
                    <h3>Featured Collection</h3>
                </header>
                <div className="products featured-list">
                    {featured.map(({ id, image, name }) => (
                        <article key={id} className="product featured-product">
                            <div className="product-image">
                                <img src={image} alt={name} />
                            </div>
                            <Link to={`products/${id}`} className="btn product-link">View</Link>
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Home;