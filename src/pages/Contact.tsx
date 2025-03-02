import {
  Container,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  FormErrorMessage,
  useToast,
  Box,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { keyframes } from '@emotion/react';

const gradientBg = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

export const Contact = () => {
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log('Form values:', values);
      toast({
        title: 'Message sent!',
        description: 'Thank you for your message. I will get back to you soon.',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
      resetForm();
    },
  });

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
      <Container maxW="xl">
        <VStack spacing={12}>
          <Heading
            as="h2"
            size="2xl"
            textAlign="center"
            bgGradient="linear(to-r, cyan.400, blue.500)"
            bgClip="text"
            letterSpacing="tight"
          >
            Get In Touch
          </Heading>

          <Box
            w="100%"
            p={8}
            borderRadius="2xl"
            bg="whiteAlpha.100"
            backdropFilter="blur(10px)"
            border="1px solid"
            borderColor="whiteAlpha.200"
            _hover={{
              borderColor: "brand.accent",
            }}
            transition="all 0.3s"
          >
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={6}>
                <FormControl isInvalid={formik.touched.name && !!formik.errors.name}>
                  <FormLabel color="whiteAlpha.900">Name</FormLabel>
                  <Input
                    {...formik.getFieldProps('name')}
                    bg="whiteAlpha.100"
                    border="1px solid"
                    borderColor="whiteAlpha.300"
                    _hover={{
                      borderColor: "brand.accent",
                    }}
                    _focus={{
                      borderColor: "brand.accent",
                      boxShadow: "0 0 0 1px #00A3C4",
                    }}
                    color="white"
                  />
                  <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.touched.email && !!formik.errors.email}>
                  <FormLabel color="whiteAlpha.900">Email</FormLabel>
                  <Input
                    {...formik.getFieldProps('email')}
                    type="email"
                    bg="whiteAlpha.100"
                    border="1px solid"
                    borderColor="whiteAlpha.300"
                    _hover={{
                      borderColor: "brand.accent",
                    }}
                    _focus={{
                      borderColor: "brand.accent",
                      boxShadow: "0 0 0 1px #00A3C4",
                    }}
                    color="white"
                  />
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.touched.message && !!formik.errors.message}>
                  <FormLabel color="whiteAlpha.900">Message</FormLabel>
                  <Textarea
                    {...formik.getFieldProps('message')}
                    bg="whiteAlpha.100"
                    border="1px solid"
                    borderColor="whiteAlpha.300"
                    _hover={{
                      borderColor: "brand.accent",
                    }}
                    _focus={{
                      borderColor: "brand.accent",
                      boxShadow: "0 0 0 1px #00A3C4",
                    }}
                    color="white"
                    rows={6}
                  />
                  <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="cyan"
                  size="lg"
                  width="full"
                  isLoading={formik.isSubmitting}
                  loadingText="Sending..."
                  bgGradient="linear(to-r, cyan.400, blue.500)"
                  _hover={{
                    bgGradient: "linear(to-r, cyan.500, blue.600)",
                    transform: "translateY(-2px)",
                    animation: `${pulseAnimation} 2s ease-in-out infinite`,
                  }}
                  _active={{
                    bgGradient: "linear(to-r, cyan.600, blue.700)",
                  }}
                >
                  Send Message
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
      </Container>

      {/* Decorative Elements */}
      <Box
        position="absolute"
        top="15%"
        right="10%"
        w="200px"
        h="200px"
        bg="cyan.400"
        filter="blur(90px)"
        opacity={0.2}
        borderRadius="full"
      />
      <Box
        position="absolute"
        bottom="15%"
        left="10%"
        w="250px"
        h="250px"
        bg="blue.400"
        filter="blur(100px)"
        opacity={0.2}
        borderRadius="full"
      />
    </Box>
  );
}; 