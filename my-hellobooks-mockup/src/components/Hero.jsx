export default function Hero() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '4rem 2rem',
      backgroundColor: '#E0E7FF',
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>HelloBooks.ai</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        AI-Powered Bookkeeping for Small Businesses
      </p>
      <button style={{
        padding: '0.8rem 2rem',
        backgroundColor: '#4F46E5',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}>
        Get Started
      </button>
    </div>
  );
}