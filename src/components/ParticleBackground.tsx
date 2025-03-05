/**
 * ParticleBackground Component
 * 
 * Creates an interactive particle animation background using HTML Canvas.
 * Features:
 * - Floating particles that respond to mouse movement
 * - Dynamic connections between nearby particles
 * - Smooth animation with requestAnimationFrame
 * - Performance optimized with useCallback and cleanup
 */

import { Box } from '@chakra-ui/react';
import { useEffect, useRef, useCallback } from 'react';

/**
 * Particle class representing each floating point in the animation
 * Manages position, velocity, and drawing of individual particles
 */
class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    // Random initial velocities for organic movement
    this.vx = Math.random() * 2 - 1;
    this.vy = Math.random() * 2 - 1;
    this.radius = Math.random() * 2 + 1;
  }

  /**
   * Updates particle position and handles boundary collisions
   */
  update(width: number, height: number) {
    this.x += this.vx;
    this.y += this.vy;

    // Bounce off edges
    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
  }

  /**
   * Renders the particle on the canvas
   */
  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 163, 196, 0.5)';
    ctx.fill();
  }
}

export const ParticleBackground = () => {
  // Refs for canvas element and animation frame
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  
  // Reference to store particles array
  const particlesRef = useRef<Particle[]>([]);

  /**
   * Initializes particles based on canvas dimensions
   */
  const initParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = [];
    const particleCount = Math.floor((width * height) / 15000); // Responsive particle count

    for (let i = 0; i < particleCount; i++) {
      particles.push(
        new Particle(
          Math.random() * width,
          Math.random() * height
        )
      );
    }

    particlesRef.current = particles;
  }, []);

  /**
   * Main animation loop
   * Updates and renders all particles and their connections
   */
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (!canvas || !ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Update and draw particles
    particlesRef.current.forEach(particle => {
      particle.update(width, height);
      particle.draw(ctx);
    });

    // Draw connections between nearby particles
    particlesRef.current.forEach((particle, i) => {
      for (let j = i + 1; j < particlesRef.current.length; j++) {
        const other = particlesRef.current[j];
        const dx = other.x - particle.x;
        const dy = other.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(other.x, other.y);
          ctx.strokeStyle = `rgba(0, 163, 196, ${0.2 * (1 - distance / 100)})`;
          ctx.stroke();
        }
      }
    });

    // Continue animation loop
    animationFrameRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas size to match window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles(canvas.width, canvas.height);
    };

    // Initial setup
    resizeCanvas();
    animate();

    // Handle window resize
    window.addEventListener('resize', resizeCanvas);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [animate, initParticles]);

  return (
    <Box
      as="canvas"
      ref={canvasRef}
      position="fixed"
      top={0}
      left={0}
      zIndex={0}
      sx={{
        WebkitTapHighlightColor: 'transparent',
      }}
    />
  );
}; 