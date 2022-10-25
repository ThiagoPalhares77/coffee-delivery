import React from 'react'
import Image from 'next/image'
import { Minus, Plus, Trash } from 'phosphor-react'

export const SelectedCoffees = () => {
  return (
    <div className="flex flex-col h-[600px]">
      <h1 className="text-base-subtitle font-baloo2 font-bold text-lg mt-10 mb-[15px]">
        Cafés selecionados
      </h1>

      <div className="bg-base-card w-[448px] rounded-md rounded-bl-[36px] rounded-tr-[36px] ">
        <div className="px-10 pt-10 mb-12 flex gap-5">
          <div>
            <Image width="64" height="64" src="/coffesImgs/Arabe.png" />
          </div>
          <div>
            <div className="flex space-x-[95px]">
              <h2 className="text-base-subtitle mb-2">Expresso Tradicional</h2>
              <div>
                <span>9,90</span>
              </div>
            </div>
            <div className="flex">
              <div className="p-2 h-8 mr-2 bg-base-button gap-2 rounded-md whitespace-nowrap flex items-center content-center">
                <button className="ml-2 mr-1 my-3">
                  <Minus size={14} color="#8047F8" />
                </button>
                <span>1</span>
                <button className="ml-1 mr-2 my-3 ">
                  <Plus size={14} color="#8047F8" />
                </button>
              </div>
              <button className="bg-base-button p-2 gap-1 flex content-center items-center rounded-md">
                <Trash size={14} color="#8047F8" />
                <span className="text-xs text-base-text">REMOVER</span>
              </button>
            </div>
          </div>
        </div>

        <div className="px-10">
          <div className="w-full flex justify-between mb-3">
            <span className="text-sm text-base-text">Total de itens</span>
            <span>29,70</span>
          </div>
          <div className="w-full flex justify-between mb-3">
            <span className="text-sm text-base-text">Entrega</span>
            <span>29,70</span>
          </div>
          <div className="w-full flex justify-between mb-3">
            <span className="text-xl font-bold text-base-subtitle">Total </span>
            <span className="text-xl font-bold text-base-subtitle">29,70</span>
          </div>

          <button className="bg-yellow hover:bg-yellow-dark text-white w-full p-3 rounded-md mb-10">
            CONFIRMAR PEDIDO
          </button>
        </div>
      </div>
    </div>
  )
}
