import { NavBar } from "../../components/NavBar";
import { Container } from "../../components/Container/style.js"
import { Card } from "../../components/BurguerList/BurguerCards";
import { BurguerList } from "../../components/BurguerList";


export const DashBord = () => {
  return(<>
    <NavBar/>
    <Container>
      <BurguerList/>
    </Container>
  </>)
}