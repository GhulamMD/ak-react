// src/ContactUs.js
import React from 'react';

import './style.css';

const ContactUs = () => {
    return (
      <div id="contact">
        <h2>Contact Us</h2>
  
        <div className="contact-info">
          <p>For inquiries, feel free to reach out to us:</p>
  
          <ul>
            <li>Mobile: 9150505050</li>
            <li>Email: <a href="mailto:support@akr.com">support@akr.com</a></li>
            <li>Address: 6th Plot, Ben Collins Street, Nevada 7008</li>
          </ul>
        </div>
  
        {/* Add a contact form or additional content as needed */}
      </div>
    );
  }
  

export default ContactUs;
