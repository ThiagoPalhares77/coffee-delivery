import Image from 'next/image'
import React from 'react'
import Logo from '../public/Logo.svg'
import MapPing from '../public/mappin.svg'
import ShopCart from '../public/cart.svg'

export const Header = () => {
  return (
    <div className="mx-40 my-8">
      <div className="flex justify-between">
        <div>
          <Image src={Logo} />
        </div>
        <div className="flex items-center justify-center">
          <div className="flex bg-purple-light gap-1 p-2 mx-3 rounded-md">
            <Image src={MapPing} />
            <p className="text-purple-dark text-sm">Porto Alegre, RS</p>
          </div>
          <div className="bg-yellow-light w-[39px] h-[38px] flex items-center justify-center rounded-md">
            <Image src={ShopCart} />
          </div>
        </div>
      </div>
    </div>
  )
}
