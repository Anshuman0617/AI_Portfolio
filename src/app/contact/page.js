import portfolio from "../../data/portfolio.json";

export default function Contact() {
  return (
    <div>
      <header className="header">
        <h1>Contact Information</h1>
        <p>Get in touch via official university emails, personal telephone, or physical address.</p>
      </header>

      <main>
        <section style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2>Direct Directory Channels</h2>
          
          <div className="contact-item" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
            <span>University Email Address</span>
            <a href={`mailto:${portfolio.personal.email}`} style={{ fontSize: '1.1rem' }}>
              {portfolio.personal.email}
            </a>
          </div>
          
          <div className="contact-item" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', paddingTop: '1rem' }}>
            <span>Personal Telephone</span>
            <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#fff' }}>{portfolio.personal.phone}</p>
          </div>
          
          <div className="contact-item" style={{ paddingTop: '1rem' }}>
            <span>Residency Address</span>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              {portfolio.personal.education.address}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
