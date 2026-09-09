import React from 'react';
import { ArrowRight } from 'lucide-react';
import './About.css';

const stats = [
  { value: '4+', label: 'Projects Shipped' },
  { value: '2', label: 'Clients Deployed' },
  { value: '1', label: 'PWA Built' },
  { value: '∞', label: 'Ideas in Queue' },
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">

        {/* ── Big centered quote ── */}
        <div className="about-quote-wrap animate-fade-in">
          <p className="about-quote">
            I am dedicated to bringing your vision to life by crafting
            unique, highly impactful digital experiences using{' '}
            <em>advanced AI collaboration</em> — my work speaks louder than words.
          </p>
        </div>

        {/* ── Two-column grid ── */}
        <div className="about-grid">
          {/* Left: Avatar image */}
          <div className="about-image-wrap animate-fade-in delay-100">
            <img
              src="/avatar.webp"
              alt="Ahtisham Majeed Mir"
              className="about-image"
              loading="lazy"
            />
            <div className="about-badge">
              <span className="about-badge-number">4+</span>
              <span className="about-badge-label">Projects Shipped</span>
            </div>
          </div>

          {/* Right: Text */}
          <div className="about-text-col animate-fade-in delay-200">
            <div>
              <span className="section-label">About Me</span>
              <h2 className="heading-lg">
                Economics Student &amp; AI Creator
              </h2>
            </div>
            <p>
              I am an Economics undergraduate and a forward-thinking digital creator
              who builds powerful applications by partnering with advanced Artificial
              Intelligence. Instead of writing every line of code by hand, I act as an
              AI Orchestrator — directing intelligent agents to build complex systems,
              from intuitive clinic dashboards to powerful file management tools.
            </p>
            <p>
              I combine my analytical coursework in Economics and Data Analysis with
              rapid technical execution, allowing me to focus on the big picture, solve
              real-world problems, and deliver exceptional value to clients at
              unprecedented speeds.
            </p>
            <div className="about-cta-row">
              <a href="#projects" className="btn btn-primary">
                View Projects <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Hire Me
              </a>
            </div>
          </div>
        </div>

        {/* ── Stats row ── */}
        <div className="about-stats-row animate-fade-in delay-300">
          {stats.map((s) => (
            <div className="about-stat-item" key={s.label}>
              <span className="about-stat-value">{s.value}</span>
              <span className="about-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
