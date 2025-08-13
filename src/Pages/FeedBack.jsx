import { toaster} from '../components/ui/toaster'
import {
  Box,
  Button,
  Container,
  Input,
  Textarea,
  VStack,
  For,
  Stack,
  Fieldset,
  Field,
  NativeSelect,
  Flex,
} from "@chakra-ui/react";
import { motion } from "motion/react";
import { useState } from "react";
import bgPic from '../assets/feed.png'

const MotionBox = motion(Box);

const Feedback = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "Suggestion",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📬 Feedback submitted:", form);
    setForm({ name: "", email: "", type: "Suggestion", message: "" });
  };

  return (
    <Container maxW="7xl" py={12}>
  <Flex minH="100vh" gap={6}>
    {/* Form Section */}
    <MotionBox
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      as="form"
      onSubmit={handleSubmit}
      bg="white"
      p={8}
      rounded="xl"
      shadow="lg"
      flex="1"
    >
      <VStack spacing={4} align="stretch">
        <Fieldset.Root size="lg">
          <Stack>
            <Fieldset.Legend>Feedback Form</Fieldset.Legend>
            <Fieldset.HelperText>
              Please provide your contact details below.
            </Fieldset.HelperText>
          </Stack>

          <Fieldset.Content>
            <Field.Root>
              <Field.Label>Name</Field.Label>
              <Input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </Field.Root>

            <Field.Root>
              <Field.Label>Email address</Field.Label>
              <Input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
              />
            </Field.Root>

            <Field.Root>
              <Field.Label>Feedback Type</Field.Label>
              <NativeSelect.Root>
                <NativeSelect.Field name="type" value={form.type} onChange={handleChange}>
                  <For each={["Suggestion", "Recipe", "Ingredient", "Others"]}>
                    {(item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    )}
                  </For>
                </NativeSelect.Field>
                <NativeSelect.Indicator />
              </NativeSelect.Root>
            </Field.Root>

            <Field.Root>
              <Field.Label>Message</Field.Label>
              <Textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your feedback here..."
                rows={5}
              />
            </Field.Root>
          </Fieldset.Content>

          <Button
            type="submit"
            size="md"
            colorScheme="teal"
            onClick={() =>
              toaster.create({
                description: "Feedback Submitted",
                type: "info",
              })
            }
          >
            Submit Feedback
          </Button>
        </Fieldset.Root>
      </VStack>
    </MotionBox>

    {/* Image Section */}
    <MotionBox
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      flex="1"
      bgImage={`url(${bgPic})`}
      bgSize="cover"
      bgPosition="center -40px"
      rounded="xl"
      shadow="lg"
    />
  </Flex>
</Container>

  );
};

export default Feedback;
