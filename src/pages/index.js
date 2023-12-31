import Head from 'next/head'

import { Inter } from 'next/font/google'

import Header from '@/components/Header'
import Section1 from '@/components/element_home/Section1'
import Section2 from '@/components/element_home/Section2'
import Section4 from '@/components/element_home/Section4'
import Section5 from '@/components/element_home/Section5'
import Section6 from '@/components/element_home/Section6'
import Section7 from '@/components/element_home/Section7'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>hyer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Section7/>
        <Footer/>
      
    </>
  )
}
