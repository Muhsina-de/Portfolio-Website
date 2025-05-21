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
      
      title: 'Remember Together',
      description: 'A gentle, supportive platform for honoring memories and navigating grief. Built with modern technologies to preserve memories, express emotions through art, and foster meaningful community connection. Users can share, and find solace in a compassionate digital space.',
      imageUrl: '/images/proj1-remeberTogether.png',
      deployedUrl: 'https://remember-together.onrender.com/',
      githubUrl: 'https://github.com/KnifeDad/RememberTogether.git ',
    },
    {
      title: 'Ravenest',
      description: "RaveNest is a modern mentorship platform connecting aspiring and experienced developers. Built with React 18, Node.js, Express, and PostgreSQL, it offers mentor matching, session scheduling, secure auth, and a music-inspired UI to foster growth and collaboration.",
      imageUrl: '/images/proj2-ravenest.png',
      deployedUrl: 'https://ravenest-kma6.onrender.com/ ',
      githubUrl: 'https://github.com/Muhsina-de/Ravenest',
    },
    {
      title: 'Ripplet',
      description: 'Ripple API is a RESTful social network backend where users can post thoughts, react, and build friendships. Built with Express.js, MongoDB, and Mongoose, it includes user and thought models, full CRUD operations, and dynamic reaction tracking.',
      imageUrl: '/images/proj3-ripplet.png',
      deployedUrl: 'https://github.com/Muhsina-de/Ripplet',
      githubUrl: 'https://github.com/Muhsina-de/Ripplet',
    },
    // Placeholder projects for future work
    {
      title: 'Cloud Control',
      description: 'Cloud Control is a responsive weather dashboard that shows real-time and 5-day forecasts using the OpenWeather API. It features city search history, server-side data integration, and is deployed via Render for fast, reliable access.',
      imageUrl: '/images/proj5-weather.png',
      deployedUrl: 'https://cloud-control-to-major-tom.onrender.com/',
      githubUrl: 'https://github.com/Muhsina-de/WeatherAPI',
    },
     {
      title: 'Book Shelf',
      description: 'BookShelf is a MERN stack application for discovering and saving books using the Google Books API. It includes user authentication, responsive UI, and a personal collection feature for tracking favorite reads.',
      imageUrl: '/images/proj4-bookShelf.png',
      deployedUrl: 'https://bookshelf-frontend-mp1p.onrender.com/',
      githubUrl: 'https://github.com/Muhsina-de/BookShelf',
    },
    {
      title: 'On Going Project',
      description: 'Another groundbreaking project is on the horizon. This space will soon showcase new technologies and creative solutions.',
      imageUrl: '/images/proj6-employeeTracker.png',
      githubUrl: '#',
      isPlaceholder: true
    },
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
          bgGradient="linear(to-r, rgba(255, 217, 0, 0.92), rgba(255, 217, 0, 0.64))"
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
                    bgGradient="linear(to-r, rgba(255, 217, 0, 0.92), rgba(255, 217, 0, 0.64))"
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