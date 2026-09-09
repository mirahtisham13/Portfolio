import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GitHubIcon } from './icons/index.jsx';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Dr. Kaiser Clinic',
    description:
      'A professional clinic website with an admin dashboard. Built with modern HTML/CSS/JS and powered by a Supabase backend.',
    tags: ['HTML/CSS/JS', 'Supabase', 'Admin Dashboard'],
    image: '/kaiser.webp',
    github: 'https://github.com/mirahtisham13/kaiser-website',
    live: 'https://drkaiser.in',
  },
  {
    id: 2,
    title: 'Dr. Suhail Tantry Clinic',
    description:
      'A responsive web application for a dental clinic featuring beautiful UI, custom styling, and a complete administrative panel.',
    tags: ['Vanilla JS', 'Admin Panel', 'SEO Optimized'],
    image: '/suhail.webp',
    github: 'https://github.com/mirahtisham13/sk-dental-clinic',
    live: 'https://drsuhailtantry.in',
  },
  {
    id: 3,
    title: 'FileForge',
    description:
      'A powerful client-side file management tool and Progressive Web App (PWA) with service workers for offline capability.',
    tags: ['JavaScript', 'PWA', 'Web APIs'],
    image: '/fileforge.webp',
    github: 'https://github.com/mirahtisham13/FileForge',
    live: 'https://file-forge.dev',
  },
  {
    id: 4,
    title: 'Prompt Vault',
    description:
      'A robust Next.js application featuring an Admin Panel and Supabase integration to securely organize, version, and test AI prompts.',
    tags: ['Next.js', 'Admin Panel', 'Supabase'],
    image: '/prompt.webp',
    github: 'https://github.com/mirahtisham13/Prompt-Vault',
    live: 'https://prompt-vault-sepia-two.vercel.app/',
  },
];

const Projects = () => (
  <section id="projects" className="projects-section">
    {/* Watermark */}
    <span className="projects-watermark" aria-hidden="true">works</span>

    <div className="container">
      {/* Header */}
      <div className="projects-header animate-fade-in">
        <div>
          <span className="section-label">Portfolio</span>
          <h2 className="heading-lg" style={{ marginBottom: 0 }}>
            Featured Projects
          </h2>
        </div>
        <p className="text-muted" style={{ maxWidth: '320px' }}>
          Here are some of the recent projects I've shipped using AI collaboration.
        </p>
      </div>

      {/* 2-col grid */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-card animate-fade-in delay-${(index % 4 + 1) * 100}`}
          >
            {/* Image */}
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
                loading="lazy"
                width="600"
                height="338"
              />
              <div className="project-image-overlay">
                {project.github !== '#' && (
                  <a
                    href={project.github}
                    className="project-overlay-btn"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub Repository"
                  >
                    <GitHubIcon size={20} />
                  </a>
                )}
                {project.live !== '#' && (
                  <a
                    href={project.live}
                    className="project-overlay-btn"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            {/* Body */}
            <div className="project-body">
              <div className="project-top-row">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-links">
                  {project.github !== '#' && (
                    <a
                      href={project.github}
                      className="icon-link"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                    >
                      <GitHubIcon size={17} />
                    </a>
                  )}
                  {project.live !== '#' && (
                    <a
                      href={project.live}
                      className="icon-link"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live Demo"
                    >
                      <ArrowUpRight size={17} />
                    </a>
                  )}
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
