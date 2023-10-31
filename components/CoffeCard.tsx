import Image from 'next/image'
import { Minus, Plus } from 'phosphor-react'
import React, { useContext, useState } from 'react'
import { CartContext } from '../contexts/CartContext'
import ShoppCartWhite from '../public/cartwhite.svg'

export interface Product {
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
  const [quantity, setQuantity] = useState(1)

  function handleMoreProductQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleLessProductQuantity() {
    setQuantity((state) => state - 1)
  }

  const { addNewProductToCart } = useContext(CartContext)

  function handleAddProductToCart() {
    const addTheProduct = {
      ...product,
      quantity
    }
    setQuantity((state) => 1)
    addNewProductToCart(addTheProduct)
  }

  return (
    <div className="bg-base-card rounded-md rounded-tr-[36px] rounded-bl-[36px] mb-10 sm:mx-0 mx-5">
      <div className="flex justify-center ">
        <div className="mt-[-1.25rem]">
          <Image
            alt=""
            src={`/coffesImgs/${product.image}`}
            width={120}
            height={120}
          />
        </div>
      </div>

      <div className="flex items-center justify-center mt-3">
        {product.span.map((span) => (
          <span
            key={`${product.id}.${span}`}
            className="px-2 py-1 mx-1 text-yellow bg-yellow-light rounded-full text-[10px]"
          >
            {span}
          </span>
        ))}
      </div>

      <h2 className="flex justify-center font-baloo2 mt-4 font-bold text-xl text-base-subtitle">
        {product.name}
      </h2>
      <div className="h-16">
        <p className="flex text-center justify-center text-sm text-base-label mx-2 mt-2">
          {product.description}
        </p>
      </div>
      <div className="h-[38px] mt-[33px] mb-5 mx-4 flex items-center justify-center">
        <span className="font-extrabold font-baloo2 text-xl text-base-text whitespace-nowrap">
          R$ 9,90
        </span>
        <div className="ml-[23px] mr-2 h-full bg-base-button gap-2 rounded-md whitespace-nowrap">
          <button
            className="ml-2 mr-1 my-3"
            onClick={handleLessProductQuantity}
            disabled={quantity <= 1}
          >
            <Minus size={14} color="#8047F8" />
          </button>
          <span>{quantity}</span>
          <button
            className="ml-1 mr-2 my-3 "
            onClick={handleMoreProductQuantity}
          >
            <Plus size={14} color="#8047F8" />
          </button>
        </div>

        <button
          className="bg-purple-dark flex items-center justify-center ml-2 sm:w-full w-20 rounded-md h-full"
          onClick={handleAddProductToCart}
        >
          <Image alt="" src={ShoppCartWhite} width={22} height={22} />
        </button>
      </div>
    </div>
  )
}
