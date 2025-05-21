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
        backgroundColor: '#300623',
        color: 'white',
      },
    },
  },
  // Custom color scheme definitions
  colors: {
    gradient: {
      // Custom gradients for backgrounds and accents
      primary: 'linear-gradient(135deg, #2A0A2E 0%, #3F0C2F 70%, #1B0E2D 100%)',
      accent: '#DA2079',
    },
    brand: {
      dark: '#1a202c',
      primary: '#300623',
      secondary: '#4e0d36',
      accent: '#DA2079',
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





