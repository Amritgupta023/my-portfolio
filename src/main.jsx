import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Blocks,
  BriefcaseBusiness,
  Code2,
  Database,
  GitBranch,
  Mail,
  MapPin,
  Menu,
  Network,
  Palette,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  X,
  Zap,
} from 'lucide-react';
import './styles.css';

const profile = {
  name: 'Amrit Gupta',
  role: 'Senior Software Developer',
  location: 'India',
  email: 'amritgupta023@gmail.com',
  github: 'https://github.com/Amritgupta023',
  linkedin: '#',
  intro:
    'I build fast, maintainable React interfaces with clean component architecture, thoughtful UX, and practical Node.js foundations.',
  experience: '7+',
  availability: 'Open to frontend and full-stack React opportunities',
};

const navItems = ['Work', 'Skills', 'Projects', 'Contact'];

const highlights = [
  { label: 'Years Experience', value: '7+' },
  { label: 'Frontend Focus', value: 'React.js' },
  { label: 'Delivery Style', value: 'Clean UI' },
];

const capabilities = [
  {
    icon: Code2,
    title: 'React Engineering',
    text: 'Reusable components, hooks, state flow, routing, forms, and high-quality UI implementation.',
  },
  {
    icon: Palette,
    title: 'Frontend UX',
    text: 'Responsive layouts, design systems, accessibility basics, and polished interaction details.',
  },
  {
    icon: Server,
    title: 'Node.js Basics',
    text: 'Comfortable with APIs, Express fundamentals, integrations, and frontend-to-backend workflows.',
  },
  {
    icon: ShieldCheck,
    title: 'Production Mindset',
    text: 'Readable code, maintainable patterns, performance checks, and pragmatic debugging.',
  },
];

const skills = [
  'React.js',
  'JavaScript',
  'TypeScript',
  'HTML5',
  'CSS3',
  'Redux Toolkit',
  'React Router',
  'Tailwind CSS',
  'Material UI',
  'REST APIs',
  'Node.js',
  'Git',
  'Vite',
  'Jest',
  'Responsive Design',
  'Accessibility',
];

const projects = [
  {
    name: 'Insight CRM Dashboard',
    type: 'SaaS UI',
    description:
      'A responsive CRM dashboard concept with lead tracking, analytics widgets, filters, and reusable data views.',
    tech: ['React', 'Redux Toolkit', 'Charts'],
  },
  {
    name: 'Commerce Admin Suite',
    type: 'Operations Tool',
    description:
      'A modern admin experience for catalog, order, and customer workflows with fast search and editable tables.',
    tech: ['React', 'Material UI', 'REST API'],
  },
  {
    name: 'Portfolio CMS',
    type: 'Content Platform',
    description:
      'A lightweight portfolio manager for updating profile sections, project cards, and contact content from one place.',
    tech: ['React', 'Node.js', 'Express'],
  },
  {
    name: 'Team Sprint Board',
    type: 'Productivity App',
    description:
      'A kanban-style sprint board with drag-ready task lanes, status summaries, and focused project progress views.',
    tech: ['React', 'TypeScript', 'Vite'],
  },
  {
    name: 'Fintech Landing App',
    type: 'Marketing UI',
    description:
      'A conversion-focused financial product interface with strong visual hierarchy and mobile-first sections.',
    tech: ['React', 'CSS Modules', 'Forms'],
  },
];

