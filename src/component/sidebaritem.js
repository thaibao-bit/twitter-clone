import './sidebaritem.css'
import HomeSvg from './svg/homesvg'
const SideBarItem = (props) => {
    return <div className="item-wraper">
    <div className="side-bar-item"> 
    
    <div className="icon-container">
        {props.svg}
        </div> 
        <span className='item-option'>{props.item}</span>
        </div>
        </div>
}

export default SideBarItem