import Image from 'next/image'
import React from 'react'

import MapPinYellow from '../public/mappinyellow.svg'

export const Form = () => {
  return (
    <div className="flex flex-col mr-8">
      <h1 className="text-base-subtitle font-baloo2 font-bold text-lg mt-10 mb-[15px]">
        Complete seu pedido
      </h1>
      <div className="bg-base-card pt-10 px-10 rounded-md">
        <div className="text-base-subtitle ">
          <h2 className="flex gap-2  ">
            <Image src={MapPinYellow} /> Endereço de entrega
          </h2>
          <p className="ml-[30px] mb-8 text-sm">
            Informe o endereço onde deseja receber seu pedido
          </p>

          <form className="mx-5 mb-10 text-sm ">
            <div className="mb-4">
              <input
                className=" appearance-none bg-base-input rounded-md  h-[42px] pl-2"
                placeholder="CEP"
                type="number"
                name="cep"
              />
            </div>
            <div className="mb-4">
              <input
                className="appearance-none bg-base-input w-full rounded-md h-[42px] pl-2 "
                placeholder="Rua"
                type="text"
                name="street"
              />
            </div>
            <div className="mb-4 flex gap-3">
              <input
                className=" appearance-none bg-base-input rounded-md w-32 h-[42px] pl-2 "
                placeholder="Número"
                type="number"
                name="number"
              />
              <div className="relative inline-block">
                <input
                  className=" appearance-none bg-base-input rounded-md h-[42px] w-[300px] pl-2 "
                  placeholder="Complemento"
                  type="text"
                  name="moreinfo"
                />
                <span className="absolute text-base-label italic flex justify-center items-center right-3 top-3 text-xs">
                  Opcional
                </span>
              </div>
            </div>
            <div className="mb-4 flex gap-3">
              <input
                className=" appearance-none  bg-base-input rounded-md w-full h-[42px] pl-2 "
                placeholder="Bairro"
                type="text"
                name="district"
              />

              <input
                className=" appearance-none  bg-base-input rounded-md w-full h-[42px] pl-2 "
                placeholder="Cidade"
                type="text"
                name="city"
              />
              <input
                className=" appearance-none  bg-base-input rounded-md w-9 h-[42px] pl-2 "
                placeholder="UF"
                type="text"
                name="UF"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
