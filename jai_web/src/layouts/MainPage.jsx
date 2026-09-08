import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import '../style/mainpage.css';

const expertiseGroups = [
  {
    number: '01',
    title: 'AI & Automation',
    description: 'Building intelligent workflows that turn complex enterprise operations into simple, guided experiences.',
    skills: ['Generative AI', 'Agentic AI', 'Multi-agent architecture', 'RAG pipelines', 'LLM integrations', 'AI orchestration'],
  },
  {
    number: '02',
    title: 'Watsonx Ecosystem',
    description: 'Designing production-ready assistants, tools, and procurement agents for IBM enterprise teams.',
    skills: ['Watsonx Orchestrate', 'Watsonx Assistant', 'Watson ADK', 'OpenAPI', 'Coupa integrations', 'Enterprise AI'],
  },
  {
    number: '03',
    title: 'Full-stack Engineering',
    description: 'Creating responsive products with reliable APIs, scalable backend services, and thoughtful interfaces.',
    skills: ['React.js', 'Node.js', 'Python', 'FastAPI', 'Express.js', 'Angular'],
  },
  {
    number: '04',
    title: 'Data & Cloud',
    description: 'Connecting applications to secure data services, storage, payments, and business-critical integrations.',
    skills: ['SQL', 'MySQL', 'Cloudant DB', 'AWS S3', 'Google Cloud Storage', 'Stripe'],
  },
];

const projects = [
  {
    period: 'May 2024 — Present',
    company: 'IBM · AI & Application Developer',
    title: 'From procurement tools to agentic workflows',
    summary: 'Building production-ready AI solutions for IBM procurement operations, spanning supplier risk validation, invoice and remittance retrieval, candidate hiring, and multi-agent purchasing workflows.',
    highlights: ['Supplier validation and embargo checks', 'Invoice status and remittance reporting', 'Secure 2FA enterprise experiences'],
    tags: ['Watsonx Orchestrate', 'Watson ADK', 'Python', 'Node.js'],
  },
  {
    period: 'June 2021 — May 2023',
    company: 'OptiSol · Software Engineer',
    title: 'Full-stack platforms built for real users',
    summary: 'Delivered responsive products across education, wellness, and travel, combining reliable APIs, payment systems, cloud media storage, integrations, and mobile-ready interfaces.',
    highlights: ['Role-based education workflows', 'Subscriptions, trials, and Stripe payments', 'Travel APIs with 1,000+ dynamic deals'],
    tags: ['React.js', 'Angular', 'Express.js', 'MySQL'],
  },
];

const projectCards = [
  { number: '01', category: 'IBM · Live', title: 'Ask Procurement', description: 'AI-powered invoice and remittance support for internal BPO procurement teams, with live status retrieval, supplier reporting, and agent-connected catalog tools.', tech: 'Python · Watsonx Orchestrate · SQL', accent: 'live' },
  { number: '02', category: 'IBM · POC', title: 'Procurement Digital Concierge', description: 'A unified agentic experience covering purchase management, supplier and catalog operations, PR triage, approvals, PO amendments, invoices, receipts, and cancellations.', tech: 'Watsonx Orchestrate · Coupa · FastAPI', accent: 'ai' },
  { number: '03', category: 'IBM · POC', title: 'AI Candidate Hiring', description: 'End-to-end hiring platform with candidate onboarding, job recommendations, assessments, Teams scheduling, email invitations, personas, and analytics dashboards.', tech: 'React.js · Carbon · Node.js · Cloudant', accent: 'product' },
  { number: '04', category: 'OptiSol', title: 'Littlescribe', description: 'School management and digital learning platform with teacher, student, and parent workflows, digital book creation, Gantt tracking, payments, and collaboration.', tech: 'Node.js · AngularJS · MySQL · Stripe', accent: 'product' },
  { number: '05', category: 'OptiSol', title: 'Beam Feel Good', description: 'Fitness and wellness platform supporting live classes, on-demand workouts, instructor management, memberships, 90-day trials, reminders, and secure media storage.', tech: 'React.js · Express.js · AWS S3 · Stripe', accent: 'wellness' },
  { number: '06', category: 'OptiSol', title: 'One Air Club', description: 'Travel membership and booking platform integrating KIWI and Skyscanner to dynamically surface more than 1,000 travel deals with automated alerts.', tech: 'Angular 8 · Express.js · MySQL · Travel APIs', accent: 'travel' },
];

