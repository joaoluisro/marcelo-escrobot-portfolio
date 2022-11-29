import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import { useState,useEffect } from 'react'
import {useKeyPress} from '../utils/hooks'


// returns a blinking arrow fa-icon
// 'selected' property indicates whether or not to display-it
const ArrowIcon = (props) => {
  const selected = props.selected;
  const icon =  <FontAwesomeIcon icon={faChevronRight} className='pulsing-arrow' />;
  if(selected){
    return(icon)
  }
  return;
}

const Header = () => {

  // 'selected' indicate which section the user would like to navigate to
  const [selected, updateSelected] = useState([true, false, false])
  const unflipped = [false, false, false]

  // changes the selected section
  const flipSelected = (selectedSection) => {
    return unflipped.map((elm, index) => index == selectedSection)
  }
  
  // initializes the arrowUp and arrowDown hooks
  const arrowUpPressed = useKeyPress('ArrowUp')
  const arrowDownPressed = useKeyPress('ArrowDown')

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
  <div className='container'>
    <div className="page-title">

    <h1>Marcelo Escrobot</h1>
    </div>
    <div className="nav-sections" >
        <a href="" className="nav-button" onMouseEnter={e => {updateSelected(flipSelected(0))}}><ArrowIcon selected={selected[0]}/> About me </a>
        <a href="" className="nav-button" onMouseEnter={e => {updateSelected(flipSelected(1))}}><ArrowIcon selected={selected[1]}/> Projects</a>
        <a href="" className="nav-button" onMouseEnter={e => {updateSelected(flipSelected(2))}}><ArrowIcon selected={selected[2]}/> Contact</a>
    </div>
    <div className='fill-container'>
    </div>
    <div className='footer'>
      <a href="" className='vertical-nav-arrow'>
        <FontAwesomeIcon icon={faAnglesDown} className='vertical-arrow' />
      </a>
    </div>
  </div>
  )

}

export default Header;