import Image from 'next/image'
import { Minus, Plus, Trash } from 'phosphor-react'
import { CartItem } from '../contexts/CartContext'
import { formatMoney } from './FormatterFunctions'
import { useCart } from '../hooks/useCart'

interface CoffeItemsCardProps {
  coffee: CartItem
}

export const CoffeItemsCard = ({ coffee }: CoffeItemsCardProps) => {
  const { changeCartCard, removeCoffee, cartQuantity } = useCart()

  function handleIncreaseCoffee() {
    changeCartCard(coffee.id, 'increase')
  }

  function handleDecreaseCoffee() {
    changeCartCard(coffee.id, 'decrease')
  }

  function handleRemoveCoffee() {
    removeCoffee(coffee.id)
  }

  return (
    <div className="px-10 pt-10 mb-8 flex gap-5">
      <div>
        <Image
          width="64"
          height="64"
          src={`/coffesImgs/${coffee.image}`}
          alt=""
        />
      </div>
      <div>
        <div className="flex space-x-[95px]">
          <h2 className="text-base-subtitle mb-2">{coffee.name}</h2>
          <div>
            <span>{formatMoney(coffee.price)}</span>
          </div>
        </div>
        <div className="flex">
          <div className="p-2 h-8 mr-2 bg-base-button gap-2 rounded-md whitespace-nowrap flex items-center content-center">
            <button
              disabled={coffee.quantity <= 1}
              onClick={handleDecreaseCoffee}
              className="ml-2 mr-1 my-3"
            >
              <Minus size={14} color="#8047F8" />
            </button>
            <span>{coffee.quantity}</span>
            <button className="ml-1 mr-2 my-3 ">
              <Plus onClick={handleIncreaseCoffee} size={14} color="#8047F8" />
            </button>
          </div>
          <button
            onClick={handleRemoveCoffee}
            className="bg-base-button p-2 gap-1 flex content-center items-center rounded-md"
          >
            <Trash size={14} color="#8047F8" />
            <span className="text-xs text-base-text">REMOVER</span>
          </button>
        </div>
      </div>
    </div>
  )
}
