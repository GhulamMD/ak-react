// src/App.js
import React, { useState } from 'react';
import Navbar from './navbar';
import Home from './Home';
import ContactUs from './ContactUs';
import Menus from './Menus';
import AboutUs from './AboutUs';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';


function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleLoginForm = () => {
    setShowLogin(!showLogin);
    setShowSignUp(false); // Hide sign up form when showing login form
  };

  const toggleSignUpForm = () => {
    setShowSignUp(!showSignUp);
    setShowLogin(false); // Hide login form when showing sign up form
  };

  return (
    <div>
      <Navbar onLoginClick={toggleLoginForm} onSignUpClick={toggleSignUpForm} />
      <Home />
      <ContactUs />
      <Menus />
      <AboutUs />

      {showLogin && <LoginForm />}
      {showSignUp && <SignUpForm />}
    </div>
  );
}

export default App;