import { NavBar } from "../../components/NavBar";
import { Container } from "../../components/Container/style.js"
import { Card } from "../../components/BurguerList/BurguerCards";
import { BurguerList } from "../../components/BurguerList";
import { ItemCart } from "../../components/Cart/ItemCart/indes";
import { Cart } from "../../components/Cart";
import { useContext, useEffect } from "react";
import { BurguerContext } from "../../context/BurguerContext";
import { api } from '../../services/api'
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";


export const DashBord = () => {

  const {setBurguers, setCart} = useContext(BurguerContext)

  const {token, setToken} = useContext(UserContext)

  const navigate = useNavigate()


  useEffect(() => {
    async function authLogin() {
      const token = localStorage.getItem("@KenzieBurguer:Token")
      if(token){
        const response = await api.get('/products', {headers: {"Authorization": `Bearer ${token}`}})
        if(response.status === 200){
          setToken(token)
          navigate('/dashbord')
        }
      }
      if(!localStorage.getItem("@KenzieBurguer:Cart")){
        localStorage.setItem("@KenzieBurguer:Cart", JSON.stringify([]))
      }
    }
    authLogin()
  })
  
  useEffect(() => {
    async function getBurguers(){
      try{
        const response = await api.get('/products', {headers: {"Authorization": `Bearer ${token}`}})
        setBurguers(response.data)
        setCart(JSON.parse("@KenzieBurguer:Cart")) 
      }catch(error){
        console.error(error)
      }
    }

    getBurguers()
  }, [token])
 

  return(<>
    <NavBar/>
    <Container>
      <BurguerList/>
    </Container>
    <ToastContainer/>
    <Cart/>
  </>)
}