/**
 * CustomCursor Component
 * 
 * Creates a custom animated cursor that follows mouse movement.
 * Features:
 * - Smooth cursor movement with spring animation
 * - Outer ring that follows with delay for dynamic effect
 * - Hover state detection for interactive elements
 * - Performance optimized with RAF and cleanup
 */

import { Box } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { keyframes } from '@emotion/react';

// Animation for cursor pulse effect
const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

export const CustomCursor = () => {
  // Refs for cursor elements
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cursorRingRef = useRef<HTMLDivElement | null>(null);
  
  // Animation frame reference for cleanup
  const requestRef = useRef<number | undefined>(undefined);
  
  // Previous time reference for smooth animation
  const previousTimeRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    /**
     * Handles cursor position updates on mouse movement
     */
    const onMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    /**
     * Updates cursor appearance when hovering over interactive elements
     */
    const onMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        cursorRef.current?.classList.add('hover');
        cursorRingRef.current?.classList.add('hover');
      }
    };

    /**
     * Resets cursor appearance when leaving interactive elements
     */
    const onMouseOut = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        cursorRef.current?.classList.remove('hover');
        cursorRingRef.current?.classList.remove('hover');
      }
    };

    /**
     * Animates cursor and ring positions
     * Uses spring animation for smooth movement
     */
    const animate = (time: number) => {
      if (previousTimeRef.current !== undefined) {
        // Move the ring with spring animation
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;

        // Update cursor and ring positions
        if (cursorRef.current && cursorRingRef.current) {
          cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
          cursorRingRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
        }
      }

      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    // Add event listeners
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    requestRef.current = requestAnimationFrame(animate);

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Inner cursor dot */}
      <Box
        ref={cursorRef}
        position="fixed"
        top={-4}
        left={-4}
        width="8px"
        height="8px"
        backgroundColor="cyan.400"
        borderRadius="full"
        pointerEvents="none"
        zIndex={9999}
        transform="translate3d(0, 0, 0)"
        transition="width 0.2s, height 0.2s, top 0.2s, left 0.2s"
        _hover={{
          top: -8,
          left: -8,
          width: "16px",
          height: "16px",
          animation: `${pulseAnimation} 1.5s infinite`,
        }}
      />
      {/* Outer cursor ring */}
      <Box
        ref={cursorRingRef}
        position="fixed"
        top={-16}
        left={-16}
        width="32px"
        height="32px"
        border="2px solid"
        borderColor="cyan.400"
        borderRadius="full"
        pointerEvents="none"
        zIndex={9999}
        opacity={0.5}
        transform="translate3d(0, 0, 0)"
        transition="width 0.2s, height 0.2s, top 0.2s, left 0.2s"
        _hover={{
          opacity: 0.8,
          top: -25,
          left: -25,
          width: "50px",
          height: "50px",
        }}
      />
    </>
  );
}; 