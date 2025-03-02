import { Box, Container, Flex, Link, Icon, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import { keyframes } from '@emotion/react';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const socialLinks = [
  {
    label: 'GitHub',
    icon: FaGithub,
    href: 'https://github.com/KnifeDad',
  },
  {
    label: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/guy-ricketts-5b3246354/',
  },
  {
    label: 'Stack Overflow',
    icon: FaStackOverflow,
    href: 'https://stackoverflow.com/users/29859726/knifedad',
  },
];

export const Footer = () => {
  return (
    <Box
      as="footer"
      py={8}
      position="relative"
      backdropFilter="blur(10px)"
      bg="rgba(26, 32, 44, 0.8)"
      borderTop="1px solid"
      borderColor="whiteAlpha.100"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgGradient: 'linear(to-r, rgba(0,163,196,0.1), rgba(0,0,0,0))',
        backgroundSize: '200% 200%',
        animation: `${gradientAnimation} 15s ease infinite`,
        pointerEvents: 'none',
      }}
    >
      <Container maxW="7xl">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          gap={4}
        >
          <Text color="whiteAlpha.900">
            © {new Date().getFullYear()} Guy Ricketts. All rights reserved.
          </Text>

          <Flex gap={6}>
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                color="whiteAlpha.900"
                _hover={{
                  color: 'cyan.400',
                  transform: 'translateY(-2px)',
                }}
                transition="all 0.3s ease"
              >
                <Icon as={link.icon} boxSize={6} />
              </Link>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}; 