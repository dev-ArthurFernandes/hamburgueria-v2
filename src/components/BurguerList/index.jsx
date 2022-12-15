import { StyledBurguerList } from "./styled";
import { Card } from "./BurguerCards/index";

export const BurguerList = ({ itens, setCartItens, filter }) => {
  return (
    <StyledBurguerList>
      {itens.map((item) => {
        if (!filter) {
          return (
            <Card
              name={item.name}
              category={item.category}
              price={item.price}
              imagem={item.img}
              id={item.id}
              key={item.id}
              setCartItens={setCartItens}
            />
          );
        } else if (item.name.toLowerCase().includes(filter.toLowerCase())) {
          return (
            <Card
              name={item.name}
              category={item.category}
              price={item.price}
              imagem={item.img}
              id={item.id}
              key={item.id}
              setCartItens={setCartItens}
            />
          );
        }
      })}
    </StyledBurguerList>
  );
};
