import { ButtonHTMLAttributes, ComponentElement } from "react";
import { StyledGreenButton } from "./style.js";

interface iButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: any,
  callback: any
}


export const Button = ({  children, callback, ...rest }: iButton) => {
  return (
    <>
      <StyledGreenButton {...rest} onClick={callback}>{children}</StyledGreenButton>
    </>
  );
};
