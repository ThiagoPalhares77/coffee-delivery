import Image from 'next/image'
import CartWhite from '../public/cartwhite.svg'
import React from 'react'
import HeroImg from '../public/ImgHero.png'
import packageImg from '../public/package.svg'
import teacup from '../public/teacup.svg'
import timer from '../public/timer.svg'

export const Hero = () => {
  return (
    <div className="sm:mx-0 mx-3 mt-[94px] mb-16 flex flex-col lg:flex-row lg:items-center">
      <div className="mb-16 mr-14 lg:mb-0 lg:mr-0">
        <div className="mb-16 lg:w-[580px]">
          <h1 className="mb-4 font-baloo2 text-[48px] text-base-title font-extrabold leading-[62px]">
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
              <Image alt="Carrinho de compras" src={CartWhite} />
            </div>
            <p className="text-base-text">Compra simples e segura</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-base-text rounded-full h-8 w-8 flex items-center justify-center">
              <Image alt="Embalagem" src={packageImg} />
            </div>
            <p className="text-base-text">Embalagem mantém o café intacto</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-yellow rounded-full h-8 w-8 flex items-center justify-center">
              <Image alt="Relógio" src={timer} />
            </div>
            <p className="text-base-text">Entrega rápida e rastreada</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-purple rounded-full h-8 w-8 flex items-center justify-center">
              <Image alt="Xícara" src={teacup} />
            </div>
            <p className="text-base-text">O café chega fresquinho até você</p>
          </div>
        </div>
      </div>
      <div className="lg:pl-14">
        <Image
          alt="Logo do Coffee Delivery (Copo com a logo escrita)"
          width={476}
          height={360}
          src={HeroImg}
        />
      </div>
    </div>
  )
}
