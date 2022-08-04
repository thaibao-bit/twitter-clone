import styled from 'styled-components'
import HashTag from './hashtag'
import Header5 from './header5'

const SuggestList = (props) => {
    const Wrapper = styled.div`
    background-color: #F7F9F9;
    width: 100%;
    border-radius: 25px;
    padding: 20px 0;
    margin: 16px 0px;

   
    `
    return <Wrapper>
        <Header5 text = {props.title ? props.title : "Trending"}/>
        <HashTag/>
        <HashTag/>
        <HashTag/>
        <HashTag/>
        <HashTag/>
        <HashTag/>
        <HashTag/>
    </Wrapper>
}

export default SuggestList