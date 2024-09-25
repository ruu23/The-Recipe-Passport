import React from 'react'
import '../style/Footer.css'

function Footer() {
  return (
    <div>
       <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 The Recipe Passport. All rights reserved.</p>
        <div className="social-media">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
