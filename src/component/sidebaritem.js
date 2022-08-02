import './sidebaritem.css'
import HomeSvg from './svg/homesvg'
const SideBarItem = (props) => {
    return <div className="item-wraper">
    <div className="side-bar-item"> 
    
    <div className="icon-container">
        {props.svg}
        </div> 
        <div>{props.item}</div>
        </div>
        </div>
}

export default SideBarItem