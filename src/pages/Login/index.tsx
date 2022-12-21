import { StyledLoginPage } from "../Login/style.js";
import { LoginForm } from "../../components/Form/LoginForm";
import { Logo } from "../../components/Logo";
import { Messagem } from "../../components/Messagem";
import img from '../../img/Group 135.svg';





export const Login = () => {
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
    </StyledLoginPage>
  )
}