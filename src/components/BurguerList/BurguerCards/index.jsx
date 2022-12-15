import { GreenButton } from "../../GreenButton";
import {
  BurguerCard,
  ItemImage,
  ItemType,
  ItemValue,
  ItemName,
  Image,
} from "./styled";

export const Card = ({ name, category, price, imagem, id, setCartItens }) => {
  function addToCart() {
    const item = {
      name: name,
      category: category,
      image: imagem,
      price: price,
    };

    setCartItens((oldList) => {
      if (oldList.length === 0) {
        return setCartItens([item]);
      } else {
        oldList.forEach((element) => {
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
        <Image src={imagem} />
      </ItemImage>
      <ItemName>{name}</ItemName>
      <ItemType>{category}</ItemType>
      <ItemValue>R$ {price}</ItemValue>
      <div style={{ width: "90%" }}>
        <GreenButton callback={addToCart}>Adicionar</GreenButton>
      </div>
    </BurguerCard>
  );
};
