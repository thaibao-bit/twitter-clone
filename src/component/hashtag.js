import styled from 'styled-components'
import EllipsisSvg from './svg/ellipsisSvg'

const HashTag = (props) => {
    const Wrapper = styled.div`
    background-color: #F7F9F9;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    transition: 0.4s;
    padding: 16px 0px;
    &:hover {
        cursor: pointer;
        background-color: #EFF1F1;
    }
    `
    const LeftPart = styled.div`
    margin: 0 0 0 16px;
    `

    const HashType = styled.div`
     font-size: 14px;
    font-weight: 300;
    `

    const HastQeett = styled.div`
    font-size: 14px;
    font-weight: 300;
    `
    return <Wrapper>
        <LeftPart>
            <HashType><p>{props.type ? props.type : "Hottt hot hot"}</p></HashType>
            <div className="hash_tag"><b>{props.tag ? props.tag : "#Banh_Mi_Bo_Sua"}</b></div>
            <HastQeett><p>{props.qeetts ? props.qeetts : "20000"} Qeett</p></HastQeett>
        </LeftPart>
        <div className="hash_right">
        <div className="qeet_ellipsis">
            <EllipsisSvg/>
        </div>
        </div>
    </Wrapper>
}

export default HashTag