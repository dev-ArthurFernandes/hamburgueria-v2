import { StyledInput } from "./styled";

export const Input = ({ setSearch }) => {
  return (
    <>
      <StyledInput
        placeholder="Digitar Pesquisa"
        nama="Search"
        onChange={(event) => setSearch(event.target.value)}
      />
    </>
  );
};
