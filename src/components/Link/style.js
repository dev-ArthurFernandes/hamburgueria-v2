import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  border: none;
  border-radius: 8px;
  
  text-decoration: none;

  font-weight: 500;
  font-size: 14pt;
  line-height: 17px;

  display: flex;
  align-items: center;
  justify-content: center;
  
  cursor: pointer;


  &.formLink{
    width: 100%;
    height: 60px;
  }

  &.Link{
    width: fit-content;
    height: fit-content;
    padding: 10px;
  }

  &.greenLink{
    background-color: var(--color-primary);
    color: var(--color-grey-0);
  }

  &.greyLink1{
    background-color: var(--color-grey-0);
    color: var(--color-grey-2 );
  }
`