const timeline = [
  {
    year: '2022 - Present',
    title: 'Senior Software Developer',
    text: 'Leading React UI development, building scalable component systems, and shipping frontend features across business-critical products.',
  },
  {
    year: '2019 - 2022',
    title: 'Frontend Developer',
    text: 'Delivered responsive interfaces, connected APIs, optimized page experiences, and collaborated closely with product teams.',
  },
  {
    year: '2017 - 2019',
    title: 'Software Developer',
    text: 'Built a strong foundation in JavaScript, web standards, debugging, and practical application development.',
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <main className="page-shell">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <section className="section" id="work">
        <div className="section-heading">
          <span className="eyebrow">What I Do</span>
          <h2>Frontend delivery with senior-level ownership.</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <article className="capability-card" key={item.title}>
              <item.icon aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section" id="skills">
        <div className="section-heading compact">
          <span className="eyebrow">Skills</span>
          <h2>Practical frontend stack for modern product teams.</h2>
          <p>
            These are starter skills for now, structured so you can replace or expand them easily.
          </p>
        </div>
        <div className="skill-cloud">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <span className="eyebrow">Selected Projects</span>
          <h2>Placeholder work samples ready for your real details.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.name}>
              <div className="project-topline">
                <span>0{index + 1}</span>
                <a href={profile.github} aria-label={`${project.name} repository`}>
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
              <p className="project-type">{project.type}</p>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section timeline-section">
        <div className="section-heading compact">
          <span className="eyebrow">Experience</span>
          <h2>Seven-plus years building useful software.</h2>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <article className="timeline-item" key={item.year}>
              <span>{item.year}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Contact />
    </main>
  );
}

function Header({ isMenuOpen, setIsMenuOpen }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Amrit Gupta home">
        <span>AG</span>
        <strong>Amrit Gupta</strong>
      </a>
      <nav className={isMenuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)}>
            {item}
          </a>
        ))}
      </nav>
      <button
        className="menu-button"
        type="button"
        aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
        onClick={() => setIsMenuOpen((value) => !value)}
      >
        {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <div className="status-pill">
          <Sparkles aria-hidden="true" />
          <span>{profile.availability}</span>
        </div>
        <h1>{profile.name}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-copy">{profile.intro}</p>
        <div className="hero-actions">
          <a className="primary-button" href={`mailto:${profile.email}`}>
            <Mail aria-hidden="true" />
            Hire Me
          </a>
          <a className="secondary-button" href={profile.github} target="_blank" rel="noreferrer">
            <GitBranch aria-hidden="true" />
            GitHub
          </a>
        </div>
        <div className="hero-meta" aria-label="Profile summary">
          {highlights.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <aside className="profile-panel" aria-label="Profile details">
        <div className="portrait-orbit">
          <div className="portrait">
            <span>AG</span>
          </div>
          <div className="orbit-chip chip-react">
            <Blocks aria-hidden="true" />
          </div>
          <div className="orbit-chip chip-node">
            <TerminalSquare aria-hidden="true" />
          </div>
          <div className="orbit-chip chip-api">
            <Database aria-hidden="true" />
          </div>
        </div>
        <div className="panel-content">
          <div>
            <span>Primary Focus</span>
            <strong>React.js Frontend Development</strong>
          </div>
          <div>
            <span>Experience</span>
            <strong>{profile.experience} Years</strong>
          </div>
          <div>
            <span>Location</span>
            <strong>
              <MapPin aria-hidden="true" />
              {profile.location}
            </strong>
          </div>
        </div>
      </aside>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div>
        <span className="eyebrow">Contact</span>
        <h2>Let&apos;s build a React experience that feels sharp and reliable.</h2>
      </div>
      <div className="contact-actions">
        <a className="primary-button" href={`mailto:${profile.email}`}>
          <Mail aria-hidden="true" />
          Email Me
        </a>
        <a className="icon-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <GitBranch aria-hidden="true" />
        </a>
        <a className="icon-link" href={profile.linkedin} aria-label="LinkedIn">
          <Network aria-hidden="true" />
        </a>
      </div>
      <div className="footer-line">
        <span>
          <BriefcaseBusiness aria-hidden="true" />
          Senior Software Developer
        </span>
        <span>
          <Rocket aria-hidden="true" />
          React.js Specialist
        </span>
        <span>
          <Zap aria-hidden="true" />
          Available for great teams
        </span>
      </div>
    </section>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
