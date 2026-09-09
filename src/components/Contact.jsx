import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState({ submitting: false, success: false, error: false });

  useEffect(() => {
    if (!formState.success && !formState.error) return;
    const timer = setTimeout(() => {
      setFormState((prev) => ({ ...prev, success: false, error: false }));
    }, 5000);
    return () => clearTimeout(timer);
  }, [formState.success, formState.error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ submitting: true, success: false, error: false });
    const formData = new FormData(e.target);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setFormState({ submitting: false, success: true, error: false });
        e.target.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      setFormState({ submitting: false, success: false, error: true });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Header */}
        <div className="contact-header animate-fade-in">
          <span className="section-label">Contact</span>
          <h2 className="heading-lg">Get In Touch</h2>
          <p>Have a project in mind? Let's work together to create something amazing.</p>
        </div>

        <div className="contact-layout">
          {/* Info column */}
          <div className="contact-info-col animate-fade-in delay-100">
            <a href="mailto:mirahtisham13@gmail.com" className="contact-info-card">
              <div className="contact-info-icon">
                <Mail size={20} aria-hidden="true" />
              </div>
              <div>
                <div className="contact-info-title">Email</div>
                <div className="contact-info-value">mirahtisham13@gmail.com</div>
              </div>
            </a>
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <MapPin size={20} aria-hidden="true" />
              </div>
              <div>
                <div className="contact-info-title">Location</div>
                <div className="contact-info-value">Kupwara, J&K (Remote)</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            className="contact-form-card animate-fade-in delay-200"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_KEY} />

            {formState.success && (
              <div className="form-feedback form-feedback--success" role="alert">
                <CheckCircle size={18} />
                <span>Message sent! I'll get back to you soon.</span>
              </div>
            )}
            {formState.error && (
              <div className="form-feedback form-feedback--error" role="alert">
                <AlertCircle size={18} />
                <span>Something went wrong. Please try again or email me directly.</span>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="contact-name">Name</label>
              <input type="text" id="contact-name" name="name" placeholder="John Doe" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Email</label>
              <input type="email" id="contact-email" name="email" placeholder="john@example.com" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows="5" placeholder="Tell me about your project..." className="form-control" required />
            </div>

            <button
              type="submit"
              className="btn btn-primary contact-submit-btn"
              disabled={formState.submitting}
              aria-label="Send Message"
            >
              {formState.submitting ? (
                <><Loader size={18} className="spin-icon" /> Sending…</>
              ) : (
                <><Send size={18} /> Send Message</>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
