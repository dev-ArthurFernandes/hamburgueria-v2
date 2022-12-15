import { Input } from "../Input/index.jsx";
import {
  StyledDivInputHeader,
  StyledHeader,
  StyledHeaderContainer,
} from "./styled.js";
import { GreenButton } from "./../GreenButton/index";
import { Logo } from "./../Logo/index";
import { useState } from "react";

export const Header = ({ setFilter }) => {
  const [search, setSearch] = useState("");

  function pushFilter() {
    setFilter(search);
  }

  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <Logo />
        <StyledDivInputHeader>
          <Input setSearch={setSearch} />
          <GreenButton callback={pushFilter}>Pesquisar</GreenButton>
        </StyledDivInputHeader>
      </StyledHeaderContainer>
    </StyledHeader>
  );
};
