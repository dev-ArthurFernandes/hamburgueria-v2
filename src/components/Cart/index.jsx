import { HeaderCart, ShoppingCart } from "./styled";
import { CartItemCard } from "./CartItem/index";
import { StyledCartList } from "./CartList/styled";
import { CartEmpty } from "./CartEmpty";
import { Total } from "./Total/index";

export const Cart = ({ cartItens, setCartItens, total }) => {
  let emptyList = true;

  if (cartItens.length > 0) {
    emptyList = false;
  }

  return (
    <ShoppingCart>
      <HeaderCart>
        <h2>Carrinho de compras</h2>
      </HeaderCart>
      {(emptyList && <CartEmpty />) || (
        <StyledCartList>
          {cartItens.map((item, index) => {
            return (
              <CartItemCard
                name={item.name}
                category={item.category}
                imagem={item.img}
                setCartItens={setCartItens}
                key={index}
              />
            );
          })}
          <Total total={total} setCartItens={setCartItens} />
        </StyledCartList>
      )}
    </ShoppingCart>
  );
};
