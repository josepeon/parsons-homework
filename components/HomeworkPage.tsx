'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Homework } from '@/types/homework';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

interface HomeworkPageProps {
  homework: Homework;
}

export default function HomeworkPage({ homework }: HomeworkPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const isTransitioning = useRef(false);
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Build flat list of 7 slides: title + 3 prompt A + 3 prompt B
  const slides = [
    { type: 'title' as const },
    ...homework.prompts[0].slides.map((s, i) => ({ type: 'prompt' as const, promptIndex: 0, slideIndex: i, ...s })),
    ...homework.prompts[1].slides.map((s, i) => ({ type: 'prompt' as const, promptIndex: 1, slideIndex: i, ...s })),
  ];

  const totalSlides = slides.length;

  const animateSlideIn = useCallback(() => {
    if (!slideRef.current) return;

    const els = slideRef.current.querySelectorAll('.slide-animate');
    gsap.set(els, { visibility: 'visible', opacity: 0 });

    const tl = gsap.timeline({ onComplete: () => { isTransitioning.current = false; } });

    // Title
    const titleEl = slideRef.current.querySelector('.slide-title');
    if (titleEl) {
      const split = SplitText.create(titleEl, { type: 'chars', charsClass: 'rolling-char' });
      gsap.set(titleEl, { perspective: 700, transformStyle: 'preserve-3d', opacity: 1 });
      const depth = -window.innerWidth / 8;
      tl.fromTo(
        split.chars,
        { rotationX: -90, opacity: 0, transformOrigin: `50% 50% ${depth}px` },
        { rotationX: 0, opacity: 1, transformOrigin: `50% 50% ${depth}px`, stagger: 0.03, duration: 0.8, ease: 'power3.out' },
        0
      );
    }

    // Labels
    const labels = slideRef.current.querySelectorAll('.slide-label');
    labels.forEach((el, i) => {
      SplitText.create(el, {
        type: 'words,lines', linesClass: 'footer-line', mask: 'lines',
        onSplit: (self) => {
          gsap.set(el, { opacity: 1 });
          tl.from(self.lines, { yPercent: 100, opacity: 0, duration: 0.7, stagger: 0.05, ease: 'expo.out' }, 0.3 + i * 0.1);
        },
      });
    });

    // Content
    const content = slideRef.current.querySelectorAll('.slide-content');
    content.forEach((el, i) => {
      SplitText.create(el, {
        type: 'words,lines', linesClass: 'footer-line', mask: 'lines',
        onSplit: (self) => {
          gsap.set(el, { opacity: 1 });
          tl.from(self.lines, { yPercent: 100, opacity: 0, duration: 0.8, stagger: 0.06, ease: 'expo.out' }, 0.5 + i * 0.12);
        },
      });
    });

    // Image
    const imgEl = slideRef.current.querySelector('.slide-image');
    if (imgEl) {
      tl.fromTo(imgEl, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.6, ease: 'power3.out' }, 0.3);
    }
  }, []);

  const animateSlideOut = useCallback((direction: 1 | -1): Promise<void> => {
    return new Promise((resolve) => {
      if (!slideRef.current) { resolve(); return; }

      const tl = gsap.timeline({ onComplete: resolve });
      const xOut = direction === 1 ? -60 : 60;

      const chars = slideRef.current.querySelectorAll('.rolling-char');
      if (chars.length) {
        tl.to(chars, { opacity: 0, x: xOut, duration: 0.3, stagger: 0.01, ease: 'power3.in' }, 0);
      }

      const lines = slideRef.current.querySelectorAll('.footer-line');
      if (lines.length) {
        tl.to(lines, { opacity: 0, x: xOut, duration: 0.3, stagger: 0.02, ease: 'power3.in' }, 0);
      }

      const img = slideRef.current.querySelector('.slide-image');
      if (img) {
        tl.to(img, { opacity: 0, x: xOut, duration: 0.3, ease: 'power3.in' }, 0);
      }

      const rest = slideRef.current.querySelectorAll('.slide-animate');
      tl.to(rest, { opacity: 0, duration: 0.2, ease: 'power2.in' }, 0);
    });
  }, []);

  // Initial animation
  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    // Animate corner elements
    if (!containerRef.current) return;
    const corners = containerRef.current.querySelectorAll('.corner-el');
    gsap.set(corners, { visibility: 'visible', opacity: 0 });
    const tl = gsap.timeline();

    const backEl = containerRef.current.querySelector('.back-link');
    if (backEl) {
      const backSplit = SplitText.create(backEl, { type: 'chars', charsClass: 'rolling-char' });
      gsap.set(backEl, { perspective: 700, transformStyle: 'preserve-3d', opacity: 1 });
      tl.fromTo(backSplit.chars,
        { rotationX: -90, opacity: 0, transformOrigin: '50% 50% -30px' },
        { rotationX: 0, opacity: 1, transformOrigin: '50% 50% -30px', stagger: 0.03, duration: 0.6, ease: 'power3.out' }, 0.3
      );
    }

    corners.forEach((el) => {
      if (el.classList.contains('back-link')) return;
      SplitText.create(el, {
        type: 'words,lines', linesClass: 'footer-line', mask: 'lines',
        onSplit: (self) => {
          gsap.set(el, { opacity: 1 });
          tl.from(self.lines, { yPercent: 100, opacity: 0, duration: 0.7, stagger: 0.05, ease: 'expo.out' }, 0.4);
        },
      });
    });

    // Arrows
    const arrows = containerRef.current.querySelectorAll('.nav-arrow');
    tl.fromTo(arrows, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: 'power2.out' }, 0.6);

    // Slide counter
    const counter = containerRef.current.querySelector('.slide-counter');
    if (counter) {
      tl.fromTo(counter, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: 'power2.out' }, 0.6);
    }

    // First slide content
    setTimeout(() => animateSlideIn(), 200);
  }, [animateSlideIn]);

  const goToSlide = useCallback(async (direction: 1 | -1) => {
    if (isTransitioning.current) return;
    const next = currentSlide + direction;
    if (next < 0 || next >= totalSlides) return;

    isTransitioning.current = true;
    await animateSlideOut(direction);
    setCurrentSlide(next);
  }, [currentSlide, totalSlides, animateSlideOut]);

  // Animate in new slide after state change
  useEffect(() => {
    if (!hasAnimated.current) return;
    // Small delay to let React render the new slide content
    const timer = setTimeout(() => animateSlideIn(), 50);
    return () => clearTimeout(timer);
  }, [currentSlide, animateSlideIn]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goToSlide(1);
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') goToSlide(-1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goToSlide]);

  const handleBack = () => {
    if (!containerRef.current) { router.push('/'); return; }
    const depth = -window.innerWidth / 8;
    const tl = gsap.timeline({ onComplete: () => router.push('/') });
    const allChars = containerRef.current.querySelectorAll('.rolling-char');
    tl.to(allChars, { rotationX: 90, opacity: 0, transformOrigin: `50% 50% ${depth}px`, stagger: 0.01, duration: 0.4, ease: 'power3.in' }, 0);
    const allLines = containerRef.current.querySelectorAll('.footer-line');
    tl.to(allLines, { yPercent: 100, opacity: 0, duration: 0.4, stagger: 0.02, ease: 'power3.in' }, 0);
    const rest = containerRef.current.querySelectorAll('.slide-animate, .nav-arrow, .slide-counter');
    tl.to(rest, { opacity: 0, duration: 0.3, ease: 'power2.in' }, 0);
  };

  const current = slides[currentSlide];

  // Determine which prompt section we're in for the bottom-left label
  const getSectionLabel = () => {
    if (current.type === 'title') return homework.week;
    if (current.type === 'prompt') {
      const p = homework.prompts[current.promptIndex];
      return `${p.label} · SLIDE ${current.slideIndex + 1}/3`;
    }
    return '';
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-screen relative"
      style={{ backgroundColor: '#000000', fontFamily: 'Helvetica, Arial, sans-serif', cursor: 'none', overflow: 'hidden' }}
    >
      {/* Corner elements */}
      <button
        onClick={handleBack}
        className="back-link corner-el text-white text-[22px] uppercase hover:opacity-70 transition-opacity"
        style={{ position: 'absolute', top: '40px', left: '60px', background: 'none', border: 'none', fontFamily: 'inherit', visibility: 'hidden', cursor: 'none', zIndex: 10 }}
      >
        ← BACK
      </button>

      <span
        className="corner-el text-white text-[16px] uppercase opacity-40"
        style={{ position: 'absolute', bottom: '40px', left: '60px', visibility: 'hidden', zIndex: 10 }}
      >
        {getSectionLabel()}
      </span>

      <span
        className="corner-el text-white text-[18px] uppercase opacity-50"
        style={{ position: 'absolute', top: '40px', right: '60px', visibility: 'hidden', zIndex: 10 }}
      >
        FASHION ANALYSIS
      </span>

      <span
        className="corner-el text-white text-[16px] uppercase opacity-40"
        style={{ position: 'absolute', bottom: '40px', right: '60px', visibility: 'hidden', zIndex: 10 }}
      >
        JOSE PEON · PARSONS
      </span>

      {/* Slide counter */}
      <div
        className="slide-counter text-white text-[14px] uppercase tracking-[0.2em] opacity-30"
        style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', zIndex: 10, opacity: 0 }}
      >
        {currentSlide + 1} / {totalSlides}
      </div>

      {/* Navigation arrows */}
      {currentSlide > 0 && (
        <button
          onClick={() => goToSlide(-1)}
          className="nav-arrow text-white hover:opacity-100 transition-opacity"
          style={{
            position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)',
            background: 'none', border: 'none', fontSize: '36px', cursor: 'none', zIndex: 10, opacity: 0.4,
          }}
        >
          ‹
        </button>
      )}
      {currentSlide < totalSlides - 1 && (
        <button
          onClick={() => goToSlide(1)}
          className="nav-arrow text-white hover:opacity-100 transition-opacity"
          style={{
            position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)',
            background: 'none', border: 'none', fontSize: '36px', cursor: 'none', zIndex: 10, opacity: 0.4,
          }}
        >
          ›
        </button>
      )}

      {/* Slide content area */}
      <div ref={slideRef} key={currentSlide} className="h-screen w-full flex flex-col justify-center items-center" style={{ padding: '100px 100px' }}>
        {current.type === 'title' ? (
          /* Title slide */
          <div className="flex flex-col items-center text-center" style={{ gap: '24px' }}>
            <h1
              className="slide-title slide-animate text-white uppercase leading-none"
              style={{ fontSize: '4vw', margin: 0, visibility: 'hidden' }}
            >
              {homework.title}
            </h1>
            <span
              className="slide-label slide-animate text-white text-[20px] uppercase tracking-[0.2em] opacity-50"
              style={{ visibility: 'hidden' }}
            >
              {homework.week}
            </span>
            <span
              className="slide-label slide-animate text-white text-[16px] uppercase tracking-[0.15em] opacity-30"
              style={{ visibility: 'hidden', marginTop: '16px' }}
            >
              JOSE PEON · FASHION ANALYSIS · PARSONS
            </span>
          </div>
        ) : current.type === 'prompt' ? (
          /* Prompt slide */
          <div className="flex flex-row items-center" style={{ gap: '60px', width: '100%', height: '100%' }}>
            {/* Image on left */}
            {current.image && (
              <div
                className="slide-image slide-animate rounded-[1vw] overflow-hidden relative flex-shrink-0"
                style={{ width: '35%', aspectRatio: current.aspectRatio ?? 3 / 4, maxHeight: '75vh', visibility: 'hidden', opacity: 0 }}
              >
                <img src={current.image} alt={current.title} className="w-full h-full object-cover" />
              </div>
            )}

            {/* Content on right */}
            <div className="flex flex-col justify-center" style={{ gap: '24px', flex: 1 }}>
              {/* Prompt label */}
              <span
                className="slide-label slide-animate text-white text-[13px] uppercase tracking-[0.25em] opacity-40"
                style={{ visibility: 'hidden' }}
              >
                {homework.prompts[current.promptIndex].label}
              </span>

              {/* Slide title */}
              <h2
                className="slide-title slide-animate text-white uppercase leading-tight"
                style={{ fontSize: '3vw', margin: 0, visibility: 'hidden' }}
              >
                {current.title}
              </h2>

              {/* Prompt question */}
              <p
                className="slide-content slide-animate text-white leading-relaxed italic"
                style={{ fontSize: '15px', opacity: 0.45, margin: 0, visibility: 'hidden', maxWidth: '600px' }}
              >
                &ldquo;{homework.prompts[current.promptIndex].question}&rdquo;
              </p>

              {/* Content */}
              <p
                className="slide-content slide-animate text-white leading-relaxed"
                style={{ fontSize: '18px', opacity: 0.75, margin: 0, visibility: 'hidden', maxWidth: '600px' }}
              >
                {current.content}
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
