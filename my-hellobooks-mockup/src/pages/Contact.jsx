import './Contact.css'; // Import the CSS file
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">Get in touch with our team</p>
      </div>
      
      {submitSuccess ? (
        <div className="success-message">
          <div className="success-icon">✓</div>
          <h3>Message Sent!</h3>
          <p>We'll get back to you within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="form-input"
            />
            <span className="input-border"></span>
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="form-input"
            />
            <span className="input-border"></span>
          </div>
          
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="form-textarea"
              rows="5"
            ></textarea>
            <span className="input-border"></span>
          </div>
          
          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner"></span>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      )}
    </div>
  );
}