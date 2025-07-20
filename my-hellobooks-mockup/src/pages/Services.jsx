import './Services.css'; // Import the CSS file

export default function Services() {
  return (
    <div className="services-container">
      <div className="services-header">
        <h1 className="services-title">Our Services</h1>
        <p className="services-subtitle">AI-powered solutions for modern finance</p>
      </div>
      
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">🤖</div>
          <h3>Automated Expense Tracking</h3>
          <p>AI categorizes and tracks expenses in real-time with 99% accuracy</p>
          <div className="service-cta">Learn more →</div>
        </div>
        
        <div className="service-card">
          <div className="service-icon">📊</div>
          <h3>Real-Time Financial Reports</h3>
          <p>Generate comprehensive reports with a single click, updated live</p>
          <div className="service-cta">Learn more →</div>
        </div>
        
        <div className="service-card">
          <div className="service-icon">🧾</div>
          <h3>Tax Compliance Automation</h3>
          <p>Never miss a deadline with automated tax calculations and filings</p>
          <div className="service-cta">Learn more →</div>
        </div>
      </div>
    </div>
  );
}