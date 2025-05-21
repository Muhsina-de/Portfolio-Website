import { Container, Heading, Box, Text, VStack, HStack, Icon, SimpleGrid } from '@chakra-ui/react';
import { MdCheckCircle, MdArticle } from 'react-icons/md';
import { keyframes } from '@emotion/react';

const gradientBg = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

const TimelineCard = ({ title, children }: any) => (
  <Box
    p={{ base: 4, md: 6 }}
    borderRadius="2xl"
    bg="whiteAlpha.100"
    backdropFilter="blur(8px)"
    border="1px solid"
    borderColor="whiteAlpha.200"
    _hover={{
      borderColor: 'brand.accent',
      transform: 'translateY(-5px)',
    }}
    transition="all 0.3s"
    width="100%"
  >
    <VStack align="start" spacing={4}>
      <Heading
        as="h4"
        size="md"
        bgGradient="linear(to-r, rgba(255, 217, 0, 0.92), rgba(255, 217, 0, 0.64))"
        bgClip="text"
      >
        {title}
      </Heading>
      {children}
    </VStack>
  </Box>
);

export const Resume = () => {
  const summary = `Experienced Database Manager with a solid background in software engineering and cloud-based systems. Skilled in managing, optimizing, and integrating CRM platforms, designing scalable databases, and developing full-stack solutions. Proficient in SQL, cloud technologies, front-end and back-end development, and automating workflows to boost operational efficiency. Adept at troubleshooting, performance tuning, and customizing user interfaces for improved user experience. Passionate about creating data-driven, cloud-enabled solutions that support business objectives and drive continuous improvement.`;

  const coreCompetencies = [
    'Cloud-based CRM',
    'Data Analysis',
    'System Integrations',
    'Data Migration',
    'RDBMS, SQL, Normalization',
    'Database Design & Management',
    'Documentation',
    'Workflow Automation',
    'MS Office Suite 365',
    'Fullstack Development',
    'Project Management',
    'Version Control',
    'System Analysis & Design',
    'Microsoft Power Automate',
    'Microsoft Power Apps',
  ];

  const platforms = [
    'MS SQL',
    'ClientTrack',
    'Salesforce NPSP',
    'NoSQL Databases',
    'Blackbaud',
    'Jira',
    'GitHub',
    'Figma',
    'Canvas',
    'HTML/CSS/JS',
  ];

  return (
    <Box
      py={{ base: 12, md: 20 }}
      px={{ base: 4, md: 8 }}
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        bg: 'gradient.primary',
        opacity: 0.7,
        zIndex: -1,
        backgroundSize: '200% 200%',
        animation: `${gradientBg} 15s ease infinite`,
      }}
    >
      <Container maxW="7xl">
        <VStack spacing={{ base: 8, md: 12 }} textAlign="center">
          <Heading
            as="h2"
            size={{ base: 'xl', md: '2xl' }}
           bgGradient="linear(to-r, rgba(255, 217, 0, 0.92), rgba(255, 217, 0, 0.64))"
            bgClip="text"
            letterSpacing="tight"
          >
            Technical Profile
          </Heading>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mt={{ base: 8, md: 12 }}>
          {/* Summary spans two columns on md+ */}
          <Box gridColumn={{ base: 'auto', md: 'span 2' }}>
            <TimelineCard title="Professional Summary">
              <Text color="whiteAlpha.900" fontSize={{ base: 'sm', md: 'md' }}>
                {summary}
              </Text>
            </TimelineCard>
          </Box>

          <TimelineCard title="Core Competencies">
            <VStack align="start" spacing={2} mt={2}>
              {coreCompetencies.map((item, idx) => (
                <HStack key={idx} spacing={3} align="start">
                  <Icon
                    as={MdCheckCircle}
                    boxSize={{ base: 4, md: 5 }}
                    animation={`${float} ${2.5 + idx * 0.2}s ease-in-out infinite`}
                  />
                  <Text color="whiteAlpha.900" fontSize={{ base: 'sm', md: 'md' }}>
                    {item}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </TimelineCard>

          <TimelineCard title="Tools & Platforms">
            <VStack align="start" spacing={2} mt={2}>
              {platforms.map((tool, idx) => (
                <HStack key={idx} spacing={3} align="start">
                  <Icon
                    as={MdArticle}
                    boxSize={{ base: 4, md: 5 }}
                    animation={`${float} ${2.5 + idx * 0.2}s ease-in-out infinite`}
                  />
                  <Text color="whiteAlpha.900" fontSize={{ base: 'sm', md: 'md' }}>
                    {tool}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </TimelineCard>
        </SimpleGrid>

        {/* Decorative Elements */}
        <Box
          display={{ base: 'none', md: 'block' }}
          position="absolute"
          top="10%"
          right="5%"
          w="200px"
          h="200px"
          bg="yellow.400"
          filter="blur(100px)"
          opacity={0.2}
          borderRadius="full"
        />
        <Box
          display={{ base: 'none', md: 'block' }}
          position="absolute"
          bottom="10%"
          left="5%"
          w="250px"
          h="250px"
          bg="yellow.400"
          filter="blur(120px)"
          opacity={0.2}
          borderRadius="full"
        />
      </Container>
    </Box>
  );
};
