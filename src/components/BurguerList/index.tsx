import { StyledBurguerList } from "./style.js";
import { Card } from "./BurguerCards/index";
import { useContext } from "react";
import { BurguerContext } from "../../context/BurguerContext/index.js";



export const BurguerList = () => {

  const {burguers, filter} = useContext(BurguerContext)

  return (
    <StyledBurguerList>
      {burguers.map((item: any) => {
        if (!filter) {
          return (
            <Card
              name={item.name}
              category={item.category}
              price={item.price}
              image={item.img}
              id={item.id}
              key={item.id}
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
            />
          );
        }
      })}
    </StyledBurguerList>
  );
};
