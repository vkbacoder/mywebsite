import { useEffect, useRef } from 'react';

const CursorGlow = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '400px', // Large radius for soft glow
        height: '400px',
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Increased opacity for better visibility
        borderRadius: '50%',
        pointerEvents: 'none', // Allow clicks to pass through
        transform: 'translate(-50%, -50%)', // Center on cursor
        zIndex: 9999, // Above most things, but check if it blocks interactions (pointer-events handles that)
        filter: 'blur(100px)', // Strong blur for "glow" effect
        mixBlendMode: 'overlay', // Blends nicely with dark background
        transition: 'background-color 0.2s ease'
      }}
    />
  );
};

export default CursorGlow;
