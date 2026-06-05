import portfolio from "../../data/portfolio.json";

export default function Projects() {
  return (
    <div>
      <header className="header">
        <h1>Academic & Matrix Projects</h1>
        <p>Full-stack web applications and machine learning deep learning pipelines.</p>
      </header>

      <main>
        <div className="grid">
          {portfolio.projects.map((proj) => (
            <section key={proj.id} className="project-card" style={{ marginBottom: '0' }}>
              <div>
                <div className="project-meta">
                  <span className="project-role">{proj.role}</span>
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff' }}>{proj.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                  {proj.desc}
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem', marginTop: '1rem' }}>
                <span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                  Tech Stack
                </span>
                <div className="tech-tags">
                  {proj.tech.map((t, tIdx) => (
                    <span key={tIdx} className="tech-tag" style={{ background: 'rgba(255,255,255,0.05)', color: '#fff' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
