import { Burguer, Kenzie, StyledLogo } from "./styled.js";

export const Logo = () => {
  return (
    <StyledLogo>
      <Burguer>Burguer</Burguer>
      <Kenzie>
        <small>Kenzie</small>
      </Kenzie>
    </StyledLogo>
  );
};
