'use client';

import { useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { MidtermEssay } from '@/data/midterm';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText, ScrollTrigger);

interface MidtermPageProps {
  essay: MidtermEssay;
}

export default function MidtermPage({ essay }: MidtermPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.push('/');
  }, [router]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleBack();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleBack]);

  // Entry animation for the header
  useEffect(() => {
    if (!headerRef.current) return;

    const titleEl = headerRef.current.querySelector('.essay-title');
    const subtitleEl = headerRef.current.querySelector('.essay-subtitle');
    const metaEls = headerRef.current.querySelectorAll('.essay-meta');

    if (titleEl) {
      const split = SplitText.create(titleEl, { type: 'chars', charsClass: 'rolling-char' });
      gsap.set(titleEl, { perspective: 700, transformStyle: 'preserve-3d', opacity: 1 });
      const depth = -window.innerWidth / 8;
      gsap.fromTo(
        split.chars,
        { rotationX: -90, opacity: 0, transformOrigin: `50% 50% ${depth}px` },
        { rotationX: 0, opacity: 1, transformOrigin: `50% 50% ${depth}px`, stagger: 0.03, duration: 0.8, ease: 'power3.out' }
      );
    }

    if (subtitleEl) {
      gsap.fromTo(subtitleEl, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: 'power2.out' });
    }

    gsap.fromTo(metaEls, { opacity: 0 }, { opacity: 1, duration: 0.6, delay: 0.9, stagger: 0.1 });
  }, []);

  // ScrollTrigger for sections
  useEffect(() => {
    if (!containerRef.current) return;

    const sections = containerRef.current.querySelectorAll('.essay-section');
    sections.forEach((section) => {
      const heading = section.querySelector('.section-heading');
      const paragraphs = section.querySelectorAll('.section-paragraph');

      if (heading) {
        gsap.fromTo(heading, { opacity: 0, x: -30 }, {
          opacity: 1, x: 0, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: heading, start: 'top 85%', toggleActions: 'play none none none' },
        });
      }

      paragraphs.forEach((p, i) => {
        gsap.fromTo(p, { opacity: 0, y: 20 }, {
          opacity: 1, y: 0, duration: 0.6, delay: i * 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: p, start: 'top 90%', toggleActions: 'play none none none' },
        });
      });
    });

    // Works cited
    const citedSection = containerRef.current.querySelector('.works-cited');
    if (citedSection) {
      gsap.fromTo(citedSection, { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: citedSection, start: 'top 85%', toggleActions: 'play none none none' },
      });
    }

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white cursor-none">
      {/* Back button */}
      <button
        onClick={handleBack}
        className="fixed top-8 left-8 z-50 text-white/50 hover:text-white transition-colors text-sm uppercase tracking-widest cursor-none"
      >
        Back
      </button>

      {/* Header */}
      <div ref={headerRef} className="h-screen flex flex-col items-center justify-center px-8">
        <h1 className="essay-title text-[5vw] uppercase leading-none text-center font-light" style={{ opacity: 0 }}>
          {essay.title}
        </h1>
        <p className="essay-subtitle text-[1.5vw] text-white/60 mt-6 italic" style={{ opacity: 0 }}>
          {essay.subtitle}
        </p>
        <div className="mt-12 flex flex-col items-center gap-2">
          <span className="essay-meta text-xs uppercase tracking-[0.3em] text-white/40" style={{ opacity: 0 }}>
            {essay.author}
          </span>
          <span className="essay-meta text-xs uppercase tracking-[0.3em] text-white/30" style={{ opacity: 0 }}>
            {essay.course}
          </span>
          <span className="essay-meta text-xs uppercase tracking-[0.3em] text-white/30" style={{ opacity: 0 }}>
            {essay.date}
          </span>
        </div>
        <div className="essay-meta absolute bottom-12 text-white/20 text-xs uppercase tracking-[0.3em]" style={{ opacity: 0 }}>
          Scroll to read
        </div>
      </div>

      {/* Essay body */}
      <div className="max-w-[680px] mx-auto px-8 pb-32">
        {essay.sections.map((section, i) => (
          <div key={i} className="essay-section mb-16">
            {section.heading && (
              <h2 className="section-heading text-lg uppercase tracking-[0.2em] text-white/80 mb-8 font-light" style={{ opacity: 0 }}>
                {section.heading}
              </h2>
            )}
            {section.paragraphs.map((p, j) => (
              <p
                key={j}
                className="section-paragraph text-[15px] leading-[1.9] text-white/70 mb-6 font-light"
                style={{ opacity: 0 }}
              >
                {p}
              </p>
            ))}
          </div>
        ))}

        {/* Works Cited */}
        <div className="works-cited border-t border-white/10 pt-12 mt-16" style={{ opacity: 0 }}>
          <h2 className="text-lg uppercase tracking-[0.2em] text-white/80 mb-8 font-light">
            Works Cited
          </h2>
          <ul className="space-y-3">
            {essay.works_cited.map((cite, i) => (
              <li key={i} className="text-[13px] leading-[1.7] text-white/50 font-light pl-8 -indent-8">
                {cite}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
