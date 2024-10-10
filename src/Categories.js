import React from 'react';
import './Categories.css';

const Categories = ({filterItems}) => {
  const categories = ['All', 'Topi', 'Kaos', 'Jas', 'Piyama']

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
