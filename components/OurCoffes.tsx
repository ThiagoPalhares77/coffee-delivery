import Image from 'next/image'
import React from 'react'
import { CoffeCard } from './CoffeCard'

export const OurCoffes = () => {
  return (
    <div className="mx-40 mt-16">
      <h1 className="mb-[54px] font-baloo2  text-base-subtitle text-3xl">
        Nossos cafés
      </h1>
      <div>
        <CoffeCard />
      </div>
    </div>
  )
}
