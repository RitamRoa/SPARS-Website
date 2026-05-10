"use client";

import { useEffect } from 'react';

type ScrollFadeProps = {
  children: React.ReactNode;
};

export default function ScrollFade({ children }: ScrollFadeProps) {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-scroll-fade]');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: [0, 0.2, 0.6], rootMargin: '0px 0px -10% 0px' }
    );

    elements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}
