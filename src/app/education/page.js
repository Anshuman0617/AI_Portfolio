import portfolio from "../../data/portfolio.json";

export default function Education() {
  const edu = portfolio.personal.education;
  
  return (
    <div>
      <header className="header">
        <h1>Academic Credentials</h1>
        <p>BITS Pilani university degree, cumulative grades, and student listings.</p>
      </header>

      <main>
        <section>
          <h2>Birla Institute of Technology & Science (BITS), Pilani</h2>
          <div className="grid" style={{ marginBottom: '1.5rem' }}>
            <div className="skill-card">
              <h3>College Campus</h3>
              <p><strong>{edu.college}</strong></p>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{edu.campus}</p>
            </div>
            
            <div className="skill-card">
              <h3>Degree Program</h3>
              <p><strong>{edu.program}</strong></p>
            </div>
            
            <div className="skill-card">
              <h3>Academic Focus</h3>
              <p><strong>Mathematics & Computing</strong></p>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Applied Math & Computer Science</p>
            </div>
            
            <div className="skill-card">
              <h3>Student Registry</h3>
              <p style={{ fontSize: '0.85rem', color: '#fff', marginBottom: '0.25rem' }}>ID: <span style={{ fontFamily: 'monospace' }}>{edu.id}</span></p>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>CGPA: {edu.cgpa}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
