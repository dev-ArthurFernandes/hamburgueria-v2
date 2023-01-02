import { Button } from "../Button"
import { CartList } from "./CartList"
import { StyledCart } from "./style"
import { IoClose } from 'react-icons/io5'
import { useContext, useEffect, useState } from "react"
import { BurguerContext } from "../../context/BurguerContext"
import { ItemCart } from "./ItemCart/indes"

export const Cart = () => {

  const {setCartOpen, cartOpen, cart, setCart} = useContext(BurguerContext)

  const [total, setTotal] = useState(0)

  useEffect(() => {
    function sumTotal(){
      let total = 0
      cart.forEach((item) => {
        total += item.price
      })
      setTotal(total)
    }
    sumTotal()
  })

  function closeCart() {
    setCartOpen(false)
  }

  function removeAll(){
    localStorage.removeItem('@KenzieBurguer:Cart')
    setCart([])
  }

  return(
    <StyledCart className={cartOpen ? "see": ""}>
      <div className="headerCart">
        <h2>Carrinho de compras</h2>
        <Button callback={closeCart}><IoClose/></Button>
      </div>
      <CartList>
        {cart.map((item) => {
          return(
            <ItemCart title={item.name} image={item.image} price={item.price} qtd={item.qtd} id={item.id} key={item.id}/>
          )
        })}
      </CartList>
      <div className="totaly">
        <div>
          <h2>Total</h2>
          <p>{
              total.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',})
              }
          </p>
        </div>
        <Button callback={removeAll} className="Button greyButton1">Remover Todos</Button>
      </div>
    </StyledCart>
  )
}