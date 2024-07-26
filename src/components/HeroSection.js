// HeroSection.js
import React from 'react';

const HeroSection = () => (
  <section style={styles.hero}>
    <div style={styles.textOverlay}>
      <h2>Discover Your Inner Peace</h2>
      <p>Join us for a series of wellness retreats designed to help you find tranquility and rejuvenation.</p>
    </div>
  </section>
);

const styles = {
  hero: {
    position: 'relative',
    height: '400px',
    backgroundImage: 'url(https://example.com/your-image.jpg)', // Replace with your image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  textOverlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textAlign: 'center',
  },
};

export default HeroSection;
