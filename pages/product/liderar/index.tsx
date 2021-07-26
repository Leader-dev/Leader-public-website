import React from "react";
import {
  Container,
  SimpleGrid,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Box,
  Center
} from '@chakra-ui/react';
import {TestimonialItem} from "@/components/Testimonial";
import FeatureItem from "@/components/FeatureItem";
import PlatformDownload from "@/components/PlatformDownload";

function Feature1() {
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          麟者{' '}
          <Text as={'span'} color={'blue.400'}>
            LIDERAR
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          麟者，一个专为各类菁英组织及社团打造的智能化管理平台；一个汇集来自各领域社团组织青年声音的高净值观点交流社区。
        </Text>
        <Stack spacing={6} direction={'row'} align={'center'}>
          <PlatformDownload imageSrc={'/available-on-the-app-store.svg'} imageWidth={150} />
          <PlatformDownload imageSrc={'/android-seeklogo.com.svg'} imageWidth={120} />
        </Stack>
      </Stack>
    </Container>
  );
}

function Feature2() {
  return (
    <Center>
      <Box mt={50} mb={150} p={4} maxW={1200}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <FeatureItem
            imageSrc={'/management.png'}
            title={'社团管理'}
            text={
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
            }
          />
          <FeatureItem
            imageSrc={'/organizations.png'}
            title={'展示&申请'}
            text={
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
            }
          />
          <FeatureItem
            imageSrc={'/trends.png'}
            title={'动态发布'}
            text={
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
            }
          />
          <FeatureItem
            imageSrc={'/coop.png'}
            badge={'即将推出'}
            title={'赞助合作'}
            text={
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
            }
          />
          <FeatureItem
            imageSrc={'/account.png'}
            badge={'即将推出'}
            title={'个人简历'}
            text={
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
            }
          />
        </SimpleGrid>
      </Box>
    </Center>
  );
}

function Feature3() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')} pt={50} pb={100}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>客户评价</Heading>
          <Text>我们与诸多社团保持着紧密的合作关系</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <TestimonialItem
            heading={'Efficient Collaborating'}
            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.'}
            avatar={
              'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
            }
            name={'Jane Cooper'}
            title={'CEO at ABC Corporation'}
          />
          <TestimonialItem
            heading={'Efficient Collaborating'}
            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.'}
            avatar={
              'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
            }
            name={'Jane Cooper'}
            title={'CEO at ABC Corporation'}
          />
          <TestimonialItem
            heading={'Efficient Collaborating'}
            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.'}
            avatar={
              'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
            }
            name={'Jane Cooper'}
            title={'CEO at ABC Corporation'}
          />
        </Stack>
      </Container>
    </Box>
  );
}

export default function Liderar() {
  return (
    <>
      <Feature1/>
      <Feature2/>
      <Feature3/>
    </>
  )
}
