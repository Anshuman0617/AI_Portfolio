import portfolio from "../../data/portfolio.json";

export default function Experience() {
  return (
    <div>
      <header className="header">
        <h1>Leadership & Experience</h1>
        <p>Project coordination, peer collaboration, and BITS club activities.</p>
      </header>

      <main>
        <section>
          <h2>Leadership & Extra-Curricular Milestones</h2>
          <div className="grid">
            {portfolio.activities.map((act, idx) => (
              <div key={idx} className="skill-card">
                <h3 style={{ color: 'var(--accent)', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'none' }}>
                  {act.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', lineHeight: '1.6' }}>
                  {act.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
