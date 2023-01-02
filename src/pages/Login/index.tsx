import { StyledLoginPage } from "../Login/style.js";
import { LoginForm } from "../../components/Form/LoginForm";
import { Logo } from "../../components/Logo";
import { Messagem } from "../../components/Messagem";
import img from '../../img/Group 135.svg';
import { ToastContainer } from "react-toastify";
import { api } from '../../services/api'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";





export const Login = () => {

  const navigator = useNavigate()

  useEffect(() => {
    async function authLogin() {
      const token = localStorage.getItem("@KenzieBurguer:Token")
      if(token){
        const response = await api.get('/products', {headers: {"Authorization": `Bearer ${token}`}})
        if(response.status === 200){
          navigator('/dashbord')
        }
      }
    }
    authLogin()
   })

  return(
    <StyledLoginPage>
      <section>
        <LoginForm/>
      </section>
      <section className="section2">
       <Logo/>
       <Messagem/>
       <img src={img} style={{"width": "181px", "height": "80px"}}/>
      </section>
      <ToastContainer/>
    </StyledLoginPage>
  )
}