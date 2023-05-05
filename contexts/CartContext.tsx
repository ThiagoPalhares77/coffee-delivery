import { createContext, ReactNode, useState } from 'react'
import { Product } from '../components/CoffeCard'
import { produce } from 'immer'

export interface CartItem extends Product {
  quantity: number
}

export interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  addNewProductToCart: (product: CartItem) => void
  changeCartCard: (cartItemId: number, type: 'increase' | 'decrease') => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const cartQuantity = cartItems.length

  function addNewProductToCart(product: CartItem) {
    const productIsAlreadyInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === product.id
    )

    const newCart = produce(cartItems, (draft) => {
      if (productIsAlreadyInCart === -1) {
        draft.push(product)
      } else {
        draft[productIsAlreadyInCart].quantity += product.quantity
      }
    })
    setCartItems(newCart)
    console.log(newCart)
  }

  function changeCartCard(cartItemId: number, type: 'increase' | 'decrease') {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === cartItemId) {
        const newQuantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
        return { ...item, quantity: newQuantity }
      }
      return item
    })

    setCartItems(updatedCartItems)
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addNewProductToCart, cartQuantity, changeCartCard }}
    >
      {children}
    </CartContext.Provider>
  )
}
