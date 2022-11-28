import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useState,useEffect } from 'react'
import {useKeyPress} from './hooks'

const sections = [
  {'section': 'About me',
  'references': 'about-me'},
  {'section': 'Projects',
  'references': 'projects'},
  {'section': 'Contact',
  'references': 'contact'},
]

const ArrowIcon = (props) => {
  const selected = props.selected;
  const icon =  <FontAwesomeIcon icon={faChevronRight} className='pulsing-arrow' />;
  if(selected){
    return(icon)
  }
  return;
}


const Header = () => {

  const [selected, updateSelected] = useState([true, false, false])

  const arrowUpPressed = useKeyPress('ArrowUp')
  const arrowDownPressed = useKeyPress('ArrowDown')

  const updateSelectedUp = (e) => {
    
    if(selected[0]) updateSelected([false, false, true])
    else if(selected[1]) updateSelected([true, false, false])
    else updateSelected([false, true, false])
  }

  useEffect(() => {
    if (arrowUpPressed) {
      if(selected[0]) updateSelected([false, false, true])
      else if(selected[1]) updateSelected([true, false, false])
      else updateSelected([false, true, false])
    }
  }, [arrowUpPressed]);

  useEffect(() => {
    if (arrowDownPressed) {
      if(selected[0]) updateSelected([false, true, false])
      else if(selected[1]) updateSelected([false, false, true])
      else updateSelected([true, false, false])
    }
  }, [arrowDownPressed]);

  return(
  <>
  <div className="page-title">

   <h1>Marcelo Escrobot</h1>
  </div>
  <div className="nav-sections" >
      <a href="" className="nav-button"><ArrowIcon selected={selected[0]}/> About me </a>
      <a href="" className="nav-button"><ArrowIcon selected={selected[1]}/> Projects</a>
      <a href="" className="nav-button"><ArrowIcon selected={selected[2]}/> Contact</a>

  </div>
  </>
  )

}

export default Header;