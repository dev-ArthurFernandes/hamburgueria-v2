import React, { createContext, useState } from "react";

interface iBurguerContextProps{
  children: React.ReactNode;
}

interface iBurguerContext{
  burguers: Array<object>;
  setBurguers: React.Dispatch<React.SetStateAction<never[]>>;
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  cartOpen: boolean;
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartCounter: number;
  setCartCounter: React.Dispatch<React.SetStateAction<number>>;
  cart: Array<object>;
  setCart: React.Dispatch<React.SetStateAction<Array<object>>>;
}

export const BurguerContext = createContext({} as iBurguerContext)

export const BurguerProvider = ({children}: iBurguerContextProps) => {
  const [burguers, setBurguers] = useState([])
  const [filter, setFilter] = useState('')
  const [cartOpen, setCartOpen] = useState(false)
  const [cartCounter, setCartCounter] = useState(0)
  const [cart, setCart] = useState([])

  return(
    <BurguerContext.Provider value={{burguers, setBurguers, filter, setFilter, cartOpen, setCartOpen, setCartCounter, cartCounter, cart, setCart}}>
      {children}
    </BurguerContext.Provider>
  )
}