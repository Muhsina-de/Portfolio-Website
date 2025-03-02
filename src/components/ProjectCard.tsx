import { Box, Image, Text, Link, VStack, HStack, Icon, Heading, IconButton } from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { keyframes } from '@emotion/react';
import { useState } from 'react';

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 10px rgba(0, 163, 196, 0.3); }
  50% { box-shadow: 0 0 20px rgba(0, 163, 196, 0.5); }
  100% { box-shadow: 0 0 10px rgba(0, 163, 196, 0.3); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  lightImageUrl?: string;
  deployedUrl?: string;
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
  const [isDarkMode, setIsDarkMode] = useState(true);
  const currentImage = isDarkMode ? imageUrl : (lightImageUrl || imageUrl);
  const hasLightMode = !!lightImageUrl;

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

      <VStack align="start" spacing={4} p={6}>
        <Heading
          size="md"
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
        >
          {title}
        </Heading>
        <Text color="whiteAlpha.900">{description}</Text>
        <HStack spacing={4} pt={2}>
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