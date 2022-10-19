import Image from 'next/image'
import CartWhite from '../public/cartwhite.svg'
import React from 'react'
import HeroImg from '../public/ImgHero.png'
import packageImg from '../public/package.svg'
import teacup from '../public/teacup.svg'
import timer from '../public/timer.svg'

export const Hero = () => {
  return (
    <div className="mx-40 mt-[94px] mb-16 flex ">
      <div className="mb-16 mr-14">
        <div className="mb-16">
          <h1 className="mb-4 font-baloo2 text-[48px] font-extrabold leading-[62px]">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="text-xl">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>
        <div className="grid grid-cols-2 gap-y-5">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-dark rounded-full h-8 w-8 flex items-center justify-center">
              <Image src={CartWhite} />
            </div>
            <p className="text-base-text">Compra simples e segura</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-base-text rounded-full h-8 w-8 flex items-center justify-center">
              <Image src={packageImg} />
            </div>
            <p className="text-base-text">Embalagem mantém o café intacto</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-yellow rounded-full h-8 w-8 flex items-center justify-center">
              <Image src={timer} />
            </div>
            <p className="text-base-text">Entrega rápida e rastreada</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-purple rounded-full h-8 w-8 flex items-center justify-center">
              <Image src={teacup} />
            </div>
            <p className="text-base-text">O café chega fresquinho até você</p>
          </div>
        </div>
      </div>
      <div>
        <Image width={476} height={360} src={HeroImg} />
      </div>
    </div>
  )
}
