// pages/index.tsx
import React from "react";
import styles from "./styles/home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to Our E-Commerce Store</h1>
      <p>
        Browse through our collection of products and find the best deals
        online!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        ultricies eros id ligula hendrerit, in suscipit lectus maximus.
        Suspendisse potenti. Proin interdum quam vel urna tincidunt consequat.
      </p>
    </div>
  );
};

export default Home;
