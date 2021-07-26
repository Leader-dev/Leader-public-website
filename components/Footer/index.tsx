import {Box, Container, SimpleGrid, Stack, Text, useColorModeValue} from "@chakra-ui/react";
import React, {ReactNode} from "react";
import {SiteLink} from "@/components/SiteLink";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export type FooterProps = {
  items: NavItem[];
}

export function Footer({ items }: FooterProps) {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
            </Box>
            <Text fontSize={'sm'}>
              © 2021 深圳鳞感科技有限公司，保留所有权利<br/>
              ICP 备案号：XXXXXXXXXXXXXXXXXXXX
            </Text>
          </Stack>
          {items.map(item => (
            <Stack key={item.label} align={'flex-start'}>
              <ListHeader>{item.label}</ListHeader>
              {item.children?.map(child => (
                <SiteLink key={child.label} href={child.href}>{child.label}</SiteLink>
              ))}
            </Stack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
