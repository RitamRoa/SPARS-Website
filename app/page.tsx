export default function Home() {
  return (
    <>
      <nav className="header-nav mono">
        <div className="serif" style={{ fontSize: '1.5rem', fontStyle: 'italic', textTransform: 'none', letterSpacing: '0' }}>SPARS</div>
        <div className="nav-links">
          <a href="#work" className="nav-link">Work</a>
          <a href="#services" className="nav-link">Capabilities</a>
          <a href="#about" className="nav-link">Intelligence</a>
        </div>
        <div className="status-pill">
          <div className="status-dot"></div>
          System Online
        </div>
      </nav>

      <section className="hero">
        <div className="hero-mesh"></div>
        <h1 className="hero-title reveal">
          Organic<br /><i>Intelligence</i>
        </h1>
        
        <div className="wave-container">
          <div className="wave-curve">
            <button className="init-btn mono">Initialize</button>
          </div>
        </div>
      </section>

      <section className="section" id="work">
        <div className="work-grid">
          <div className="col-1">
            <div className="work-card-wrapper reveal">
              <div className="work-card" style={{ background: '#e0e7ff' }}>
                <div className="card-orb"></div>
                <div className="card-pill mono">View Nexus</div>
              </div>
              <div className="card-meta">
                <h3 className="serif">Project Nexus</h3>
                <hr />
                <span className="mono">[Quantum Architecture]</span>
              </div>
            </div>
          </div>
          <div className="col-divider"></div>
          <div className="col-2">
            <div className="work-card-wrapper reveal">
              <div className="work-card" style={{ background: '#f3e8ff' }}>
                <div className="card-orb" style={{ background: '#c084fc' }}></div>
                <div className="card-pill mono">View Zenith</div>
              </div>
              <div className="card-meta">
                <h3 className="serif">Zenith Core</h3>
                <hr />
                <span className="mono">[Deep Learning]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="services-sticky">
          <h2 className="serif" style={{ fontSize: '4rem', marginBottom: '2rem' }}>Core<br /><i>Capabilities</i></h2>
          <a href="#" className="mono" style={{ color: 'var(--color-accent)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            Explore All Systems →
          </a>
        </div>
        <div className="accordion">
          {[
            { title: 'Neural Networks', tags: ['[Deep Learning]', '[Generative Models]'] },
            { title: 'Fluid Architecture', tags: ['[Dynamic Components]', '[WebGL Data]'] },
            { title: 'System Synthesis', tags: ['[API Integration]', '[Edge Streaming]'] },
          ].map((item, i) => (
            <div className="accordion-item" key={i}>
              <h3 className="accordion-title serif">0{i+1}. {item.title}</h3>
              <div className="accordion-content mono">
                <div>{item.tags[0]}</div>
                <div>{item.tags[1]}</div>
                <p style={{ textTransform: 'none', letterSpacing: 'normal', fontFamily: 'var(--font-inter)', marginTop: '1rem', color: '#666' }}>
                  Deploying cutting-edge systems engineered for absolute fluidity and high-contrast precision execution.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-glow"></div>
        <h2 className="serif reveal"><i>"Bridging the gap between rigid data and fluid, organic systems."</i></h2>
        
        <div className="footer-grid">
          <div>
            <span className="mono">Location</span>
            <p>New York Data Center<br/>Sector 4, Node 09</p>
          </div>
          <div>
            <span className="mono">Contact</span>
            <a href="#">initialize@spars.org</a>
          </div>
          <div>
            <span className="mono">Network</span>
            <p><a href="#">Twitter</a> / <a href="#">LinkedIn</a> / <a href="#">GitHub</a></p>
          </div>
        </div>
        
        <div className="mono" style={{ textAlign: 'center', color: '#666', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
          ©2026 SPARS Organic Intelligence. All rights reserved.
        </div>
      </footer>
    </>
  );
}