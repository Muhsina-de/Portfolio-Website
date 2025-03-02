import { Box, Container, Flex, Link } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      as={RouterLink}
      to={to}
      px={4}
      py={2}
      rounded="md"
      position="relative"
      color={isActive ? 'cyan.400' : 'whiteAlpha.900'}
      _hover={{
        textDecoration: 'none',
        color: 'cyan.400',
        _before: {
          transform: 'scaleX(1)',
        },
      }}
      _before={{
        content: '""',
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        height: '2px',
        background: 'linear-gradient(to right, cyan.400, blue.500)',
        transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
        transition: 'transform 0.3s ease',
      }}
    >
      {children}
    </Link>
  );
};

export const Header = () => {
  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={100}
      backdropFilter="blur(10px)"
      bg="rgba(26, 32, 44, 0.8)"
      borderBottom="1px solid"
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
        <Flex py={4} justify="space-between" align="center">
          <Link
            as={RouterLink}
            to="/"
            fontSize="xl"
            fontWeight="bold"
            fontFamily="heading"
            bgGradient="linear(to-r, cyan.400, blue.500)"
            bgClip="text"
            _hover={{
              textDecoration: 'none',
              bgGradient: 'linear(to-r, cyan.500, blue.600)',
            }}
          >
            Guy Ricketts
          </Link>

          <Flex as="nav" gap={8}>
            <NavLink to="/">About</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};