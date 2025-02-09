import { useState } from "react";
import Hero from "../components/Hero";
import Category from "../components/Category";
import ProductList from "../components/ProductList";
import { room_list } from "../assets/images/assets";

function Home() {
  const [selectedCategory, setCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setCategory(category);
  };

  return (
    <div>
      <Hero />
      <Category
        onCategoryClick={handleCategoryClick}
        setCategory={setCategory}
        selectedCategory={selectedCategory}
      />
      <ProductList products={room_list} selectedCategory={selectedCategory} />
    </div>
  );
}

export default Home;
