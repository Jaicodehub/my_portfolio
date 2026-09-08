import { useEffect, useRef, useState } from 'react';
import '../style/navbar.css';

const menuItems = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Skills', target: 'skills' },
  { label: 'Experience', target: 'experience' },
  { label: 'Contact', target: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigationTimer = useRef();

  useEffect(() => {
    const sections = menuItems
      .map(({ target }) => document.getElementById(target))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.2, 0.5, 0.8] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      window.clearTimeout(navigationTimer.current);
    };
  }, []);

  const scrollTo = (target) => {
    setActiveSection(target);
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
    window.clearTimeout(navigationTimer.current);
    navigationTimer.current = window.setTimeout(() => setActiveSection(target), 800);
    setIsOpen(false);
  };

  return (
    <header className="site-header">
      <div className="nav-shell">
        <button className="brand" onClick={() => scrollTo('home')} aria-label="Go to home">
          <span className="brand-mark">j<span>AI</span></span>
          <span className="brand-label">Jai Ganesh</span>
        </button>
        <button
          className="menu-toggle"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`main-nav ${isOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          {menuItems.map((item) => (
            <button
              key={item.target}
              className={activeSection === item.target ? 'active' : ''}
              onClick={() => scrollTo(item.target)}
              aria-current={activeSection === item.target ? 'page' : undefined}
            >
              {item.label}
            </button>
          ))}
          <button className="nav-cta" onClick={() => scrollTo('contact')}>Let&apos;s talk <span>↗</span></button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
