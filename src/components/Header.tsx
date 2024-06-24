// components/Header.tsx

import React from "react";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header>
      {/* Logo */}
      <div className="logo">
        <Image src="/logo.jpeg" alt="Logo" />
      </div>
      {/* Navigation Menu */}
      <nav className="navigation">
        {/* Navigation links */}
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          {/* Add more links as needed */}
        </ul>
      </nav>
      {/* Search Bar */}
      <div className="search">
        <input type="text" placeholder="Search products..." />
        <button>Search</button>
      </div>
      {/* Account/Login links */}
      <div className="account">
        <a href="#">Sign In</a> / <a href="#">Register</a>
      </div>
    </header>
  );
};

export default Header;
