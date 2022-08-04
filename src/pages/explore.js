import styled from "styled-components"
import SearchBar from "../component/searchBar"
// import {Background} from "./explore.style"

const Explore = () => {

    const Background = styled.div`
width: 100%;
height: 100%;
background-color: aquamarine;
    background-image: url(../assets/mask.jpeg);
`
    return <>
    <SearchBar/>
    <Background></Background>
</>
}

export default Explore