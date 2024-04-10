import React from 'react';
import logo from "../Assets/logo.png"

const Hero = () => {
  return (
    <main>
        <nav>
            <img className="logo" src={logo} alt="logo" />              
            <div className="nav-buttons">
                <button>Login</button>
                <button>Start Writing</button>
            </div>
        </nav>
        <section className="hero-section">
            <div className="hero-header">
                <p>Every life is a story. Begin telling<span> yours with Otto.</span></p>
                <button className='primary-button'>Start writing</button>
            </div>
        </section>
    </main>
  )
}

export default Hero