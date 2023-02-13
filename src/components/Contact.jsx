import { useState, useEffect } from "react";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Spinner,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { useForm } from "../Hooks/useForm";
import { useGetContactDates } from "../Hooks/useGetContactDates";

export const Contact = () => {
  const { handleChange, handleSubmit, formState } = useForm({
    name: "",
    email: "",
    message: "",
  });

  const { contactDate, isLoading } = useGetContactDates();

  if (isLoading)
    return (
      <Flex height="85vh" alignItems="center" justifyContent="center">
        <Spinner size="xl" color="green" />
      </Flex>
    );
  return (
    <Container bg="#fff" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="rgba(236,242,246,255)"
          color="black"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contacto</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="black">
                    Rellene el siguiente formulario para contactarnos
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    {contactDate.map((contactDate) => (
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          textAlign="start"
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#000"
                          _hover={{ border: "2px solid #000" }}
                          leftIcon={<MdPhone color="#000" size="20px" />}
                        >
                          {contactDate.phone}
                        </Button>

                        <Button
                          size="md"
                          textAlign="start"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#000"
                          _hover={{ border: "2px solid #000" }}
                          leftIcon={<MdEmail color="#000" size="20px" />}
                        >
                          {contactDate.email}
                        </Button>

                        <Button
                          size="md"
                          textAlign="start"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#000"
                          _hover={{ border: "2px solid #000" }}
                          leftIcon={<MdLocationOn color="#000" size="20px" />}
                        >
                          {contactDate.direction}
                        </Button>
                      </VStack>
                    ))}
                  </Box>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input
                            as="input"
                            type="text"
                            size="md"
                            name="name"
                            onChange={handleChange}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Email</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input
                            as="input"
                            type="text"
                            size="md"
                            name="email"
                            onChange={handleChange}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          name="message"
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          as="textarea"
                          placeholder="Message..."
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="#198754"
                          color="white"
                          _hover={{}}
                          onClick={handleSubmit}
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};
