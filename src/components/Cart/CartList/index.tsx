import { StyledCartList } from "./style"

interface iCartList{
  children: any;
}


export const CartList = ({children}: iCartList) => {
  return(
    <StyledCartList>
      {children}
    </StyledCartList>
  )
}