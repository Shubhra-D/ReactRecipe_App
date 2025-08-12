import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "motion/react";
import { BiMailSend } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MotionBox = motion(Box);
const MotionText = motion(Text);

const Footer = () => {
  return (
    <MotionBox
      as="footer"
      bottom={0}
      left={0}
      width="100%"
      bg="transparent"
      borderTop="1px solid"
      borderColor="gray.200"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      py={4}
    >
      <Container maxW="6xl" bg={"blue.200"}>
        <HStack
          direction="row"
          justify="space-between"
          align="center"
          padding={4}
        >
          <Stack spacing={0}>
            <MotionText
              fontSize="lg"
              fontWeight="bold"
              color="green.600"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Recipe Receptor
            </MotionText>
            <MotionText
              fontSize="sm"
              color="gray.600"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Your gateway to delicious, homemade meals.
            </MotionText>
          </Stack>
          <Flex gap={2}>
            <IconButton
              aria-label="Call support"
              rounded="full"
              colorPalette={"green"}
            >
              <FaWhatsapp />
            </IconButton>
            <IconButton
              aria-label="Call support"
              rounded="full"
              colorPalette={"blue"}
            >
              <FaLinkedin />
            </IconButton>
            <IconButton aria-label="Call support" rounded="full">
              <FaGithub />
            </IconButton>
            <IconButton
              aria-label="Call support"
              rounded="full"
              colorPalette={"green"}
            >
              <BiMailSend />
            </IconButton>
          </Flex>
        </HStack>
        <HStack justifyContent={"space-around"}>
          <VStack>
            <MotionText
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              fontSize="xl"
              fontWeight="bold"
              color={"blue.600"}
            >
              Quick Links
            </MotionText>
            <MotionText
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              color={"blue.500"}
            >
              <Link to={"/login"}>Login</Link>
            </MotionText>
            <MotionText
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              color={"blue.500"}
            >
              <Link to={"about"}>About</Link>
            </MotionText>
            <MotionText
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              color={"blue.500"}
            >
              <Link to={"/"}>Home</Link>
            </MotionText>
          </VStack>
          <VStack>
            <MotionText
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              fontSize="xl"
              fontWeight="bold"
              color={"blue.600"}
            >
              Contact
            </MotionText>
            <MotionText
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              color={"blue.500"}
            >
             📞Phone No. : +91 9260920115
            </MotionText>
            <MotionText
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              color={"blue.500"}
            >
              📧Email : shubhradwivedi21@gmail.com
            </MotionText>
            <MotionText
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              color={"blue.500"}
            >
              🔗LinkedIn : https://www.linkedin.com/in/shubhra-dwivedi-b7b513233/
            </MotionText>
          </VStack>
          <VStack>
            <MotionText
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              fontSize="xl"
              fontWeight="bold"
              color={"blue.600"}
            >
              Suggestions
            </MotionText>
            <MotionText
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              color={"blue.500"}
            >
              Want to Suggest/Add something valueable , We would love to get your Feedback
             <Link to={'/feedback'}><Button bg={'blue.700'} color={'whiteAlpha.900'}>Add Feedback❤️</Button></Link>
            </MotionText>
            
          </VStack>
        </HStack>
      </Container>
    </MotionBox>
  );
};

export default Footer;
