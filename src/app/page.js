import portfolio from "../data/portfolio.json";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* TOP SECTION */}
      <header className="header" style={{ borderBottom: 'none', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
        <div className="status-badge">Available for Roles</div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
          Hi, I'm {portfolio.personal.name}
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', lineHeight: '1.5' }}>
          {portfolio.personal.title}
        </p>
      </header>

      {/* CREDENTIALS QUICK SUMMARY */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2>Core Profile Summary</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
          {portfolio.personal.bio}
        </p>
        <div className="grid">
          <div className="skill-card">
            <h3>Institution</h3>
            <p><strong>{portfolio.personal.education.college}</strong></p>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{portfolio.personal.education.campus}</p>
          </div>
          <div className="skill-card">
            <h3>Program</h3>
            <p><strong>{portfolio.personal.education.program}</strong></p>
          </div>
          <div className="skill-card">
            <h3>Based In</h3>
            <p><strong>{portfolio.personal.location}</strong></p>
          </div>
        </div>
      </section>

      {/* QUICK SECTION NAVIGATION */}
      <section>
        <h2>Explore My Profile</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
          Click on any of the sections below to view detailed records, skills matrices, or project specifications:
        </p>

        <div className="grid" style={{ gap: '1rem' }}>
          <Link href="/about" className="skill-card" style={{ textDecoration: 'none', transition: 'transform 0.2s' }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '0.25rem' }}>01 / About Me</h3>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Read my professional bio and interests.</p>
          </Link>

          <Link href="/skills" className="skill-card" style={{ textDecoration: 'none', transition: 'transform 0.2s' }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '0.25rem' }}>02 / Technology Stack</h3>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Inspect my programming & web capabilities.</p>
          </Link>

          <Link href="/projects" className="skill-card" style={{ textDecoration: 'none', transition: 'transform 0.2s' }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '0.25rem' }}>03 / Academic Projects</h3>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Browse the LiveMart & deep learning specs.</p>
          </Link>

          <Link href="/experience" className="skill-card" style={{ textDecoration: 'none', transition: 'transform 0.2s' }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '0.25rem' }}>04 / Leadership</h3>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Review BITS clubs and team achievements.</p>
          </Link>

          <Link href="/education" className="skill-card" style={{ textDecoration: 'none', transition: 'transform 0.2s' }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '0.25rem' }}>05 / Academic Records</h3>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Inspect my college courses and details.</p>
          </Link>

          <Link href="/contact" className="skill-card" style={{ textDecoration: 'none', transition: 'transform 0.2s' }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '0.25rem' }}>06 / Contact Information</h3>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Obtain phone and email directory channels.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}