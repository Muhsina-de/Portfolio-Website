import { Container, Heading, SimpleGrid, Box, Text, VStack, Icon } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { ProjectCard } from '../components/ProjectCard';
import { FaCode } from 'react-icons/fa';

const gradientBg = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

export const Portfolio = () => {
  const projects = [
    {
      title: 'Procrastination Station',
      description: 'A sleek, modern task management application with a focus on user experience and productivity. Built with vanilla JavaScript, CSS, and HTML. Features include task management, smart organization, visual progress tracking, and dark/light mode.',
      imageUrl: '/images/procrastination-station-dark-mode.png',
      lightImageUrl: '/images/procrastination-station-light-mode.png',
      githubUrl: 'https://github.com/KnifeDad/Procrastination-Station',
    },
    {
      title: 'Cloud Control to Major Tom',
      description: 'A modern weather dashboard application providing real-time weather conditions and 5-day forecasts worldwide. Built with TypeScript, Node.js, Express.js, and integrates the OpenWeather API. Features Bootstrap 5 UI, custom animations, and responsive design.',
      imageUrl: '/images/cloud-control-tokyo.png',
      deployedUrl: 'https://cloud-control-to-major-tom.onrender.com/',
      githubUrl: 'https://github.com/KnifeDad/Cloud-Control-to-Major-Tom.git',
    },
    {
      title: 'AutoDOCulus',
      description: 'A command-line application that dynamically generates professional README.md files for projects. Built with Node.js and Inquirer, it streamlines documentation by prompting users for project details and automatically generating well-structured README files with essential sections.',
      imageUrl: '/images/autodoculus-preview.png',
      deployedUrl: 'https://drive.google.com/file/d/1v6dhbXnMUriIFEPFtCMY4cYMiZ5L-vFM/view',
      githubUrl: 'https://github.com/KnifeDad/AutoDOCulus.git',
    },
    // Placeholder projects for future work
    {
      title: 'Project Coming Soon',
      description: 'An exciting new project is in development. Stay tuned for an innovative solution that pushes the boundaries of web development and user experience.',
      imageUrl: 'placeholder',
      githubUrl: '#',
      isPlaceholder: true
    },
    {
      title: 'Future Project',
      description: 'Another groundbreaking project is on the horizon. This space will soon showcase new technologies and creative solutions.',
      imageUrl: 'placeholder',
      githubUrl: '#',
      isPlaceholder: true
    },
    {
      title: 'In Development',
      description: 'A new project is being crafted with cutting-edge technologies and innovative approaches. Check back soon for updates.',
      imageUrl: 'placeholder',
      githubUrl: '#',
      isPlaceholder: true
    }
  ];

  return (
    <Box
      py={20}
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bg: 'gradient.primary',
        opacity: 0.7,
        zIndex: -1,
        backgroundSize: '200% 200%',
        animation: `${gradientBg} 15s ease infinite`,
      }}
    >
      <Container maxW="6xl">
        <Heading
          as="h2"
          size="2xl"
          textAlign="center"
          mb={12}
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
          letterSpacing="tight"
        >
          Digital Forge
        </Heading>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={8}
          px={[4, 6, 8]}
        >
          {projects.map((project, index) => (
            project.isPlaceholder ? (
              <Box
                key={index}
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
                }}
              >
                <Box
                  height="200px"
                  width="100%"
                  position="relative"
                  bg="gray.800"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  _before={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to right, transparent 0%, rgba(0, 163, 196, 0.1) 50%, transparent 100%)',
                    backgroundSize: '2000px 100%',
                    animation: `${shimmer} 3s linear infinite`,
                  }}
                >
                  <Icon
                    as={FaCode}
                    boxSize={12}
                    color="cyan.400"
                    opacity={0.5}
                  />
                </Box>
                <VStack align="start" spacing={4} p={6}>
                  <Heading
                    size="md"
                    bgGradient="linear(to-r, cyan.400, blue.500)"
                    bgClip="text"
                  >
                    {project.title}
                  </Heading>
                  <Text color="whiteAlpha.900">{project.description}</Text>
                </VStack>
              </Box>
            ) : (
              <ProjectCard key={index} {...project} />
            )
          ))}
        </SimpleGrid>
      </Container>

      {/* Decorative Elements */}
      <Box
        position="absolute"
        top="10%"
        right="5%"
        w="150px"
        h="150px"
        bg="cyan.400"
        filter="blur(80px)"
        opacity={0.2}
        borderRadius="full"
      />
      <Box
        position="absolute"
        bottom="10%"
        left="5%"
        w="200px"
        h="200px"
        bg="blue.400"
        filter="blur(100px)"
        opacity={0.2}
        borderRadius="full"
      />
    </Box>
  );
}; 