import React from 'react'
import { CoffeCard } from './CoffeCard'
import { products } from '../data/products'

export const OurCoffes = () => {
  return (
    <div className=" mt-16">
      <h1 className="mb-[54px] font-baloo2  text-base-subtitle text-3xl">
        Nossos cafés
      </h1>
      <div className="grid sm:grid-cols-4 gap-4 mb-1">
        {products.map((product) => (
          <CoffeCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
