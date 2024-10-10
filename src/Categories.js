import React from 'react';
import './index.css';

const Categories = ({filterItems}) => {
  const categories = ['All', 'Topi', 'Kaos', 'Jas', 'Piyama']
  console.log(categories)

  return (
    <div className="btn-container">
      {categories.map( (category, index) => {
        return (
          <button type="button"
          className="filter-btn"
          key={index}
          onClick={() => filterItems(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  );
};

export default Categories;
