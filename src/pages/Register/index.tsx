import { Logo } from "../../components/Logo"; 
import { Messagem } from "../../components/Messagem";
import { StyledRegisterPage } from "../../pages/Register/style.js";
import { RegisterForm } from "../../components/Form/RegisterForm";
import img from "../../img/Group 135.svg";

export const Register = () => {
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