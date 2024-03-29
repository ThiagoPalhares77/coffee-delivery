import Head from 'next/head'

import { Hero } from '../components/Hero'
import { OurCoffes } from '../components/OurCoffes'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coffee Delivery Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href=" /teacup.svg" type="image/svg" />
      </Head>
      <Hero />
      <OurCoffes />
    </div>
  )
}
