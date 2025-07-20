import { useEffect } from 'react';
import Hero from '../components/Hero';
import './Home.css';

export default function Home() {
  useEffect(() => {
    const addParticles = () => {
      const container = document.querySelector('.home-page');
      if (!container) return;
      
      // Clear existing particles
      const existingParticles = document.querySelectorAll('.particle');
      existingParticles.forEach(particle => particle.remove());
      
      const particleCount = window.innerWidth < 768 ? 20 : 50;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        
        container.appendChild(particle);
      }
    };

    addParticles();
    window.addEventListener('resize', addParticles);
    
    return () => {
      window.removeEventListener('resize', addParticles);
    };
  }, []);

  return (
    <div className="home-page">
      <div className="hero-container">
        <Hero 
          title="HelloBooks.ai"
          subtitle="AI-Powered Bookkeeping for Small Businesses"
          ctaText="Get Started"
        />
      </div>

      <section className="finance-section">
        <h2>Automate Your Finances</h2>
        <p>AI-driven insights to save time and reduce errors.</p>
      </section>
    </div>
  );
}