import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

const cursorGlow = keyframes`
  0% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.5); opacity: 0.1; }
  100% { transform: scale(1); opacity: 0.3; }
`;

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <>
      {/* Main cursor */}
      <Box
        position="fixed"
        top="0"
        left="0"
        transform={`translate(${position.x - 5}px, ${position.y - 5}px)`}
        width="10px"
        height="10px"
        bg="cyan.400"
        borderRadius="full"
        pointerEvents="none"
        zIndex="9999"
        transition="transform 0.1s ease-out"
        _before={{
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: isPointer ? '30px' : '20px',
          height: isPointer ? '30px' : '20px',
          border: '2px solid',
          borderColor: 'cyan.400',
          borderRadius: 'full',
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.2s ease-out',
        }}
      />

      {/* Cursor trail */}
      <Box
        position="fixed"
        top="0"
        left="0"
        transform={`translate(${position.x - 20}px, ${position.y - 20}px)`}
        width="40px"
        height="40px"
        borderRadius="full"
        bg="cyan.400"
        opacity="0.1"
        filter="blur(5px)"
        pointerEvents="none"
        zIndex="9998"
        animation={`${cursorGlow} 2s ease-in-out infinite`}
      />
    </>
  );
}; 