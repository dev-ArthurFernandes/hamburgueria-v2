import { StyledSearch } from '../../components/SerchInput/style.js';
import { AiOutlineSearch } from 'react-icons/ai'

interface iSearch{
  className: string,
}


export const SearchInput = ({className}: iSearch) => {
  return(
    <StyledSearch className={className}>
      <input placeholder='Pesquisa'/>
      <button><AiOutlineSearch style={{'color': '#fff', 'width': "20px", 'height': '20px' }}/></button>
    </StyledSearch>
  )
}