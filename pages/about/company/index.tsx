import {Box, Button, Center, Heading, Text} from "@chakra-ui/react";
import React from "react";

function Paragraph({ title, text }: { title: string, text: string }) {
  return (
    <>
      <Heading mb={4}>{title}</Heading>
      <Text fontSize="l" mb={16}>
        {text}
      </Text>
    </>
  )
}

export default function Company() {
  return (
    <>
      <Center pt={100} pb={200}>
        <Box maxW="1200">
          <Paragraph
            title={'我们的使命'}
            text={'让每一份独具匠心的闪耀都被虔诚以待，让每一颗初心都被世界聆听'}
          />
          <Paragraph
            title={'我们的愿景'}
            text={'让每一份独具匠心的闪耀都被虔诚以待，让每一颗初心都被世界聆听'}
          />
          <Paragraph
            title={'我们的价值观'}
            text={'让每一份独具匠心的闪耀都被虔诚以待，让每一颗初心都被世界聆听'}
          />
        </Box>
      </Center>
    </>
  )
}
