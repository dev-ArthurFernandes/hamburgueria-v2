import { StyledDiv } from "./styled.js";

export const Total = ({ total, setCartItens }) => {
  function clearCart() {
    setCartItens([]);
  }

  return (
    <StyledDiv>
      <span>
        <h2>Total</h2>
        <p>R$ {Math.round(total)}</p>
      </span>
      <button onClick={() => clearCart()}>Remover todos</button>
    </StyledDiv>
  );
};
