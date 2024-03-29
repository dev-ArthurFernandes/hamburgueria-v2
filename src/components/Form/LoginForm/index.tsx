import { Button } from "../../Button";
import { Input } from "../../Input";
import { StyledForm } from "../style.js";
import { Link } from "../../Link";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { api } from "../../../services/api.js";
import { toast } from "react-toastify";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../context/UserContext";

interface iLogin{
  email: string,
  password: string
}

export const LoginForm = () => {

  const navigate = useNavigate()

  const LoginShape = yup.object().shape({
    email: yup.string().required("Você deve passar seu nome"),
    password: yup.string().required("Você deve passar sua senha")
  })
 
  const { register, handleSubmit, formState: { errors } } = useForm<iLogin>({ mode: "onBlur", resolver: yupResolver(LoginShape) });
  
  const {setToken, setUser} = useContext(UserContext) 

  const submit: SubmitHandler<iLogin> = async (data: iLogin) => {
    const LoginData = {
     email: data.email,
     password: data.password
    }

    try{
     const response = await api.post('/login', LoginData)
     localStorage.setItem("@KenzieBurguer:Token", response.data.accessToken)
     setToken(response.data.accessToken)
     setUser(response.data.user)
     navigate("/dashbord")
    }catch(error: any){
     console.error(error)
     toast.error(error.response.data, {
       position: "top-right",
       autoClose: 5000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "light",
       });
    }
  };

  return(
    <StyledForm onSubmit={handleSubmit(submit)}>
      <h2>Login</h2>
      <Input label={"Email"} type={"text"} name={"email"} register={register("email")} error={errors?.email ? "error" : ''}/>
      {errors?.email && <p>{errors.email.message}</p>}
      <Input label={"Senha"} type={"password"} name={"password"} register={register("password")} error={errors?.name ? "error" : ''}/>
      {errors?.password && <p>{errors.password.message}</p>}
      <Button type="submit" callback={() => false} className="formButton greenButton">Logar</Button>
      <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p> 
      <Link link={"/register"} className={"formLink greyLink1"}>Cadastrar</Link>
    </StyledForm>
  )
}