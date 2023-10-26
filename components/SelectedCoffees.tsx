import React from 'react'
import Link from 'next/link'
import { useCart } from '../hooks/useCart'
import { CoffeItemsCard } from './CoffeItemsCard'
import { formatMoney } from './FormatterFunctions'

export const SelectedCoffees = ({ onConfirmOrder }) => {
  const { cartItems, cartCalculation } = useCart()
  console.log(cartItems)
  const orderPrice = cartCalculation + 3.5
  return (
    <section className="flex flex-col h-[600px]">
      <h1 className="text-base-subtitle font-baloo2 font-bold text-lg mt-10 mb-[15px]">
        Cafés selecionados
      </h1>

      <div className="bg-base-card w-[448px] rounded-md rounded-bl-[36px] rounded-tr-[36px] ">
        {cartItems.map((coffee) => (
          <CoffeItemsCard key={coffee.id} coffee={coffee} />
        ))}

        {cartItems.length === 0 ? (
          <div className="w-full mb-3 px-8 py-8">
            <p className="text-xl text-base-text">Seu carrinho está vazio!</p>
            <Link href={'/'}>
              <button
                className="mt-3 
              border border-gray-500 rounded px-3 py-3 bg-yellow-light hover:bg-yellow ease-in-out"
              >
                Clique aqui para retornar para compras
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="px-10">
              <div className="w-full flex justify-between mb-3">
                <span className="text-sm text-base-text">Total de itens</span>
                <span>{formatMoney(cartCalculation)}</span>
              </div>
              <div className="w-full flex justify-between mb-3">
                <span className="text-sm text-base-text">Entrega</span>
                <span>R$ 3,50</span>
              </div>
              <div className="w-full flex justify-between mb-3">
                <span className="text-xl font-bold text-base-subtitle">
                  Total{' '}
                </span>
                <span className="text-xl font-bold text-base-subtitle">
                  {formatMoney(orderPrice)}
                </span>
              </div>

              <button
                type="button"
                onClick={onConfirmOrder}
                className="bg-yellow hover:bg-yellow-dark text-white w-full p-3 rounded-md mb-10"
              >
                CONFIRMAR PEDIDO
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
