import { Logo } from "../../components/Logo"; 
import { Messagem } from "../../components/Messagem";
import { StyledRegisterPage } from "../../pages/Register/style.js";
import { RegisterForm } from "../../components/Form/RegisterForm";
import img from "../../img/Group 135.svg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export const Register = () => {

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
    <StyledRegisterPage>
      <section className="section2">
        <Logo/>
        <Messagem/>
        <img src={img} style={{"width": "181px", "height": "80px"}}/>
      </section>
      <section>
        <RegisterForm/>
      </section>
  </StyledRegisterPage>
  )
}