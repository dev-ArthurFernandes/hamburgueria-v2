import { GreenButton } from "../GreenButton";
import { DivFilter } from "./styled";

export const Filter = ({ filter, setFilter }) => {
  function clearFilter() {
    setFilter("");
  }

  return (
    <DivFilter>
      <h2>
        Resultado para: <i>{filter}</i>
      </h2>
      <GreenButton callback={clearFilter}>Limpar Busca</GreenButton>
    </DivFilter>
  );
};
