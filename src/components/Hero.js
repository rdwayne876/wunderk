import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <h2>Wunder Krafts</h2>
            <h3>Put some <br />text here</h3>
            <Link className="btn" to="/products">View All Products</Link>
        </section>
    )
}

export default Hero
