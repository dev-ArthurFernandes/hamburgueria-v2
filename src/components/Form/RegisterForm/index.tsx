import { Input } from "../../Input";
import { StyledForm } from "../style.js";
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from "../../../services/api.js"
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from "react-router-dom";

interface iRegisterForm{
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
}

export const RegisterForm = () => {

  const navigate = useNavigate()

  const RegisterShap = yup.object().shape({
    name: yup.string().required("O Nome é obrigatório").min(3, "O nome deve conter no mínimo 3 caracteres"),
    email: yup.string().required("O Email é obrigatório").email("Você deve passar um email nesse campo"),
    password: yup.string().required("A senha é obrigatória").min(6,"Sua Senha deve conter no mínimo 6 caracteres"),
    confirmPassword: yup.string().required("Você deve confirmar sua senha").oneOf([yup.ref("password"), null], "As senhas não combinam")
  })

  const { register, handleSubmit, formState: { errors } } = useForm<iRegisterForm>({ mode: "onBlur", resolver: yupResolver(RegisterShap) });

  const submit: SubmitHandler<iRegisterForm> = async (data: iRegisterForm) => {
   const RegisterData = {
    name: data.name,
    email: data.email,
    password: data.password
   }
   console.log(RegisterData)
   try{
    const response = await api.post('/users', RegisterData)
    navigate("/")
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
    <>
    <ToastContainer/>
    <StyledForm onSubmit={handleSubmit(submit)}>
      <h2>Cadastrar</h2>
      <Input type="text" name="name" label={"Nome"} register={register("name")} error={errors?.name ? "error" : ""} />
      {errors?.name && <p className="errorMessage">{errors.name.message}</p>}
      <Input type="email" name="email" label={"Email"} register={register("email")} error={errors?.email ? "error" : ""}/>
      {errors?.email && <p className="errorMessage">{errors.email.message}</p>}
      <Input type="password" name="password" label={"Senha"} register={register("password")} error={errors?.password ? "error" : ""}/>
      {errors?.password && <p className="errorMessage">{errors.password.message}</p>}
      <Input type="password" label={"Confirmar Senha"} register={register("confirmPassword")} error={errors?.confirmPassword ? "error" : ""}/>
      {errors?.confirmPassword && <p className="errorMessage">{errors.confirmPassword.message}</p>}
      <button className="formButton greyButton" type="submit">Cadastrar</button>
    </StyledForm> 
    </>
  )
}