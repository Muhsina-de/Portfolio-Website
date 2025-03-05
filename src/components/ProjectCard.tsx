/**
 * ProjectCard Component
 * 
 * A reusable card component that displays project information with interactive features:
 * - Hover animations with glow effect
 * - Image toggle between light and dark mode (when available)
 * - Links to live demo and GitHub repository
 * - Smooth transitions and animations
 */

import { Box, Image, Text, Link, VStack, HStack, Icon, Heading, IconButton } from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { keyframes } from '@emotion/react';
import { useState } from 'react';

// Animation for the card's glow effect
const glowAnimation = keyframes`
  0% { box-shadow: 0 0 10px rgba(0, 163, 196, 0.3); }
  50% { box-shadow: 0 0 20px rgba(0, 163, 196, 0.5); }
  100% { box-shadow: 0 0 10px rgba(0, 163, 196, 0.3); }
`;

// Animation for smooth image transitions
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Type definitions for component props
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  lightImageUrl?: string;  // Optional light mode image
  deployedUrl?: string;    // Optional live demo URL
  githubUrl: string;
}

export const ProjectCard = ({ 
  title, 
  description, 
  imageUrl, 
  lightImageUrl, 
  deployedUrl, 
  githubUrl 
}: ProjectCardProps) => {
  // State for managing dark/light mode toggle
  const [isDarkMode, setIsDarkMode] = useState(true);
  const currentImage = isDarkMode ? imageUrl : (lightImageUrl || imageUrl);
  const hasLightMode = !!lightImageUrl;

  // Handler for theme toggle
  const handleToggle = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="2xl"
      overflow="hidden"
      bg="whiteAlpha.100"
      backdropFilter="blur(8px)"
      borderColor="whiteAlpha.200"
      transition="all 0.3s ease-in-out"
      _hover={{
        transform: 'translateY(-8px)',
        borderColor: 'brand.accent',
        animation: `${glowAnimation} 2s ease-in-out infinite`,
      }}
    >
      {/* Image container with theme toggle */}
      <Box position="relative" overflow="hidden">
        <Box
          position="relative"
          height="200px"
          width="100%"
        >
          <Image
            key={currentImage}
            src={currentImage}
            alt={title}
            position="absolute"
            top={0}
            left={0}
            height="100%"
            width="100%"
            objectFit={title === "AutoDOCulus" ? "contain" : "cover"}
            fallbackSrc="https://via.placeholder.com/400x200"
            animation={`${fadeIn} 0.3s ease-in-out`}
            transition="transform 0.3s ease-in-out"
            _hover={{
              transform: 'scale(1.05)',
            }}
          />
        </Box>
        {/* Theme toggle button - only shown if light mode image is available */}
        {hasLightMode && (
          <IconButton
            aria-label="Toggle theme"
            icon={isDarkMode ? <MdLightMode /> : <MdDarkMode />}
            position="absolute"
            top={4}
            right={4}
            size="md"
            colorScheme={isDarkMode ? "yellow" : "blue"}
            onClick={handleToggle}
            opacity={0.8}
            _hover={{ 
              opacity: 1,
              transform: 'scale(1.1)'
            }}
            transition="all 0.2s ease-in-out"
            zIndex={2}
          />
        )}
        {/* Hover overlay gradient */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="gradient.card"
          opacity={0}
          transition="opacity 0.3s ease-in-out"
          _groupHover={{
            opacity: 0.2,
          }}
        />
      </Box>

      {/* Project information section */}
      <VStack align="start" spacing={4} p={6}>
        <Heading
          size="md"
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
        >
          {title}
        </Heading>
        <Text color="whiteAlpha.900">{description}</Text>
        
        {/* Project links section */}
        <HStack spacing={4} pt={2}>
          {/* Live demo link - only shown if deployedUrl is provided */}
          {deployedUrl && (
            <Link
              href={deployedUrl}
              isExternal
              display="flex"
              alignItems="center"
              color="brand.accent"
              _hover={{
                color: 'cyan.400',
                transform: 'translateY(-2px)',
              }}
              transition="all 0.2s"
            >
              <HStack>
                <Icon as={FaExternalLinkAlt} />
                <Text>Live Demo</Text>
              </HStack>
            </Link>
          )}
          {/* GitHub repository link */}
          <Link
            href={githubUrl}
            isExternal
            display="flex"
            alignItems="center"
            color="brand.accent"
            _hover={{
              color: 'cyan.400',
              transform: 'translateY(-2px)',
            }}
            transition="all 0.2s"
          >
            <HStack>
              <Icon as={FaGithub} />
              <Text>GitHub</Text>
            </HStack>
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
}; 