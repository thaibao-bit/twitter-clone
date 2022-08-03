import './hashtag.css'
import EllipsisSvg from './svg/ellipsisSvg'

const HashTag = (props) => {
    return <div className="hashtag">
        <div className="hash_left">
            <div className="hash_type"><p>{props.type ? props.type : "Hottt hot hot"}</p></div>
            <div className="hash_tag"><b>{props.tag ? props.tag : "#Banh_Mi_Bo_Sua"}</b></div>
            <div className="hash_qeett"><p>{props.qeetts ? props.qeetts : "20000"} Qeett</p></div>
        </div>
        <div className="hash_right">
        <div className="qeet_ellipsis">
            <EllipsisSvg/>
        </div>
        </div>
    </div>
}

export default HashTag