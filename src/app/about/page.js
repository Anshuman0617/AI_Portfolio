import portfolio from "../../data/portfolio.json";

export default function About() {
  return (
    <div>
      <header className="header">
        <h1>About Me</h1>
        <p>Biographical context, professional focus, and database identifiers.</p>
      </header>

      <main>
        <section>
          <h2>Personal Profile</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            {portfolio.personal.bio}
          </p>
          <div className="grid">
            <div className="skill-card">
              <h3>Date of Birth</h3>
              <p><strong>{portfolio.personal.education.dob}</strong></p>
            </div>
            <div className="skill-card">
              <h3>Base Location</h3>
              <p><strong>{portfolio.personal.location}</strong></p>
            </div>
          </div>
        </section>

        <section>
          <h2>Professional Interests</h2>
          <div className="tech-tags" style={{ gap: '0.75rem' }}>
            {portfolio.interests.map((interest, idx) => (
              <span key={idx} className="tech-tag" style={{ fontSize: '0.85rem', padding: '0.4rem 0.75rem' }}>
                {interest}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
