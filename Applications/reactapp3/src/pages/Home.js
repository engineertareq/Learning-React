import React from 'react';
import './css/HomePage.css';


function HomePage() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero">
        <h1>Welcome to My Website</h1>
        <p>Building interactive and engaging web experiences with React & jQuery</p>
        <button className="cta-btn">Get Started</button>
      </header>

      {/* Features Section */}
      <section className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Dynamic Styling</h3>
            <p>Experiment with hover effects, transitions, and jQuery-driven animations.</p>
          </div>
          <div className="feature-item">
            <h3>Interactive Content</h3>
            <p>Load external data with AJAX and display it seamlessly.</p>
          </div>
          <div className="feature-item">
            <h3>Responsive Design</h3>
            <p>Craft layouts that adapt beautifully across devices.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} engineertareq.com | All rights reserved</p>
      </footer>
    </div>
  );
}

export default HomePage;