import styled from "styled-components"
import SearchBar from "../component/searchBar"
import imageSrc from '../assets/mask.jpeg'
import SuggestList from "../component/suggestList"
// import {Background} from "./explore.style"

const Explore = () => {

    const Wrapper = styled.div`
    background-color: azure;
    width: 100%;
    height: 100%;
    `
    const Background = styled.img`
width: 100%;
background-color: aquamarine;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items: flex-end;
`
    return <Wrapper>
    <SearchBar/>
    <Background src={imageSrc}>
        
    </Background>
    <SuggestList></SuggestList>
    </Wrapper>
}

export default Explore