import React from 'react';

const ProductList = ({ products }) => {

  return (
    <div className='section-center'>
      {products.map((product) => {
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
