import Image from 'next/image'
import { Minus, Plus } from 'phosphor-react'
import React from 'react'
import ShoppCartWhite from '../public/cartwhite.svg'

interface Product {
  id: number
  span: string[]
  name: string
  description: string
  image: string
  price: number
}

interface ProductProps {
  product: Product
}

export const CoffeCard = ({ product }: ProductProps) => {
  return (
    <div className=" bg-base-card rounded-md rounded-tr-[36px] rounded-bl-[36px]">
      <div className="flex justify-center ">
        <div className="mt-[-1.25rem]">
          <Image
            src={`/coffesImgs/${product.image}`}
            width={120}
            height={120}
          />
        </div>
      </div>

      <div className="flex items-center justify-center mt-3">
        {product.span.map((span) => (
          <span
            key={product.id}
            className="px-2 py-1 mx-1 text-yellow bg-yellow-light rounded-full text-[10px]"
          >
            {span}
          </span>
        ))}
      </div>

      <h2 className="flex justify-center font-baloo2 mt-4 font-bold text-xl text-base-subtitle">
        {product.name}
      </h2>
      <p className="flex text-center justify-center text-sm text-base-label mx-5 mt-2">
        {product.description}
      </p>
      <div className="h-[38px] mt-[33px] mb-5 mx-6 flex items-center justify-center">
        <span className="font-extrabold font-baloo2 text-2xl text-base-text">
          9,90
        </span>
        <div className="ml-[23px] mr-2 h-full bg-base-button gap-2 rounded-md whitespace-nowrap">
          <button className="ml-2 mr-1 my-3">
            <Minus size={14} color={'purple'} />
          </button>
          <span>1</span>
          <button className="ml-1 mr-2 my-3 ">
            <Plus size={14} color={'purple'} />
          </button>
        </div>

        <button className="flex items-center justify-center bg-purple-dark rounded-md h-full w-[38px] ml-2 p-[6px]">
          <Image src={ShoppCartWhite} width={22} height={22} />
        </button>
      </div>
    </div>
  )
}
