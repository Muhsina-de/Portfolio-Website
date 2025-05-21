import {
  Box,
  Flex,
  Link,
  IconButton,
  HStack,
  useDisclosure,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Links = [
  { label: 'About', to: '/' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Resume', to: '/resume' },
  { label: 'Contact', to: '/contact' },
];

const NavLinkItem = ({ to, children, isMobile, onClick }:any) => {
  const location = useLocation();
  const isActive = location.pathname === to;



  return (
    <Link
      as={RouterLink}
      to={to}
      px={4}
      py={2}
      rounded="md"
      // fontWeight={isActive ? 'bold' : 'normal'}
      // color={isActive ? 'cyan.400' : 'whiteAlpha.900'}
      color={isActive ? 'rgba(255, 217, 0, 0.92)' : 'whiteAlpha.900'}
      // bg={isActive ? useColorModeValue('gray.100', 'gray.800') : 'transparent'}
      _hover={{
        textDecoration: 'none',
        // color: 'cyan.400',
        color: 'rgba(255, 217, 0, 0.92)',
      }}
      onClick={onClick}
      width={isMobile ? '100%' : 'auto'}
    >
      {children}
    </Link>
  );
};

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={100}
      backdropFilter="blur(10px)"
      // bg={useColorModeValue('whiteAlpha.800', 'gray.900')}
    // bg={useColorModeValue('whiteAlpha.800', 'brand.dark')}
    // bg={useColorModeValue('whiteAlpha.800', '#22041b')}
    bg={useColorModeValue('whiteAlpha.800', 'rgba(48, 6, 35, 0.43)')}
    bgGradient={"linear-gradient(135deg,rgba(48, 6, 35, 0.43) 0%,rgba(78, 13, 54, 0.48) 100%)"}
      borderBottom="1px solid"
      borderColor="whiteAlpha.200"
    >
      <Flex
        maxW="7xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
        py={4}
        align="center"
        justify="space-between"
      >
           <Link
             as={RouterLink}
             to="/"
             fontSize="xl"
             fontWeight="bold"
             fontFamily="heading"
            //  bgGradient="linear(to-r, cyan.400, blue.500)"
            bgGradient="linear-gradient(to right, #6C1A8D, #F7B700)"
             bgClip="text"
             _hover={{
               textDecoration: 'none',
              //  bgGradient: 'linear(to-r, cyan.500, blue.600)',
                bgGradient: 'linear(to-r, rgba(108, 26, 141, 0.81),rgba(255, 183, 0, 0.7))',
             }}
           >
             Muhsina Shinwari
           </Link>


        {/* Desktop Nav */}
        <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
          {Links.map((link) => (
            <NavLinkItem key={link.to} to={link.to}>{link.label}</NavLinkItem>
          ))}
        </HStack>

        {/* Mobile Menu Button */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={2} px={4}>
            {Links.map((link) => (
              <NavLinkItem
                key={link.to}
                to={link.to}
                isMobile
                onClick={onClose
                }
              >
                {link.label}
              </NavLinkItem>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
};
