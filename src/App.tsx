/**
 * Main application component that sets up the core structure and providers.
 * This component serves as the root of the application, configuring:
 * - Chakra UI theming and style reset
 * - React Router for navigation
 * - Global layout components (Header, Footer)
 * - Interactive elements (ParticleBackground, CustomCursor)
 */

import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { AppRoutes } from './AppRoutes';
import { ParticleBackground } from './components/ParticleBackground';
import { CustomCursor } from './components/CustomCursor';
import theme from './theme';

export default function App() {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Router>
        {/* Main application container with custom scrollbar and cursor styles */}
        <Box
          minH="100vh"
          bg="gray.900"
          color="white"
          position="relative"
          css={{
            // Custom scrollbar styling for modern browsers
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'rgba(0, 0, 0, 0.1)',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'cyan.400',
              borderRadius: '4px',
            },
            cursor: 'none', // Hide default cursor for custom cursor implementation
          }}
        >
          {/* Interactive background effect */}
          <ParticleBackground />
          
          {/* Custom cursor component for enhanced interactivity */}
          <CustomCursor />
          
          {/* Global navigation header */}
          <Header />
          
          {/* Main content area with elevated z-index to appear above background */}
          <Box as="main" position="relative" zIndex={1}>
            <AppRoutes />
          </Box>
          
          {/* Global footer */}
          <Footer />
        </Box>
      </Router>
    </ChakraProvider>
  );
}
