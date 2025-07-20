import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>HelloBooks.ai</Link>
      
      <button 
        className={styles.menuButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>
      
      <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
        <Link 
          to="/about" 
          className={styles.link}
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
        <Link 
          to="/services" 
          className={styles.link}
          onClick={() => setIsMenuOpen(false)}
        >
          Services
        </Link>
        <Link 
          to="/contact" 
          className={styles.link}
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}