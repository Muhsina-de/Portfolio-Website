/**
 * Custom theme configuration for Chakra UI
 * Defines the global styling, color schemes, typography, and component variants
 */

import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

// Theme configuration object
// Forces dark mode and disables system color mode switching
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  // Global style overrides
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'gray.900',
        color: 'white',
      },
    },
  },
  // Custom color scheme definitions
  colors: {
    gradient: {
      // Custom gradients for backgrounds and accents
      primary: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
      accent: '#00A3C4',
    },
    brand: {
      // Primary accent color used throughout the app
      accent: '#00A3C4',
    },
  },
  // Typography configuration
  fonts: {
    // Modern, geometric font for headings
    heading: '"Space Grotesk", sans-serif',
    // Clean, readable font for body text
    body: '"Inter", sans-serif',
  },
  // Component style overrides
  components: {
    // Custom button styling with hover animation
    Button: {
      baseStyle: {
        _hover: {
          transform: 'translateY(-2px)',
          transition: 'all 0.3s ease',
        },
      },
    },
    // Remove default underline from links
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  },
});

export default theme; 