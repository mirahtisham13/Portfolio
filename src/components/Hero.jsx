import React from 'react';
import { ArrowRight, FileText, ChevronDown } from 'lucide-react';
import useTypewriter from '../hooks/useTypewriter';
import { GitHubIcon, LinkedInIcon } from './icons/index.jsx';
import './Hero.css';

const stats = [
  { value: '4+', label: 'Projects Shipped' },
  { value: '2', label: 'Clients Deployed' },
  { value: '∞', label: 'Ideas in Queue' },
];

const Hero = () => {
  const typingText = useTypewriter([
    'Developer',
    'AI Orchestrator',
    'Builder',
  ]);

  return (
    <section id="home" className="hero-section">

      {/* ── Top Row: Intro left, nothing right (stats are positioned absolute) ── */}
      <div className="hero-top-row hero-animate">
        <div className="hero-intro">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Available for Freelance
          </div>
          <h2 className="hero-name">
            Hello! I'm Ahtisham Majeed Mir,<br />
            an AI Orchestrator &amp; Creative<br />
            Developer from Kashmir.
          </h2>
          <ul className="hero-role-list">
            <li>AI-Driven Development</li>
            <li>Rapid Prototyping</li>
            <li>Prompt Engineering</li>
            <li>Web Development</li>
          </ul>
        </div>
      </div>

      {/* ── Giant Title + floating person ── */}
      <div className="hero-title-section hero-animate delay-100">
        <h1 className="hero-giant-title">
          {typingText}<span className="cursor">|</span>
        </h1>

        {/* Person / Avatar — full cutout style */}
        <div className="hero-person-wrap">
          <img
            src="/avatar.webp"
            alt="Ahtisham Majeed Mir"
            className="hero-person-img"
            loading="eager"
          />
        </div>

        {/* Stat cards pinned right */}
        <div className="hero-stats-sidebar hero-animate delay-200">
          {stats.map((s) => (
            <div className="hero-stat-card" key={s.label}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom Bar: centered tagline + CTA ── */}
      <div className="hero-bottom-bar hero-animate delay-300">
        <p className="hero-tagline">
          AI Orchestration, Web Development &amp; Rapid Prototyping, Made Better.
        </p>

        <div className="hero-cta-row">
          <a href="#projects" className="btn btn-primary">
            View Projects <ArrowRight size={16} />
          </a>
          <a href="/Resume.pdf" download className="btn btn-outline">
            Download CV <FileText size={16} />
          </a>
          <div className="hero-socials">
            <a
              href="https://github.com/mirahtisham13"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <GitHubIcon size={17} />
            </a>
            <a
              href="https://linkedin.com/in/mirahtisham13"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={17} />
            </a>
          </div>
        </div>

        <a href="#about" className="hero-scroll-hint" aria-label="Scroll down">
          Scroll <ChevronDown size={15} />
        </a>
      </div>

    </section>
  );
};

export default Hero;
