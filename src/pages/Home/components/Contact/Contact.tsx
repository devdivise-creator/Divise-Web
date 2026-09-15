import React, { useState } from 'react';

import './Contact.css';

interface ContactProps {
  theme?: 'dark' | 'light';
}

const Contact: React.FC<ContactProps> = ({ theme = 'dark' }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ phone?: string; email?: string }>({});

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    org: '',
    message: '',
    _botcheck: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Disallow non-numeric characters in phone field (except during copy-paste which might get caught)
    if (name === 'phone' && value !== '' && !/^\d+$/.test(value)) {
      return;
    }
    
    // Limit phone to 10 digits
    if (name === 'phone' && value.length > 10) {
      return;
    }

    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newErrors = { ...errors };
    
    if (name === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) newErrors.email = 'Please enter a valid email address.';
    }
    
    if (name === 'phone' && value) {
      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneRegex.test(value)) newErrors.phone = 'Enter a valid 10-digit Indian mobile number.';
    }

    setErrors(newErrors);
  };

  const validate = () => {
    const newErrors: { phone?: string; email?: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) newErrors.email = 'Please enter a valid email address.';
    
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) newErrors.phone = 'Enter a valid 10-digit Indian mobile number.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData._botcheck) {
      setStatus('success');
      return;
    }
    if (!validate()) {
      setStatus('error');
      return;
    }
    
    setStatus('submitting');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', org: '', message: '', _botcheck: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      // Revert back to idle after a few seconds so they can try again
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className={`contact-section theme-${theme}`}>
      <div className="contact-left">
        <img src="/contact-bg.png" alt="Naval Compass" className="contact-bg-img" />
        <div className="contact-overlay"></div>
        <h3 className="contact-quote">
          Partner with Decades<br/>
          of Naval & Shipbuilding<br/>
          Leadership
        </h3>
      </div>
      
      <div className="contact-right">
        <h2 className="contact-title">Contact Us</h2>
        {status === 'success' ? (
          <div className="contact-success-card">
            <div className="success-icon">✓</div>
            <h3>Thank You!</h3>
            <p>Your message has been received.<br/>One of our team members will get back to you shortly.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Honeypot field */}
            <input 
              type="text" 
              name="_botcheck" 
              style={{ position: 'absolute', opacity: 0, top: -10000, left: -10000 }} 
              tabIndex={-1} 
              aria-hidden="true" 
              value={formData._botcheck}
              onChange={handleChange}
            />
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="John Doe" required value={formData.name} onChange={handleChange} />
              </div>
              <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="johndoe@gmail.com" required value={formData.email} onChange={handleChange} onBlur={handleBlur} />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>
            </div>
            <div className="form-row">
              <div className={`form-group phone-group ${errors.phone ? 'has-error' : ''}`}>
                <label htmlFor="phone">Phone No.</label>
                <div className="phone-input-wrapper">
                  <span className="phone-prefix">+91</span>
                  <input type="tel" id="phone" name="phone" placeholder="98765 43210" required value={formData.phone} onChange={handleChange} onBlur={handleBlur} />
                </div>
                {errors.phone && <span className="field-error">{errors.phone}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="org">Organization</label>
                <input type="text" id="org" name="org" placeholder="John Doe's LLC" value={formData.org} onChange={handleChange} />
              </div>
            </div>
            <div className="form-group message-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your Message..." required value={formData.message} onChange={handleChange}></textarea>
            </div>
            <div className="form-submit-wrapper">
              <button 
                type="submit" 
                className={`submit-btn ${status}`} 
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
