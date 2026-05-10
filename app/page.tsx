import LineWaves from '../components/LineWaves';
import PitchDeckButton from '../components/PitchDeckButton';
import ScrollFade from '../components/ScrollFade';

export default function Home() {
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
            <button className="start-btn" type="button">
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
            { name: 'Old Age Homes', image: '/1.png', alt: 'Old age homes', showImage: true },
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

      </main>
    </ScrollFade>
  );
}