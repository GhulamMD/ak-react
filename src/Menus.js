// src/Menus.js
import React from 'react';

import './style.css';



function Menus() {
  return (
    <div id="menus">
      <h2>Our Menus</h2>

      <section>
        <h3>Breads</h3>
        <ul>
          <li>Garlic Naan - $3.99</li>
          <li>Plain Naan - $2.99</li>
          <li>Roti - $1.99</li>
          {/* Add more bread items as needed */}
        </ul>
      </section>

      <section>
        <h3>Starters</h3>
        <ul>
          <li>Vegetable Spring Rolls - $4.99</li>
          <li>Chicken Wings - $6.99</li>
          <li>Paneer Tikka - $5.99</li>
          {/* Add more starter items as needed */}
        </ul>
      </section>

      <section>
        <h3>Main Course</h3>
        <ul>
          <li>Butter Chicken - $11.99</li>
          <li>Veg Biryani - $8.99</li>
          <li>Spinach and Cheese Pasta - $9.99</li>
          {/* Add more main course items as needed */}
        </ul>
      </section>
    </div>
  );
}

export default Menus;