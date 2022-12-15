import { StyledGreenButton } from "./styled";

export const GreenButton = ({ callback, children }) => {
  return (
    <>
      <StyledGreenButton onClick={callback}>{children}</StyledGreenButton>
    </>
  );
};
