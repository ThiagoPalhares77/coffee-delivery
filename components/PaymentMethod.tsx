import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import React from 'react'

export const PaymentMethod = () => {
  return (
    <div className="mt-3 pb-8 bg-base-card rounded-md mr-8">
      <div className="flex items-center pt-10 px-10">
        <span>
          <CurrencyDollar size={15} color="#8047F8" />
        </span>
        <h2 className="text-base-subtitle">Pagamento</h2>
      </div>
      <p className="text-sm text-base-text px-10 ml-[12px]">
        O pagamento é feito na entrega. Escolha a forma que deseja pagar
      </p>

      <div className="flex mt-8 mx-10 gap-3 text-xs text-base-text">
        <div className="flex gap-3 ">
          <input
            id="Credit"
            type="radio"
            name="PaymentMethod"
            className="peer hidden"
          />
          <label
            htmlFor="Credit"
            className="cursor-pointer  peer-checked:bg-[#EBE5F9] peer-checked:border-solid peer-checked:border-purple peer-checked:border-2 bg-base-button p-4 rounded-md"
          >
            <div className=" flex gap-3 ">
              <CreditCard size={15} color="#8047F8" />
              CARTÃO DE CRÉDITO
            </div>
          </label>
        </div>
        <div className="flex gap-3">
          <input
            id="Debt"
            type="radio"
            name="PaymentMethod"
            className="peer hidden"
          />
          <label
            htmlFor="Debt"
            className="cursor-pointer  peer-checked:bg-[#EBE5F9] peer-checked:border-solid peer-checked:border-purple peer-checked:border-2 bg-base-button p-4 rounded-md"
          >
            <div className=" flex gap-3 ">
              <Bank size={15} color="#8047F8" />
              CARTÃO DE DÉBITO
            </div>
          </label>
        </div>
        <div className="flex gap-3">
          <input
            id="Money"
            type="radio"
            name="PaymentMethod"
            className="peer hidden"
          />
          <label
            htmlFor="Money"
            className="cursor-pointer  peer-checked:bg-[#EBE5F9] peer-checked:border-solid peer-checked:border-purple peer-checked:border-2 bg-base-button p-4 rounded-md"
          >
            <div className=" flex gap-3 mr-8 ">
              <Money size={15} color="#8047F8" />
              DINHEIRO
            </div>
          </label>
        </div>
      </div>
    </div>
  )
}
