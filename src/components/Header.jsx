import React from 'react'
import '../style/Header.css'

function Header() {
  return (
    <div>
      <header className="header">
      <nav className="navbar">
        <div className="logo">Recipe Passport</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/recipe">Recipes</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    </div>
  )
}

export default Header
