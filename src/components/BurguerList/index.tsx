import { StyledBurguerList } from "./style.js";
import { Card } from "./BurguerCards/index";

interface iBurguerList{
  itens: Array<any>;
  setCartItens: FunctionConstructor;
  filter: string;
}


export const BurguerList = ({ itens, setCartItens, filter }: iBurguerList) => {
  return (
    <StyledBurguerList>
      {itens.map((item) => {
        if (!filter) {
          return (
            <Card
              name={item.name}
              category={item.category}
              price={item.price}
              image={item.img}
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
              image={item.img}
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
