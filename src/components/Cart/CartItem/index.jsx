import { StyledCartItem } from "./styled.js";

export const CartItemCard = ({ name, category, imagem, id, setCartItens }) => {
  function remoceItem() {
    setCartItens((list) => {
      const newList = list.filter((item) => item.name !== name);

      return setCartItens(newList);
    });
  }

  return (
    <StyledCartItem>
      <span
        style={{ background: "var(--color-grey-20)", borderRadius: "10px" }}
      >
        <img src={imagem} />
      </span>
      <span
        style={{
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "10px",
        }}
      >
        <h2>{name}</h2>
        <p>{category}</p>
      </span>
      <span style={{ justifyContent: "center", alignItems: "center" }}>
        <a onClick={() => remoceItem()}>Remover</a>
      </span>
    </StyledCartItem>
  );
};
