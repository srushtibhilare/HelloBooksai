import './About.css'; // Import the CSS file

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-description">
        HelloBooks.ai is powered by Meru Technosoft, revolutionizing bookkeeping with AI.
      </p>
      <div className="about-features">
        <div className="feature-card">
          <div className="feature-icon">🧠</div>
          <h3>AI-Powered</h3>
          <p>Advanced machine learning for accurate financial insights</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Lightning Fast</h3>
          <p>Process transactions and generate reports in seconds</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🔒</div>
          <h3>Bank-Grade Security</h3>
          <p>Your financial data is always protected</p>
        </div>
      </div>
    </div>
  );
}