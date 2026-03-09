'use client';

import { useEffect, useRef, useState } from 'react';

export default function GlobalCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!dotRef.current) return;
      if (!visible) setVisible(true);
      dotRef.current.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [visible]);

  if (isTouch) return null;

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        width: 12,
        height: 12,
        borderRadius: '50%',
        border: '1px solid white',
        opacity: visible ? 1 : 0,
        willChange: 'transform',
      }}
    />
  );
}
