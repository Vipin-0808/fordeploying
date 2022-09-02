import React from 'react';

import ProductItem from '../components/Products/ProductItem';
import { useStore } from '../store-hooks/store';
import './Products.css';

const Products = props => {
  // this [0] means, the first value of the calling mehtods return Array.
  const state = useStore()[0]; 
  return (
    <ul className="products-list">
      {state.products.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
