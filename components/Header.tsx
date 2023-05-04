import Image from 'next/image'
import React from 'react'
import Logo from '../public/Logo.svg'
import MapPing from '../public/mappin.svg'
import ShopCart from '../public/cart.svg'
import Link from 'next/link'
import { useCart } from '../hooks/useCart'

export const Header = () => {
  const { cartQuantity } = useCart()

  return (
    <div className="mx-auto my-8">
      <div className="flex justify-between">
        <div className="cursor-pointer">
          <Link href={'/'}>
            <a>
              <Image src={Logo} alt="" />
            </a>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex bg-purple-light gap-1 p-2 mx-3 rounded-md">
            <Image src={MapPing} alt="" />
            <p className="text-purple-dark text-sm">Porto Alegre, RS</p>
          </div>
          <Link href={'completeOrder'}>
            <a>
              <div className="bg-yellow-light w-[39px] h-[38px] flex items-center justify-center rounded-md cursor-pointer relative">
                {cartQuantity >= 1 && (
                  <div className="w-5 h-5 bg-yellow-dark rounded-full flex items-center justify-center absolute top-[-10px] right-[-10px]">
                    <span className="text-white text-sm">{cartQuantity}</span>
                  </div>
                )}
                <Image src={ShopCart} alt="" />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
