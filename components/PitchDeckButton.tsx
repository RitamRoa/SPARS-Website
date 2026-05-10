"use client";

export default function PitchDeckButton() {
  return (
    <button
      className="nav-cta"
      type="button"
      onClick={() => window.open('/SPARS.pdf', '_blank', 'noopener,noreferrer')}
    >
      Our Pitch Deck
    </button>
  );
}
