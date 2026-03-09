'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Lenis from 'lenis';
import Description from '@/components/Description';
import Footer from '@/components/Footer';
import { homeworks } from '@/data/homeworks';
import gsap from 'gsap';

export default function Home() {
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const [isExiting, setIsExiting] = useState(false);
  const isExitingRef = useRef(false);
  const exitSlugRef = useRef('');
  const titlesAnimDone = useRef(false);
  const router = useRouter();

  const [titlesReady, setTitlesReady] = useState(false);

  const handleEntryComplete = useCallback(() => {
    setTitlesReady(true);
  }, []);

  const tryNavigate = useCallback(() => {
    if (titlesAnimDone.current) {
      router.push(`/homework/${exitSlugRef.current}`);
    }
  }, [router]);

  const handleHomeworkClick = useCallback((slug: string) => {
    if (isExitingRef.current) return;
    isExitingRef.current = true;
    exitSlugRef.current = slug;
    setIsExiting(true);
  }, []);

  const handleTitlesExitComplete = useCallback(() => {
    titlesAnimDone.current = true;
    tryNavigate();
  }, [tryNavigate]);

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const lenis = new Lenis({
      duration: 2.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.7,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleUserInteraction = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        if (!lenisRef.current) return;

        const windowHeight = window.innerHeight;
        const scrollY = lenisRef.current.scroll;

        const sectionHeight = windowHeight * 1.2;
        const totalSections = homeworks.length + 1;

        const currentSectionIndex = Math.round(scrollY / sectionHeight);
        const targetSection = Math.max(0, Math.min(currentSectionIndex, totalSections - 1));

        let targetScroll: number;

        if (targetSection === 0) {
          targetScroll = 0;
        } else {
          targetScroll = windowHeight * (1.35 + (targetSection - 1) * 1.2);
        }

        const currentDistance = Math.abs(scrollY - targetScroll);

        if (currentDistance < sectionHeight * 0.02) return;

        lenisRef.current.scrollTo(targetScroll, {
          duration: 2.5,
          easing: (t) => 1 - Math.pow(1 - t, 3),
        });
      }, 1500);
    };

    lenis.on('scroll', handleUserInteraction);

    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative cursor-none h-screen flex flex-col overflow-hidden home-main">
      <Description
        projects={homeworks.map(hw => ({
          title: hw.title,
          slug: hw.slug,
        }))}
        isExiting={isExiting}
        onProjectClick={(slug) => handleHomeworkClick(slug)}
        onTitlesExitComplete={handleTitlesExitComplete}
        onEntryComplete={handleEntryComplete}
        onHover={() => {}}
      />
      <Footer isExiting={isExiting} />
    </main>
  );
}

