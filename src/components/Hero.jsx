import React from 'react'
import '../style/Hero.css'

function Hero() {
  return (
    <div>
      <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">The Recipe Passport</h1>
        <p className="hero-tagline">Discover the world's flavors, one recipe at a time.</p>
        <div className="globe-animation"></div>
        <button className="cta-button">Start Your Journey</button>
      </div>
    </div>
    </div>
  )
}

export default Hero
