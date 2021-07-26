import {Box, Button, Center, Image, useColorModeValue} from "@chakra-ui/react";
import React from "react";

export default function PlatformDownload({ imageSrc, imageWidth }: { imageSrc: string, imageWidth: any }) {
  return (
    <Center py={6}>
      <Box
        w={200}
        height={150}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'10'}
        overflow={'hidden'}
        p={6}
      >
        <Center height={70}>
          <Image width={imageWidth} src={imageSrc} />
        </Center>
        <Button
          w={'full'}
          bg={useColorModeValue('#151f21', 'gray.900')}
          color={'white'}
          rounded={'md'}
          size={'sm'}
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          }}>
          下载
        </Button>
      </Box>
    </Center>
  )
}
