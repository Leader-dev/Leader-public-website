import {Badge, Image, Stack, Text} from "@chakra-ui/react";
import React from "react";

export interface FeatureProps {
  title: string;
  text: string;
  imageSrc: string;
  badge?: string;
}

export default function FeatureItem({ title, text, imageSrc, badge }: FeatureProps) {
  return (
    <Stack>
      <Image src={imageSrc} mb={6}/>
      {badge ? <Badge color={'orange.400'} bg={'orange.50'} width={'fit-content'}>{badge}</Badge> : null }
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
}

