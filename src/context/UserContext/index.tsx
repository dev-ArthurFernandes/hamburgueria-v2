import { Children, createContext, useState } from "react";

interface iUserContextProps{
  children: React.ReactNode;
}



interface iUserContext{
  user: Array<object>;
  setUser: React.Dispatch<React.SetStateAction<never[]>>;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  cart: Array<object>
  setCart: React.Dispatch<React.SetStateAction<never[]>>;
}


export const UserContext = createContext({} as iUserContext)

export const UesrProvider = ({children}: iUserContextProps) => {

  const [user, setUser] = useState([])

  const [token, setToken] = useState('')

  const [cart, setCart] = useState([])

  return(
    <UserContext.Provider value={{user, setUser, token, setToken, cart, setCart}}>
      {children}
    </UserContext.Provider>
  )


}

