import React, { useState } from "react";
import ProductList from "./ProductList";
import Categories from "./Categories";
import products from "./data";

//Get exist categories
const existCategories = products.map(product => product.category);
//create set of unique category
const myset = new Set(existCategories);
//create array categories contains 'all' and exist categories
const allCategories = ['All', ...myset];

function App() {
  //create state for product items
  const [productItems, setProductItems] = useState(products);
  //create state for array categories
  const [categories, setCategories] = useState('All');

  const filterItems = (category) => {
    if (category === 'All') {
      setProductItems(products);
    } else {
      const filteredItems = products.filter(product => product.category === category)
      setProductItems(filteredItems);
    }
    setCategories(category)
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Products</h2>
          <div className="underline"></div>
        </div>
        {/* fill with state name*/}
        <Categories categories={allCategories} filterItems={filterItems} />
      </section>
      {/* fill with state name*/}
      <ProductList products={productItems} category={categories} />
    </main>
  );
}

export default App;
