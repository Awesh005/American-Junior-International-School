import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, .prog-card, .bento-cell, .why-card, .testi-card')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    const animateRing = () => {
      setRingPos((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.18,
        y: prev.y + (mousePos.y - prev.y) * 0.18,
      }));
      animationFrameId = requestAnimationFrame(animateRing);
    };
    animateRing();
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePos]);

  return (
    <>
      <div
        className="cursor"
        style={{
          transform: `translate(${mousePos.x - 9}px, ${mousePos.y - 9}px) scale(${isHovering ? 1.8 : 1})`,
          opacity: isHovering ? 0.8 : 0.5,
        }}
      />
      <div
        className="cursor-ring"
        style={{
          transform: `translate(${ringPos.x - 19}px, ${ringPos.y - 19}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
