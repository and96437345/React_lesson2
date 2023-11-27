import React from 'react';
import ProductCard from './ProductCard';

const Catalog = () => {
  const productsList = [
    {
      id: 1,
      name: "Prod1",
      image: " ",
      price: "19.99",
    },
    {
      id: 2,
      name: "Prod2",
      image: " ",
      price: "19.99",
    },
  ]

    return (
      
      <div className="catalog">
      <div className="catalog__row">
        {productsList.map(product => {
          <ProductCard key={product.id} product={product}/>
        })}
      </div>
    </div>
    );
}

export default Catalog;