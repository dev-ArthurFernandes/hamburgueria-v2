import { SourceHTMLAttributes, useContext } from "react";
import { IoClipboardSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import { array, string } from "yup";
import { BurguerContext } from "../../../context/BurguerContext";
import { Button } from "../../Button";
import {
  BurguerCard,
  ItemImage,
  ItemType,
  ItemValue,
  ItemName,
  Image,
} from "./styled";

interface iCart{
  name: string;
  category: string;
  price: string;
  image: string;
  id: string;
}


export const Card = ({ name, category, price, image, id }: iCart) => {

  const {setCart} = useContext(BurguerContext)

  function addToCart() {
    const item = {
      name: name,
      image: image,
      price: price,
      id: id,
      qtd: 1,
    }
    
    let Cart: Array<object> = []

    if(localStorage.getItem("@KenzieBurguer:Cart")){
      Cart = JSON.parse(localStorage.getItem("@KenzieBurguer:Cart") || "")
      Cart = [...Cart, item]
    }

    localStorage.setItem("@KenzieBurguer:Cart", JSON.stringify(Cart))
    setCart(Cart)
  }

  return (
    <BurguerCard>
      <ItemImage>
        <Image src={image} />
      </ItemImage>
      <ItemName>{name}</ItemName>
      <ItemType>{category}</ItemType>
      <ItemValue>R$ {price}</ItemValue>
      <div style={{ width: "90%" }}>
        <Button callback={addToCart} className={"greenButton Button"}>Adicionar</Button>
      </div>
    </BurguerCard>
  );
};
