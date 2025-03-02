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
        <Box
          minH="100vh"
          bg="gray.900"
          color="white"
          position="relative"
          css={{
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
            cursor: 'none',
          }}
        >
          <ParticleBackground />
          <CustomCursor />
          <Header />
          <Box as="main" position="relative" zIndex={1}>
            <AppRoutes />
          </Box>
          <Footer />
        </Box>
      </Router>
    </ChakraProvider>
  );
}
