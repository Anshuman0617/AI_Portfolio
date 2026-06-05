import portfolio from "../../data/portfolio.json";

export default function Skills() {
  return (
    <div>
      <header className="header">
        <h1>Technology Stack</h1>
        <p>Software development, web systems engineering, and data processing skills.</p>
      </header>

      <main>
        <section>
          <h2>Core Capabilities</h2>
          <div className="grid">
            {portfolio.skills.map((skillGroup, idx) => (
              <div key={idx} className="skill-card">
                <h3 style={{ fontSize: '0.9rem', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.25rem' }}>
                  {skillGroup.category}
                </h3>
                <div className="tech-tags">
                  {skillGroup.items.map((skill, sIdx) => (
                    <span key={sIdx} className="tech-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
