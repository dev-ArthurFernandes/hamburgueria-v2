import { StyledItemCart } from "./style"
import { BsPlusLg } from 'react-icons/bs'
import { AiOutlineMinus } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa';
import { useContext, useState } from "react";
import { BurguerContext } from "../../../context/BurguerContext";

interface iItemCart{
  image: string;
  title: string;
  price: Number;
  qtd: string;
  id: string;
}

export const ItemCart = ({image, title, price, qtd, id}: iItemCart) => {
  
  const {setCart} = useContext(BurguerContext)

  const [userQtd, setUserQtd] = useState(Number(qtd))

  function setPlusQtd(){
    setUserQtd(userQtd + 1)
  }

  function setMenusQts(){
    setUserQtd(userQtd - 1)
  }

  function removeItem(){
    let Cart = JSON.parse(localStorage.getItem("@KenzieBurguer:Cart") || "")

    if(Cart.length === 1){
      Cart = []
    }else{
      Cart = Cart.filter((item: object) => {
        console.log(item)
        if(item.id !== id){
          return item
        }
      })
    }
    console.log(Cart)
    localStorage.setItem("@KenzieBurguer:Cart", JSON.stringify(Cart))
    setCart(Cart)
  }
  
  return(
    <StyledItemCart id={id}>
      <div>
        <span>
          <img src={image}/>
        </span>
        <span>
          <h2>{title}</h2>
          <div className="Counter">
            <button className="Plus" id="plus" onClick={setPlusQtd}><BsPlusLg style={{color: "red"}}/></button>
            <div className="qtd"><p>{userQtd}</p></div>
            <button className="Minus" id="minus" onClick={setMenusQts}><AiOutlineMinus style={{color: "red"}}/></button>
          </div>
        </span>
      </div>
      <button onClick={removeItem}><FaTrash style={{color: "grey"}}/></button>
    </StyledItemCart>
  )
}