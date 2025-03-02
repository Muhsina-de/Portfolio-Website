import { Container, Heading, Box, Text, VStack, HStack, Icon } from '@chakra-ui/react';
import { MdCheckCircle, MdSchool } from 'react-icons/md';
import { keyframes } from '@emotion/react';

const gradientBg = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

export const Resume = () => {
  const education = {
    school: 'University of Connecticut School of Engineering',
    program: 'Full Stack Web Development Bootcamp',
    period: '2024 - 2025',
    highlights: [
      'Intensive full-stack development program',
      'Rapid acquisition of modern web technologies',
      'Hands-on project-based learning',
      'Collaborative development experience'
    ]
  };

  const frontEndSkills = [
    'React.js',
    'TypeScript',
    'HTML5',
    'CSS3',
    'JavaScript (ES6+)',
    'Responsive Design',
    'Bootstrap',
    'Chakra UI',
  ];

  const backEndSkills = [
    'Node.js',
    'Express.js',
    'MongoDB',
    'RESTful APIs',
    'MySQL',
    'Server-Side APIs',
  ];

  const tools = [
    'Git',
    'VS Code',
    'npm',
    'GitHub',
    'Jest',
    'Command Line',
  ];

  const EducationSection = () => (
    <Box
      p={6}
      borderRadius="xl"
      bg="whiteAlpha.100"
      backdropFilter="blur(8px)"
      border="1px solid"
      borderColor="whiteAlpha.200"
      _hover={{
        borderColor: "brand.accent",
        transform: "translateY(-5px)",
      }}
      transition="all 0.3s"
    >
      <VStack align="start" spacing={4}>
        <Heading
          as="h4"
          size="md"
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
        >
          Education
        </Heading>
        <VStack align="start" spacing={2}>
          <Text color="whiteAlpha.900" fontWeight="bold">{education.school}</Text>
          <Text color="cyan.400">{education.program}</Text>
          <Text color="whiteAlpha.700">{education.period}</Text>
          <VStack align="start" spacing={2} mt={2}>
            {education.highlights.map((highlight, index) => (
              <HStack key={index} spacing={3}>
                <Icon
                  as={MdSchool}
                  color="cyan.400"
                  boxSize={5}
                  animation={`${float} ${3 + index * 0.5}s ease-in-out infinite`}
                />
                <Text color="whiteAlpha.900">{highlight}</Text>
              </HStack>
            ))}
          </VStack>
        </VStack>
      </VStack>
    </Box>
  );

  const SkillSection = ({ title, skills }: { title: string; skills: string[] }) => (
    <Box
      p={6}
      borderRadius="xl"
      bg="whiteAlpha.100"
      backdropFilter="blur(8px)"
      border="1px solid"
      borderColor="whiteAlpha.200"
      _hover={{
        borderColor: "brand.accent",
        transform: "translateY(-5px)",
      }}
      transition="all 0.3s"
    >
      <VStack align="start" spacing={4}>
        <Heading
          as="h4"
          size="md"
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
        >
          {title}
        </Heading>
        <VStack align="start" spacing={3} width="100%">
          {skills.map((skill, index) => (
            <HStack key={index} spacing={3}>
              <Icon
                as={MdCheckCircle}
                color="cyan.400"
                boxSize={5}
                animation={`${float} ${3 + index * 0.5}s ease-in-out infinite`}
              />
              <Text color="whiteAlpha.900">{skill}</Text>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Box>
  );

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
      <Container maxW="4xl">
        <VStack spacing={12}>
          <VStack spacing={6} textAlign="center">
            <Heading
              as="h2"
              size="2xl"
              bgGradient="linear(to-r, cyan.400, blue.500)"
              bgClip="text"
              letterSpacing="tight"
            >
              Technical Profile
            </Heading>
          </VStack>

          <Box width="100%">
            <VStack spacing={8}>
              <EducationSection />
              <SkillSection title="Front-End Development" skills={frontEndSkills} />
              <SkillSection title="Back-End Development" skills={backEndSkills} />
              <SkillSection title="Tools & Technologies" skills={tools} />
            </VStack>
          </Box>
        </VStack>
      </Container>

      {/* Decorative Elements */}
      <Box
        position="absolute"
        top="10%"
        right="5%"
        w="200px"
        h="200px"
        bg="cyan.400"
        filter="blur(100px)"
        opacity={0.2}
        borderRadius="full"
      />
      <Box
        position="absolute"
        bottom="10%"
        left="5%"
        w="250px"
        h="250px"
        bg="blue.400"
        filter="blur(120px)"
        opacity={0.2}
        borderRadius="full"
      />
    </Box>
  );
}; 