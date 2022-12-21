import { Logo } from "../Logo";
import { SearchInput } from "../SerchInput";
import { StyledNavBar } from "../NavBar/style.js";
import { MdLogout } from "react-icons/md";
import { Button } from "../Button";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

export const NavBar = () => {

  const navigate = useNavigate()

  const [cartOpen, setCartOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  function logout(){
    window.localStorage.clear()
    navigate("/")
  }

  function openCart(){
    if(cartOpen){
      setCartOpen(false)
    }else{
      setCartOpen(true)
    }
  }

  function openSearch(){
    console.log("ola")
    if(searchOpen){
      setSearchOpen(false)
    }else{
      setSearchOpen(true)
    }
  }

  return(
    <StyledNavBar>
     <div className="container">
      <Logo/>
      <span>
        <Button className='Button searchButton' callback={openSearch}><AiOutlineSearch/></Button>
        <SearchInput className={searchOpen ? "OpenSearch" : ""} />
        <div className="CartIcon">
          <Button className="Button" callback={openCart}><FaShoppingCart/></Button>
          <div className="CartCount">0</div>
        </div>
        <Button className="Button" callback={logout}><MdLogout/></Button>
      </span>
     </div>
    </StyledNavBar>
  )
}