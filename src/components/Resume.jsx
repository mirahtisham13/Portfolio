import React from 'react';
import { Download } from 'lucide-react';
import './Resume.css';

const services = [
  {
    num: '01',
    title: 'AI-Driven Development',
    desc: 'Leveraging cutting-edge AI agents and LLMs to rapidly architect, build, and deploy full-stack applications.',
    tags: ['ChatGPT', 'Gemini', 'Claude', 'Antigravity'],
  },
  {
    num: '02',
    title: 'Prompt Engineering',
    desc: 'Crafting precise, context-rich prompts to direct AI models in generating robust logic and beautiful UIs.',
    tags: ['System Prompts', 'Chain of Thought', 'LLM Tuning'],
  },
  {
    num: '03',
    title: 'Rapid Prototyping',
    desc: 'Transforming ideas into functional digital products at lightning speed through AI collaboration.',
    tags: ['React', 'Next.js', 'Vite'],
  },
  {
    num: '04',
    title: 'System Orchestration',
    desc: 'Guiding AI systems to seamlessly integrate databases, APIs, and modern frontend frameworks.',
    tags: ['Supabase', 'Vercel', 'Web APIs'],
  },
];

const skillCategories = [
  { label: 'AI Tools & Dev', skills: ['ChatGPT', 'Gemini', 'Claude', 'Antigravity'] },
  { label: 'Data & Programming', skills: ['Python', 'Data Analysis', 'Google Sheets'] },
  { label: 'Web & Deployment', skills: ['HTML/CSS/JS', 'React', 'Next.js', 'Supabase', 'Vercel'] },
  { label: 'Design & Multimedia', skills: ['Canva', 'CapCut', 'Mobile Photography'] },
  { label: 'Productivity', skills: ['Excel', 'Google Docs', 'Zoom', 'Teams'] },
  { label: 'Languages', skills: ['English', 'Urdu', 'Kashmiri', 'Hindi'] },
];

const timeline = [
  {
    title: 'Bachelor of Arts in Economics',
    sub: 'Govt. Degree College Kupwara | Expected Aug 2026',
    desc: 'Focusing on core economic principles and data analysis while combining analytical coursework with creative problem-solving.',
  },
  {
    title: 'Freelance Web Developer',
    sub: 'Self-Employed | 2024 – Present',
    desc: 'Built and deployed professional clinic websites with admin dashboards for real clients, handling full-cycle development and domain management.',
  },
  {
    title: 'Certifications & Learning',
    sub: 'DataCamp & Educative',
    desc: '• Data Analysis (In Progress) – DataCamp\n• Learn Python 3 – Educative',
  },
];

const Resume = () => (
  <>
    {/* ── Dark section: Services/Skills ── */}
    <section id="resume" className="resume-section">
      <div className="container">
        <div className="resume-header animate-fade-in">
          <h2 className="heading-lg">
            What I <span>Do</span>
          </h2>
          <a
            href="/Resume.pdf"
            download="Ahtisham_Resume.pdf"
            className="btn btn-primary"
            aria-label="Download PDF Resume"
          >
            Download CV <Download size={18} />
          </a>
        </div>

        {/* Numbered service rows */}
        <ul className="services-list">
          {services.map((svc, i) => (
            <li
              key={svc.num}
              className={`service-row animate-fade-in delay-${(i % 4 + 1) * 100}`}
            >
              <div className="service-row-left">
                <span className="service-row-num">{svc.num}</span>
                <div className="service-row-info">
                  <h3 className="service-row-title">{svc.title}</h3>
                  <p className="service-row-desc">{svc.desc}</p>
                </div>
              </div>
              <div className="service-row-tags">
                {svc.tags.map((t) => (
                  <span key={t} className="service-row-tag">{t}</span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* ── White section: Timeline + Skills ── */}
    <section className="skills-section">
      <div className="container">
        <div className="skills-header animate-fade-in">
          <div>
            <span className="section-label">Background</span>
            <h2 className="heading-lg" style={{ marginBottom: 0 }}>Education &amp; Skills</h2>
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline animate-fade-in delay-100">
          {timeline.map((item) => (
            <div className="timeline-card" key={item.title}>
              <div className="timeline-dot" />
              <h4>{item.title}</h4>
              <p className="text-accent">{item.sub}</p>
              <p style={{ whiteSpace: 'pre-line' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Skills grid */}
        <div className="skills-grid animate-fade-in delay-200">
          {skillCategories.map((cat) => (
            <div className="skill-category-card" key={cat.label}>
              <div className="skill-cat-label">{cat.label}</div>
              <div className="skill-pills">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Resume;
