import React, { createContext, useState } from 'react'

export const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [selected, setSelected] = useState({
    processor: null,
    graphics: null,
    ssd: null,
  })

  function addComponent(type, component) {
    if (!type) return
    setSelected(prev => ({ ...prev, [type]: component }))
  }

  function removeComponent(type) {
    if (!type) return
    setSelected(prev => ({ ...prev, [type]: null }))
  }

  return (
    <CartContext.Provider value={{ selected, addComponent, removeComponent }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
