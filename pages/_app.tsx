import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { Box, ChakraProvider } from '@chakra-ui/react'
import {NavBar} from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import Head from "next/head";

const NAV_ITEMS: NavItem[] = [
  {
    label: '关于',
    children: [
      {
        label: '公司介绍',
        subLabel: '我们的使命、愿景、价值观',
        href: '/about/company',
      },
      {
        label: '团队成员',
        subLabel: '支撑公司运作的骨干力量',
        href: '/about/team',
      },
    ],
  },
  {
    label: '产品',
    children: [
      {
        label: '麟者',
        subLabel: '为社团菁英定制的高效管理平台',
        href: '/product/liderar',
      },
    ],
  },
  {
    label: '联系',
    children: [
      {
        label: '联系方式',
        subLabel: '与我们沟通来获取公司和产品信息',
        href: '/contact/contact-us',
      },
    ],
  },
];

function getPageTitle(route: string) {
  for (let item of NAV_ITEMS) {
    for (let child of item.children ?? []) {
      if (child.href === route) {
        return '鳞感科技 - ' + child.label
      }
    }
  }
  return '鳞感科技'
}

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>{getPageTitle(router.route)}</title>
      </Head>
      <NavBar items={NAV_ITEMS}/>
      <Box mt={'60px'}>
        <Component {...pageProps} />
        <Footer items={NAV_ITEMS}/>
      </Box>
    </ChakraProvider>
  )
}
export default MyApp
