import { SourceHTMLAttributes } from "react";
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
  setCartItens: any;
}

export const Card = ({ name, category, price, image, id, setCartItens }: iCart) => {
  function addToCart() {
    const item = {
      name: name,
      category: category,
      image: image,
      price: price,
    };

    setCartItens((oldList: any) => {
      if (oldList.length === 0) {
        return setCartItens([item]);
      } else {
        oldList.forEach((element: any) => {
          if (element.name === item.name) {
            setCartItens(oldList);
          } else {
            setCartItens([...oldList, item]);
          }
        });
      }
    });
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
