import React from 'react';
import ReactDOM from 'react-dom';
import { ProductProvider } from "./context/products";
import App from './App';
import './index.css';
import { CartProvider } from './context/cart';

ReactDOM.render(
  <ProductProvider>
    <CartProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartProvider>
  </ProductProvider>,
  document.getElementById('root')
);
