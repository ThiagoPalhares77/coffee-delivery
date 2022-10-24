import Image from 'next/image'
import React from 'react'

import MapPinYellow from '../public/mappinyellow.svg'

export const Form = () => {
  return (
    <div className="flex flex-col mr-10">
      <h1 className="text-base-subtitle font-baloo2 font-bold text-lg mt-10 mb-[15px]">
        Complete seu pedido
      </h1>
      <div className="bg-base-card pt-10 px-10 rounded-md">
        <div className="text-base-subtitle ">
          <h2 className="flex gap-2  ">
            <Image src={MapPinYellow} /> Endereço de entrega
          </h2>
          <p className="ml-[30px] mb-8">
            Informe o endereço onde deseja receber seu pedido
          </p>

          <form className="mx-5 mb-10">
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
                className=" appearance-none bg-base-input rounded-md w-full h-[42px] pl-2 "
                placeholder="Rua"
                type="text"
                name="street"
              />
            </div>
            <div className="mb-4 flex gap-3">
              <input
                className=" appearance-none bg-base-input rounded-md w-full h-[42px] pl-2 "
                placeholder="Número"
                type="number"
                name="number"
              />

              <input
                className=" appearance-none  bg-base-input rounded-md w-full h-[42px] pl-2 "
                placeholder="Complemento(opcional)"
                type="text"
                name="moreinfo"
              />
            </div>
            <div className="mb-4 flex gap-3">
              <input
                className=" appearance-none bg-base-input rounded-md w-full h-[42px] pl-2 "
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