const heroTitles = [
  { firstLine: 'I build digital', secondLine: 'intelligence.' },
  { firstLine: 'I design useful', secondLine: 'experiences.' },
  { firstLine: 'I turn ideas', secondLine: 'into products.' },
  { firstLine: 'I make AI feel', secondLine: 'human.' },
];

const MainPage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [typedTitle, setTypedTitle] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const currentTitle = heroTitles[titleIndex];
  const heroTitle = `${currentTitle.firstLine} ${currentTitle.secondLine}`;

  useEffect(() => {
    let characterIndex = 0;
    let isDeleting = false;
    let typingTimer;
    const title = `${heroTitles[titleIndex].firstLine} ${heroTitles[titleIndex].secondLine}`;

    const typeTitle = () => {
      if (!isDeleting) {
        characterIndex += 1;
        setTypedTitle(title.slice(0, characterIndex));
        if (characterIndex === title.length) {
          isDeleting = true;
          typingTimer = window.setTimeout(typeTitle, 2200);
          return;
        }
        typingTimer = window.setTimeout(typeTitle, 85);
        return;
      }

      characterIndex -= 1;
      setTypedTitle(title.slice(0, characterIndex));
      if (characterIndex === 0) {
        setTitleIndex((index) => (index + 1) % heroTitles.length);
        return;
      }
      typingTimer = window.setTimeout(typeTitle, 45);
    };

    setTypedTitle('');
    typingTimer = window.setTimeout(typeTitle, 700);
    return () => window.clearTimeout(typingTimer);
  }, [titleIndex]);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 420);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
  <main>
    <section className="hero" id="home" style={{ backgroundImage: "linear-gradient(110deg, rgba(15, 23, 42, .98) 8%, rgba(15, 23, 42, .84) 62%, rgba(15, 23, 42, .58)), url('https://imgcdn.stablediffusionweb.com/2024/9/9/41e2f8c9-f7db-4697-b11a-96f38effafdf.jpg')" }}>
      <Navbar />
      <div className="hero-orbit orbit-one" />
      <div className="hero-orbit orbit-two" />
      <div className="ai-visual" aria-hidden="true">
        <div className="ai-orbit ai-orbit-one"><span /></div>
        <div className="ai-orbit ai-orbit-two"><span /></div>
        <div className="ai-core"><span>AI</span><small>INTELLIGENCE</small></div>
        <span className="ai-node ai-node-one" />
        <span className="ai-node ai-node-two" />
        <span className="ai-node ai-node-three" />
      </div>
      <div className="hero-content page-width">
        <p className="eyebrow reveal">AI & FULL-STACK ENGINEER <span className="eyebrow-line" /></p>
        <h1 className="hero-title reveal delay-one" aria-label={heroTitle}>
          {typedTitle.length <= currentTitle.firstLine.length ? typedTitle : currentTitle.firstLine}
          {typedTitle.length > currentTitle.firstLine.length && <><br /><em>{typedTitle.slice(currentTitle.firstLine.length + 1)}</em></>}
          <span className="typing-cursor" aria-hidden="true" />
        </h1>
        <p className="hero-copy reveal delay-two">Turning complex ideas into thoughtful, scalable products — from intelligent enterprise workflows to delightful web experiences.</p>
        <div className="hero-actions reveal delay-three">
          <a className="button button-primary" href="#experience">Explore my work <span>↗</span></a>
          <a className="text-link" href="mailto:jaiganeshjgp@gmail.com">Get in touch <span>→</span></a>
        </div>
        <div className="hero-meta reveal delay-three"><span>Based in Banglore, karnataka, India</span><span className="meta-dot" /><span>5+ years building AI-powered products</span></div>
      </div>
      <div className="scroll-cue"><span className="scroll-line" /> Scroll to explore</div>
    </section>

    <section className="intro-section page-width" id="about">
      <div className="section-label">01 / ABOUT</div>
      <div className="intro-grid">
        <h2>Technology should feel<br /><span>human.</span></h2>
        <div>
          <p className="large-copy">I’m Jai Ganesh, an AI & Full Stack Engineer passionate about building technology that makes work clearer, faster, and more meaningful.</p>
          <p className="muted-copy">My work lives at the intersection of thoughtful product design and ambitious engineering. I enjoy turning emerging AI capabilities into dependable tools that teams can use every day.</p>
          <a className="text-link dark-link" href="/Jai_Ganesh_Resume.docx" download>Download my resume <span>↓</span></a>
        </div>
      </div>
    </section>

    <section className="skills-section" id="skills">
      <div className="page-width">
        <div className="section-label light-label">02 / EXPERTISE</div>
        <div className="skills-heading"><h2>Technology with<br /><em>a purpose.</em></h2><p>My toolkit spans AI, enterprise automation, full-stack product engineering, and the infrastructure that makes ideas dependable in production.</p></div>
        <div className="expertise-grid">
          {expertiseGroups.map((group) => (
            <article className="expertise-card" key={group.number}>
              <div className="expertise-card-top"><span className="expertise-number">{group.number}</span><span className="expertise-arrow">↗</span></div>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <div className="expertise-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="experience-section page-width" id="experience">
      <div className="section-label">03 / EXPERIENCE</div>
      <div className="experience-heading"><h2>A track record of<br /><span>solving hard things.</span></h2><p>Roles, projects, and problems that shaped how I think and build.</p></div>
      <div className="timeline">{projects.map((project) => <article className="timeline-item" key={project.company}><div className="timeline-period">{project.period}</div><div className="timeline-content"><p className="company">{project.company}</p><h3>{project.title}</h3><p>{project.summary}</p><ul className="timeline-highlights">{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><span className="timeline-arrow">↗</span></article>)}</div>
    </section>

    <section className="projects-section page-width">
      <div className="section-label">04 / SELECTED WORK</div>
      <div className="project-grid">{projectCards.map((project) => <article className={`project-card project-card-${project.accent}`} key={project.number}><div className="project-card-top"><span className="project-number">{project.number}</span><span className="project-category">{project.category}</span></div><h3>{project.title}</h3><p>{project.description}</p><span className="project-tech">{project.tech}</span><span className="card-arrow">↗</span></article>)}</div>
    </section>

    <section className="contact-section" id="contact">
      <div className="page-width contact-inner">
        <div className="section-label light-label">05 / CONTACT</div>
        <div className="contact-heading"><div><h2>Let&apos;s build something<br /><em>intelligent together.</em></h2><p>Whether you&apos;re exploring an AI idea, building an enterprise product, or looking for a full-stack partner, I&apos;d love to hear from you.</p></div><div className="contact-status"><span className="status-dot" /> Open to meaningful conversations</div></div>
        <div className="contact-grid">
          <a className="contact-card contact-card-primary" href="mailto:jaiganeshjgp@gmail.com"><span className="contact-card-label">EMAIL</span><strong>jaiganeshjgp@gmail.com</strong><span className="contact-card-arrow">↗</span></a>
          <a className="contact-card" href="tel:+917339274912"><span className="contact-card-label">PHONE</span><strong>+91 73392 74912</strong><span className="contact-card-arrow">↗</span></a>
          <a className="contact-card" href="https://www.linkedin.com/in/jai-ganesh-full-stack-developer/" target="_blank" rel="noreferrer"><span className="contact-card-label">CONNECT ON LINKEDIN</span><strong>Jai Ganesh P</strong><span className="contact-card-arrow">↗</span></a>
        </div>
        <div className="contact-bottom"><span>AI & Full Stack Engineer · Banglore, karnataka    </span><div><a href="/Jai_Ganesh_Resume.docx" download>Resume ↓</a><a href="https://www.linkedin.com/in/jai-ganesh-full-stack-developer/" target="_blank" rel="noreferrer">LinkedIn ↗</a><span>© 2024 Jai Ganesh P</span></div></div>
      </div>
    </section>
    <button
      className={`scroll-top ${showScrollTop ? 'is-visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      ↑
    </button>
  </main>
  );
};

export default MainPage;
