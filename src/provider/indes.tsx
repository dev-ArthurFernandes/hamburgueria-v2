import { BurguerProvider } from "../context/BurguerContext"
import { UesrProvider } from "../context/UserContext"

interface iProvider{
  children: React.ReactNode;
}


export const Provider = ({children}: iProvider) => {
  return(
    <>
      <UesrProvider>
        <BurguerProvider>
          {children}
        </BurguerProvider>
      </UesrProvider>
    </>
  )
}