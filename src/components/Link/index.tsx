import { StyledLink } from "./style.js";

interface iLink{
  link: string,
  children: string,
  className: string,
}

export const Link = ({link, children, className}: iLink) => {
  return(
    <>
      <StyledLink to={link} className={className}>{children}</StyledLink>
    </>
  )
}