import { Box, Container, Heading, Text, VStack, Image, Flex } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import profileArtImg from '../assets/profile-art.jpg?url';

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const glowPulse = keyframes`
  0% { box-shadow: 0 0 30px rgba(49, 151, 149, 0.3); }
  50% { box-shadow: 0 0 50px rgba(236, 138, 54, 0.4); }
  100% { box-shadow: 0 0 30px rgba(49, 151, 149, 0.3); }
`;

const textReveal = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const AboutMe = () => {
  return (
    <Box
      py={12}
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
      }}
    >
      <Container maxW="6xl">
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center" maxW="3xl">
            <Heading
              as="h1"
              size="4xl"
              bgGradient="linear(to-r, teal.400, orange.400)"
              bgClip="text"
              letterSpacing="tight"
              animation={`${textReveal} 1s ease-out`}
            >
              Guy Ricketts
            </Heading>
            <Text
              fontSize="2xl"
              color="whiteAlpha.900"
              animation={`${textReveal} 1s ease-out 0.3s forwards`}
              opacity="0"
            >
              Full Stack Developer & Creative Problem Solver
            </Text>
          </VStack>

          <Flex
            direction={{ base: 'column', lg: 'row' }}
            gap={6}
            align="center"
            justify="center"
          >
            <Box
              position="relative"
              animation={`${float} 6s ease-in-out infinite`}
            >
              <Box
                width={["220px", "260px", "320px"]}
                height={["220px", "260px", "320px"]}
                position="relative"
                animation={`${glowPulse} 4s ease-in-out infinite`}
                borderRadius="full"
                overflow="hidden"
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  bg: 'linear-gradient(45deg, rgba(49,151,149,0.2), rgba(236,138,54,0.2))',
                  zIndex: 2,
                  borderRadius: 'full',
                }}
              >
                <Image
                  src={profileArtImg}
                  alt="Guy Ricketts - Stylized Portrait"
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  borderRadius="full"
                />
              </Box>
            </Box>

            <VStack
              align="start"
              spacing={4}
              maxW="xl"
              animation={`${textReveal} 1s ease-out 0.6s forwards`}
              opacity="0"
            >
              <Box
                p={5}
                borderRadius="2xl"
                bg="whiteAlpha.100"
                backdropFilter="blur(8px)"
                border="1px solid"
                borderColor="whiteAlpha.200"
                _hover={{
                  borderColor: "teal.400",
                  transform: "translateY(-5px)",
                }}
                transition="all 0.3s"
              >
                <VStack align="start" spacing={3}>
                  <Heading
                    as="h2"
                    size="lg"
                    bgGradient="linear(to-r, teal.400, orange.400)"
                    bgClip="text"
                  >
                    About Me
                  </Heading>
                  <Text color="whiteAlpha.900" lineHeight="tall">
                    I'm Guy Ricketts, known as KnifeDad across platforms, a Full Stack Developer merging technical expertise with creative vision. 
                    As the founder of The FOOKING Gaming Community, I've built an inclusive space where passion for gaming brings people together.
                  </Text>
                  <Text color="whiteAlpha.900" lineHeight="tall">
                    Life has shaped me in profound ways - I'm a devoted father to Adorian and Riley, and a loving dogfather to my French Bulldogs, 
                    CJ and Chloe. Following the loss of my beloved wife to breast cancer, I've found strength and healing through creative expression, 
                    channeling emotions into code, poetry, art, and music.
                  </Text>
                  <Text color="whiteAlpha.900" lineHeight="tall">
                    My love for technical death metal and progressive metal mirrors my development philosophy - where precision meets innovation. 
                    I'm particularly drawn to JRPGs for their rich storytelling and complex systems, which inspires how I approach creating 
                    immersive digital experiences. Every project is an opportunity to blend technical excellence with creative vision.
                  </Text>
                </VStack>
              </Box>
            </VStack>
          </Flex>
        </VStack>
      </Container>

      {/* Decorative Elements */}
      <Box
        position="absolute"
        top="15%"
        right="10%"
        w="300px"
        h="300px"
        bg="teal.400"
        filter="blur(120px)"
        opacity={0.2}
        borderRadius="full"
        animation={`${float} 10s ease-in-out infinite`}
      />
      <Box
        position="absolute"
        bottom="15%"
        left="10%"
        w="350px"
        h="350px"
        bg="orange.400"
        filter="blur(130px)"
        opacity={0.2}
        borderRadius="full"
        animation={`${float} 12s ease-in-out infinite`}
      />
    </Box>
  );
};