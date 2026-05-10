"use client";

import { useState } from 'react';
import LineWaves from '../components/LineWaves';
import PitchDeckButton from '../components/PitchDeckButton';
import ScrollFade from '../components/ScrollFade';

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const getValue = (key: string) => (formData.get(key) as string) || '';

    const requiredKeys = ['fullName', 'contact', 'classification', 'organization', 'sector', 'scale', 'location', 'details'];
    const hasMissing = requiredKeys.some(key => !getValue(key).trim());
    if (hasMissing) {
      return;
    }

    const subject = 'SPARS Partner Intake';
    const body = [
      'PARTNER IDENTITY',
      `Full Name: ${getValue('fullName')}`,
      `Email / Communication Channel: ${getValue('contact')}`,
      '',
      'ENTITY CLASSIFICATION',
      `Classification: ${getValue('classification')}`,
      '',
      'ORGANIZATION NAME',
      `Organization: ${getValue('organization')}`,
      '',
      'OPERATIONAL SECTOR',
      `Sector: ${getValue('sector')}`,
      '',
      'PROJECT LOGISTICS',
      `Deployment Scale: ${getValue('scale')}`,
      `Facility Location: ${getValue('location')}`,
      '',
      'TECHNICAL BRIEF',
      `Project Details: ${getValue('details')}`,
    ].join('\n');

    const mailto = `mailto:ritamrao48@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setIsFormOpen(false);
  };

  return (
    <ScrollFade>
      <main className="page">
        <div className="line-waves-background" aria-hidden="true">
          <LineWaves
            speed={0.25}
            innerLineCount={26}
            outerLineCount={30}
            warpIntensity={0.7}
            rotation={-35}
            edgeFadeWidth={0.2}
            colorCycleSpeed={0.6}
            brightness={0.12}
            color1="#FFFFFF"
            color2="#000000"
            color3="#000000"
            enableMouseInteraction={false}
            mouseInfluence={0.8}
          />
        </div>

        <header className="header">
          <div className="header-inner">
            <nav className="nav-left label">
              <a href="#about">About</a>
              <a href="#work">Work</a>
              <a href="#contact">Contact</a>
            </nav>
            <div className="nav-logo">
              <span className="serif">SPARS</span>
              
            </div>
            
            <PitchDeckButton />
          </div>
        </header>

        <section className="section hero scroll-fade" data-scroll-fade id="hero">
          <div className="hero-left">
            
            <h1 className="hero-title">
              <span className="stroke-text">Waves</span>
              <br />
              <span className="serif">Saves</span>
              <br />
              Life
            </h1>
            <div className="hero-readout">
              <div>
                <div className="label">How?</div>
                WiFi CSI Sensing
              </div>
              <div>
                <div className="label">Core</div>
                ESP32 Module
              </div>
              <div>
                <div className="label">Method</div>
                Edge Infrastructure
              </div>
              <div>
                <div className="label">Since</div>
                2026
              </div>
            </div>
            <button className="start-btn" type="button" onClick={() => setIsFormOpen(true)}>
              Start a project <span>→</span>
            </button>
          </div>
        </section>

        <section className="marquee scroll-fade fullscreen-section" data-scroll-fade aria-hidden="true">
          <div className="marquee-track">
            <span>
              <span className="stroke-text">Presence</span>
              <span className="star">★</span>
              <span className="serif">Heart-Beat</span>
              <span className="star">★</span>
            </span>
            <span>
              <span className="stroke-text">Breath-Rate</span>
              <span className="star">★</span>
              <span className="serif">Presence</span>
              <span className="star">★</span>
            </span>
          </div>
        </section>

        <section className="section about scroll-fade fullscreen-section" data-scroll-fade id="about">
          <h2>About Us</h2>
          <p>
            We build systems that monitor people accurately without touching them. These systems use Wi-Fi
            signals to track health signs. This way we provide private monitoring for older adults. We help
            create a healthcare system that can predict and prevent health issues.
          </p>
        </section>

        <section className="section projects scroll-fade fullscreen-section" data-scroll-fade id="work">
          {[
            { name: 'Old Age Homes', image: '/1.png', alt: 'Old age homes' },
            { name: 'Healthcare / Medtech', image: '/2.jpg', alt: 'Healthcare and medtech' },
            { name: 'Home Security', image: '/3.png', alt: 'Home security' },
          ].map(item => (
            <div className="project-row" key={item.name}>
              <h3>{item.name}</h3>
              <div className={`project-image${item.showImage ? ' is-visible' : ''}`}>
                <img src={item.image} alt={item.alt} />
              </div>
              <div className="view-pill">View</div>
            </div>
          ))}
        </section>

        {isFormOpen && (
          <div className="modal-overlay" role="dialog" aria-modal="true">
            <div className="modal-card">
              <div className="modal-header">
                <div className="label">Partner Intake</div>
                <button className="modal-close" type="button" onClick={() => setIsFormOpen(false)}>
                  Close
                </button>
              </div>

              <form className="modal-form" onSubmit={handleFormSubmit}>
                <div className="form-section">
                  <div className="form-title">Partner Identity</div>
                  <div className="form-grid">
                    <label>
                      Full Name (Lead point of contact)
                      <input type="text" name="fullName" placeholder="Full name" required />
                    </label>
                    <label>
                      Email / Communication Channel
                      <input type="text" name="contact" placeholder="Email or contact" required />
                    </label>
                  </div>
                </div>

                <div className="form-section">
                  <div className="form-title">Entity Classification</div>
                  <label>
                    Options: [Individual] / [Corporation] / [Non-Profit]
                    <select name="classification">
                      <option value="">Select classification</option>
                      <option value="individual">Individual</option>
                      <option value="corporation">Corporation</option>
                      <option value="non-profit">Non-Profit</option>
                    </select>
                  </label>
                </div>

                <div className="form-section">
                  <label>
                    Organization Name * (Legal entity name or "Personal" for individuals)
                    <input type="text" name="organization" placeholder="Organization name" required />
                  </label>
                </div>

                <div className="form-section">
                  <div className="form-title">Operational Sector</div>
                  <label>
                    Options: [Assisted Living] / [Clinical Healthcare] / [Smart Home] / [Government & NGO]
                    <select name="sector">
                      <option value="">Select sector</option>
                      <option value="assisted-living">Assisted Living</option>
                      <option value="clinical-healthcare">Clinical Healthcare</option>
                      <option value="smart-home">Smart Home</option>
                      <option value="government-ngo">Government & NGO</option>
                    </select>
                  </label>
                </div>

                <div className="form-section">
                  <div className="form-title">Project Logistics</div>
                  <div className="form-grid">
                    <label>
                      Deployment Scale (Estimated number of rooms or units)
                      <input type="text" name="scale" placeholder="e.g. 120 rooms" required />
                    </label>
                    <label>
                      Facility Location (City/Region)
                      <input type="text" name="location" placeholder="City / Region" required />
                    </label>
                  </div>
                </div>

                <div className="form-section">
                  <div className="form-title">Technical Brief</div>
                  <label>
                    Project Details (A descriptive field for the specific sensing requirements or goals)
                    <textarea name="details" rows={4} placeholder="Describe sensing requirements or goals" required />
                  </label>
                </div>

                <div className="form-actions">
                  <button className="nav-cta" type="button" onClick={() => setIsFormOpen(false)}>
                    Close
                  </button>
                  <button className="start-btn" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </main>
    </ScrollFade>
  );
}