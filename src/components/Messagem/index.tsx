import { FiShoppingBag } from 'react-icons/fi';
import { StyledMessage } from './style.js';

export const Messagem = () => {
  return(
    <StyledMessage>
      <div className="greenBag">
        <FiShoppingBag style={{"color": "var(--color-success)", "width": "25px", "height": "25px"}}/>
      </div>
      <p>A vida é como sanduíche, é preciso enche-lá com os <strong>melhores</strong> ingredientes.</p>
    </StyledMessage>
  )
}