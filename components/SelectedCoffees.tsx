import React from 'react'
import Link from 'next/link'
import { useCart } from '../hooks/useCart'
import { CoffeItemsCard } from './CoffeItemsCard'

export const SelectedCoffees = () => {
  const { cartItems } = useCart()
  return (
    <section className="flex flex-col h-[600px]">
      <h1 className="text-base-subtitle font-baloo2 font-bold text-lg mt-10 mb-[15px]">
        Cafés selecionados
      </h1>

      <div className="bg-base-card w-[448px] rounded-md rounded-bl-[36px] rounded-tr-[36px] ">
        {cartItems.map((coffee) => (
          <CoffeItemsCard key={coffee.id} coffee={coffee} />
        ))}

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

          <Link href={'/Confirmation'}>
            <button className="bg-yellow hover:bg-yellow-dark text-white w-full p-3 rounded-md mb-10">
              CONFIRMAR PEDIDO
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
