import { Button } from "../../Button";
import { Input } from "../../Input";
import { StyledForm } from "../style.js";
import { Link } from "../../Link";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { api } from "../../../services/api.js";
import { toast, ToastContainer} from "react-toastify";

interface iLogin{
  name: string,
  password: string
}

export const LoginForm = () => {

  const navigate = useNavigate()

  const LoginShape = yup.object().shape({
    name: yup.string().required("Você deve passar seu nome"),
    password: yup.string().required("Você deve passar sua senha")
  })
 
  const { register, handleSubmit, formState: { errors } } = useForm<iLogin>({ mode: "onBlur", resolver: yupResolver(LoginShape) });
  
  const submit: SubmitHandler<iLogin> = async (data: iLogin) => {
    const LoginData = {
     name: data.name,
     password: data.password
    }

    try{
     await api.post('/login', LoginData).then((resp: Response) => {
       navigate("/dashbord")
     })
    }catch(error){
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
      <Input label={"Nome"} type={"text"} name={"name"} register={register("password")} error={errors?.name ? "error" : ''}/>
      {errors?.name && <p>{errors.name.message}</p>}
      <Input label={"Senha"} type={"password"} name={"password"} register={register("password")} error={errors?.name ? "error" : ''}/>
      {errors?.password && <p>{errors.password.message}</p>}
      <Button type="submit" callback={() => false} className="formButton greenButton">Logar</Button>
      <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p> 
      <Link link={"/register"} className={"formLink greyLink1"}>Cadastrar</Link>
    </StyledForm>
  )
}