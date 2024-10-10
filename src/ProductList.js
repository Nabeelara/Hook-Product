import React from 'react';
import products from './data';

const ProductList = ({ products, category }) => {
  const filterItems = category === 'All'
    ? products
    : products.filter(product => product.category === category);
    console.log(filterItems)

  return (
    <div className='section-center'>
      {filterItems.map((product) => {
        const { id, title, img, desc, price } = product;
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>{price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ProductList;
