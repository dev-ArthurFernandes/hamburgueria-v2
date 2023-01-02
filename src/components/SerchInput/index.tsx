import { StyledSearch } from '../../components/SerchInput/style.js';
import { AiOutlineSearch } from 'react-icons/ai'
import { useContext, useState } from 'react';
import { BurguerContext } from '../../context/BurguerContext/index.js';

interface iSearch{
  className: string,
}


export const SearchInput = ({className}: iSearch) => {
  
  const [searchValue, setSearchValue] = useState('')


  const {setFilter} = useContext(BurguerContext)

  function search(){
    setFilter(searchValue)
  }

  return(
    <StyledSearch className={className}>
      <input placeholder='Pesquisa' onChange={(event) => setSearchValue(event.target.value)}/>
      <button onClick={search}><AiOutlineSearch style={{'color': '#fff', 'width': "20px", 'height': '20px' }}/></button>
    </StyledSearch>
  )
}