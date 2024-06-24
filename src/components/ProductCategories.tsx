// components/ProductCategories.tsx
import Image from "next/image";

import React from "react";

const ProductCategories: React.FC = () => {
  return (
    <section className="product-categories">
      <h2>Product Categories</h2>
      <div className="categories-grid">
        {/* Display categories */}
        <div className="category">
          <h3>Category 1</h3>
          <Image src="/logo.jpeg" alt="Category 1" />
        </div>
        <div className="category">
          <h3>Category 2</h3>
          <Image src="/logo.jpeg" alt="Category 2" />
        </div>
        {/* Add more categories as needed */}
      </div>
    </section>
  );
};

export default ProductCategories;
