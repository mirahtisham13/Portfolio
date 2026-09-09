import React from 'react';
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons/index.jsx';
import './Footer.css';

const NAV_LINKS = ['about', 'resume', 'projects', 'contact'];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        {/* Top row */}
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-logo">Ahtisham</span>
            <span className="footer-tagline">AI Orchestrator & Creative Developer</span>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="footer-links">
              {NAV_LINKS.map((id) => (
                <li key={id}>
                  <a href={`#${id}`} className="footer-link">
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-socials">
            <a
              href="https://github.com/mirahtisham13"
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
              aria-label="GitHub Profile"
            >
              <GitHubIcon size={18} />
            </a>
            <a
              href="https://linkedin.com/in/mirahtisham13"
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon size={18} />
            </a>
            <a
              href="mailto:mirahtisham13@gmail.com"
              className="footer-social-link"
              aria-label="Send Email"
            >
              <MailIcon size={18} />
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} <span>Ahtisham Majeed Mir</span>. All rights reserved.
          </p>
          <p className="footer-made-with">Built with AI ⚡ & React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
