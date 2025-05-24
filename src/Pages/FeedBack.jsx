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
} from "@chakra-ui/react";
import { motion } from "motion/react";
import { useState } from "react";

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
    <Container maxW="lg" py={12}>
      <MotionBox
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        as="form"
        onSubmit={handleSubmit}
        bg="white"
        p={6}
        rounded="xl"
        shadow="lg"
      >
        <VStack spacing={4} align="stretch">
          <Fieldset.Root size="lg" maxW="md">
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
                  <NativeSelect.Field name="Feedback Type">
                    <For each={["Recipe", "Ingredient", "Others"]}>
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
    </Container>
  );
};

export default Feedback;
