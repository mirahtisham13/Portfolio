import React from 'react';
import './Marquee.css';

const items = [
  'AI Orchestrator',
  'Web Developer',
  'Freelancer',
  'Problem Solver',
  'Rapid Builder',
  'Prompt Engineer',
];

const MarqueeStrip = () => {
  // Duplicate items to create seamless loop
  const repeated = [...items, ...items];

  return (
    <div className="marquee-section" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div className="marquee-content" key={copy}>
            {repeated.map((item, i) => (
              <div className="marquee-item" key={`${copy}-${i}`}>
                <span
                  className={`marquee-text ${
                    i % 2 === 0 ? 'marquee-text--solid' : 'marquee-text--outline'
                  }`}
                >
                  {item}
                </span>
                <span className="marquee-separator" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
