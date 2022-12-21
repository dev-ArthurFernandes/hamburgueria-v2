import { InputHTMLAttributes, useState } from "react";
import { FieldErrorsImpl } from "react-hook-form/dist/types/errors.js";
import { StyledInput } from "./style.js";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement>{
  label: string,
  register: any,
  error: string,
}

export const Input = ({ label, error, register, name, ...rest }: iInputProps) => {

  const [activ, setActiv] = useState(false);

  function checkValue(event: any){
    if(event.target.value != ""){
      setActiv(true)
    }else{
      setActiv(false)
    }
  }
  return (
    <>
      <StyledInput className={error}>
        <label className={activ ? "activ" : ""} >{label}</label>
        <input {...rest} onInput={checkValue} {...register}/>
      </StyledInput>
    </>
  );
}
