'use client';

import { useEffect, useRef, useCallback } from 'react';
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
  const hasAnimated = useRef(false);
  const router = useRouter();

  const runEntryAnimation = useCallback(() => {
    if (!containerRef.current || hasAnimated.current) return;
    hasAnimated.current = true;

    const rightContent = containerRef.current.querySelectorAll('.animate-in');
    gsap.set(rightContent, { visibility: 'visible', opacity: 0 });

    const tl = gsap.timeline();

    // Title: rolling 3D chars
    const titleEl = containerRef.current.querySelector('.homework-page-title');
    if (titleEl) {
      const titleSplit = SplitText.create(titleEl, { type: 'chars', charsClass: 'rolling-char' });
      gsap.set(titleEl, { perspective: 700, transformStyle: 'preserve-3d', opacity: 1 });
      const depth = -window.innerWidth / 8;
      tl.fromTo(
        titleSplit.chars,
        { rotationX: -90, opacity: 0, transformOrigin: `50% 50% ${depth}px` },
        { rotationX: 0, opacity: 1, transformOrigin: `50% 50% ${depth}px`, stagger: 0.03, duration: 0.8, ease: 'power3.out' },
        0.1
      );
    }

    // Section labels
    const sectionLabels = containerRef.current.querySelectorAll('.section-label');
    sectionLabels.forEach((el, i) => {
      SplitText.create(el, {
        type: 'words,lines',
        linesClass: 'footer-line',
        mask: 'lines',
        onSplit: (self) => {
          gsap.set(el, { opacity: 1 });
          tl.from(self.lines, { yPercent: 100, opacity: 0, duration: 0.7, stagger: 0.05, ease: 'expo.out' }, 0.5 + i * 0.1);
        },
      });
    });

    // Content blocks
    const contentBlocks = containerRef.current.querySelectorAll('.content-block');
    contentBlocks.forEach((el, i) => {
      SplitText.create(el, {
        type: 'words,lines',
        linesClass: 'footer-line',
        mask: 'lines',
        onSplit: (self) => {
          gsap.set(el, { opacity: 1 });
          tl.from(self.lines, { yPercent: 100, opacity: 0, duration: 0.8, stagger: 0.06, ease: 'expo.out' }, 0.7 + i * 0.12);
        },
      });
    });

    // Back link
    const backEl = containerRef.current.querySelector('.back-link');
    if (backEl) {
      const backSplit = SplitText.create(backEl, { type: 'chars', charsClass: 'rolling-char' });
      gsap.set(backEl, { perspective: 700, transformStyle: 'preserve-3d', opacity: 1 });
      tl.fromTo(
        backSplit.chars,
        { rotationX: -90, opacity: 0, transformOrigin: '50% 50% -30px' },
        { rotationX: 0, opacity: 1, transformOrigin: '50% 50% -30px', stagger: 0.03, duration: 0.6, ease: 'power3.out' },
        0.3
      );
    }
  }, []);

  useEffect(() => {
    runEntryAnimation();
  }, [runEntryAnimation]);

  const handleBack = () => {
    if (!containerRef.current) {
      router.push('/');
      return;
    }

    const depth = -window.innerWidth / 8;
    const tl = gsap.timeline({ onComplete: () => router.push('/') });

    const allChars = containerRef.current.querySelectorAll('.rolling-char');
    tl.to(allChars, {
      rotationX: 90, opacity: 0, transformOrigin: `50% 50% ${depth}px`,
      stagger: 0.01, duration: 0.4, ease: 'power3.in',
    }, 0);

    const allLines = containerRef.current.querySelectorAll('.footer-line');
    tl.to(allLines, { yPercent: 100, opacity: 0, duration: 0.4, stagger: 0.02, ease: 'power3.in' }, 0);
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-screen relative"
      style={{ backgroundColor: '#000000', fontFamily: 'Helvetica, Arial, sans-serif', cursor: 'none', overflow: 'hidden' }}
    >
      <div className="h-screen w-full flex relative">
        {/* Back button */}
        <button
          onClick={handleBack}
          className="back-link animate-in text-white text-[22px] uppercase hover:opacity-70 transition-opacity"
          style={{ position: 'absolute', top: '40px', left: '60px', background: 'none', border: 'none', fontFamily: 'inherit', visibility: 'hidden', cursor: 'none', zIndex: 10 }}
        >
          ← BACK
        </button>

        {/* Bottom-left week */}
        <span
          className="section-label animate-in text-white text-[16px] uppercase opacity-40"
          style={{ position: 'absolute', bottom: '40px', left: '60px', visibility: 'hidden', zIndex: 10 }}
        >
          {homework.week}
        </span>

        {/* Top-right class */}
        <span
          className="section-label animate-in text-white text-[18px] uppercase opacity-50"
          style={{ position: 'absolute', top: '40px', right: '60px', visibility: 'hidden', zIndex: 10 }}
        >
          FASHION ANALYSIS
        </span>

        {/* Bottom-right name */}
        <span
          className="section-label animate-in text-white text-[16px] uppercase opacity-40"
          style={{ position: 'absolute', bottom: '40px', right: '60px', visibility: 'hidden', zIndex: 10 }}
        >
          JOSE PEON · PARSONS
        </span>

        {/* Centered content */}
        <div className="flex-1 flex flex-col justify-center items-center" style={{ padding: '40px 60px' }}>
          <div className="flex flex-col" style={{ gap: '36px', maxWidth: '720px', width: '100%' }}>
            <h1
              className="homework-page-title animate-in text-white uppercase leading-none"
              style={{ fontSize: '4vw', margin: 0, visibility: 'hidden' }}
            >
              {homework.title}
            </h1>

            {/* Topic */}
            <div>
              <span className="section-label animate-in text-white text-[14px] uppercase tracking-[0.2em] opacity-40 block" style={{ marginBottom: '12px', visibility: 'hidden' }}>
                TOPIC
              </span>
              <p className="content-block animate-in text-white leading-relaxed" style={{ fontSize: '17px', opacity: 0.75, margin: 0, visibility: 'hidden' }}>
                {homework.topic}
              </p>
            </div>

            {/* Description */}
            <div>
              <span className="section-label animate-in text-white text-[14px] uppercase tracking-[0.2em] opacity-40 block" style={{ marginBottom: '12px', visibility: 'hidden' }}>
                RESPONSE
              </span>
              <p className="content-block animate-in text-white leading-relaxed" style={{ fontSize: '17px', opacity: 0.75, margin: 0, visibility: 'hidden' }}>
                {homework.description}
              </p>
            </div>

            {/* Key Points */}
            {homework.keyPoints.length > 0 && (
              <div>
                <span className="section-label animate-in text-white text-[14px] uppercase tracking-[0.2em] opacity-40 block" style={{ marginBottom: '12px', visibility: 'hidden' }}>
                  KEY POINTS
                </span>
                <ul className="content-block animate-in text-white leading-relaxed list-disc list-inside" style={{ fontSize: '17px', opacity: 0.75, margin: 0, visibility: 'hidden' }}>
                  {homework.keyPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
