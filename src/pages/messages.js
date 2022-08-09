import styled from "styled-components"
import BackArrowSvg from "../component/svg/backArrowSvg"

const Messages = () => {

    const TitleBar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center ;
    `


    const BackWrapper = styled.div`
    width: 30px;
    height: 30px;
    margin:8px;
    border-radius: 50%;
    &.svg {
        width: 30px;
        
    }
    &:hover{
            background-color: rgba(0, 0, 0, 0.267);
        }
    `

    const Title = styled.span`
    font-size:20px;
    font-weight: bold;
    margin-left: 16px;  
    `

    return <>
        <TitleBar>
            <BackWrapper>
                <BackArrowSvg></BackArrowSvg>
            </BackWrapper>
            <Title>Message</Title>
        </TitleBar>
    </>
}

export default Messages