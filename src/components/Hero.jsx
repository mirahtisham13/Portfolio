import React from 'react';
import { ArrowRight, FileText, ChevronDown } from 'lucide-react';
import useTypewriter from '../hooks/useTypewriter';
import { GitHubIcon, LinkedInIcon } from './icons/index.jsx';
import './Hero.css';

const stats = [
  { value: '4+', label: 'Projects Shipped' },
  { value: '2', label: 'Deployed Clients' },
  { value: '∞', label: 'Ideas in Queue' },
];

const Hero = () => {
  const typingText = useTypewriter([
    'AI Orchestrator',
    'Web Developer',
    'Problem Solver',
  ]);

  return (
    <section id="home" className="hero-section">

      {/* ── Top Row ── */}
      <div className="hero-top-row hero-animate">
        {/* Left: Intro */}
        <div className="hero-intro">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Available for Freelance
          </div>
          <h2 className="hero-name">
            Hello! I'm Ahtisham Majeed Mir,<br />
            an <span style={{ color: 'var(--accent-primary)' }}>AI Orchestrator</span>{' '}
            &amp; Creative Developer from Kashmir.
          </h2>
          <ul className="hero-role-list">
            <li>AI-Driven Development</li>
            <li>Rapid Prototyping</li>
            <li>Prompt Engineering</li>
            <li>System Orchestration</li>
          </ul>
        </div>

        {/* Right: Stats */}
        <div className="hero-stats hero-animate delay-200">
          {stats.map((s) => (
            <div className="hero-stat-card" key={s.label}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Giant Title ── */}
      <div className="hero-title-section hero-animate delay-100">
        <h1 className="hero-giant-title">
          <span>{typingText}</span>
          <span className="cursor">|</span>
        </h1>
        {/* Floating Avatar */}
        <div className="hero-avatar-float">
          <img
            src="/avatar.webp"
            alt="Ahtisham Majeed Mir"
            loading="eager"
          />
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="hero-bottom-bar hero-animate delay-300">
        <p className="hero-description">
          A passionate Creator &amp; AI Orchestrator specializing in rapidly building
          exceptional digital experiences by leveraging advanced AI collaboration.
        </p>

        <div className="hero-cta-row">
          <a href="#projects" className="btn btn-primary">
            View My Work <ArrowRight size={17} />
          </a>
          <a href="/Resume.pdf" download className="btn btn-outline">
            Download CV <FileText size={17} />
          </a>

          <div className="hero-socials">
            <a
              href="https://github.com/mirahtisham13"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <GitHubIcon size={18} />
            </a>
            <a
              href="https://linkedin.com/in/mirahtisham13"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={18} />
            </a>
          </div>
        </div>

        <a href="#about" className="hero-scroll-hint" aria-label="Scroll down">
          Scroll <ChevronDown size={16} />
        </a>
      </div>

    </section>
  );
};

export default Hero;
