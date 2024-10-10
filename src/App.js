import React, { useState } from "react";
import ProductList from "./ProductList";
import Categories from "./Categories";
import products from "./data";

//Get exist categories
const existCategories = [];
//create set of unique category
const myset = [];
//create array categories contains 'all' and exist categories
const allCategories = [];

function App() {
  //create state for product items
  const [productItems, setProductItems] = useState(products);
  //create state for array categories
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    //WRITE YOUR CODE
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Products</h2>
          <div className="underline"></div>
        </div>
        {/* fill with state name*/}
        <Categories categories={[]} filterItems={filterItems} />
      </section>
      {/* fill with state name*/}
      <ProductList products={[{}]} />
    </main>
  );
}

export default App;
