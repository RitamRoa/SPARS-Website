import Antigravity from '../components/Antigravity';

export default function Home() {
  return (
    <main style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      {/* Background Layer */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Antigravity
          count={100}
          magnetRadius={6}
          ringRadius={8}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={0.5}
          lerpSpeed={0.05}
          color="#F48F68"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div>

      {/* Foreground Content */}
      <div style={{ position: 'relative', zIndex: 1, padding: '2rem' }}>
       
      </div>
    </main>
  );
}