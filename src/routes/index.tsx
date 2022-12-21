import { Login } from "../pages/Login";
import {Routes, Route} from "react-router-dom";
import { Register } from "../pages/Register"
import { DashBord } from "../pages/DashBord"

export const MainRoutes = () => {
  return(
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/dashbord' element={<DashBord/>}/>
    </Routes>
  )
}