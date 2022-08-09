import styled from "styled-components"

const Notifications = () => {
    const Header = styled.span`
        font-size: 24px;
        font-weight: bold;
        margin: 10px;
    `
    const Nav = styled.div`
    margin-top: 30px;
        display:flex;
        flex-direction:row;
        align-items: center;
        justify-content:center;
`
    const NavItem = styled.div`
        display:flex;
        justify-content:center;
        align-items:center;
        width: 50%;
        height: 50px;
        

        &:hover {
            background-color:#E7E7E8;
            cursor: pointer;
        }
    `
    const Item = styled.div`
        height: 100%;
        border-bottom:3px solid #1D9BF0;
       
    `
    const NotiWrapper = styled.div`
        height: 100px;
        width: 100%;
        display:flex;
        flex-direction:row;
        border: 1px solid  #E7E7E8;
        justify-content: center;
        align-items: center;
        &:hover{
            cursor: pointer;
            background-color: #E7E7E8;
        }
         & p {
            margin: 0 16px;
         }
    `

   
    return <>
    <Header>Notifications</Header>
    <Nav>
        <NavItem> <Item>All</Item> </NavItem>
        <NavItem><Item>Mentions</Item> </NavItem>
        
    </Nav>
    <NotiWrapper>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, ab rem exercitationem labore commodi, corporis voluptate fugiat, quis a ex iusto laborum est nobis mollitia rerum possimus molestiae harum blanditiis?</p>
    </NotiWrapper>
    <NotiWrapper>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, ab rem exercitationem labore commodi, corporis voluptate fugiat, quis a ex iusto laborum est nobis mollitia rerum possimus molestiae harum blanditiis?</p>
    </NotiWrapper>
    <NotiWrapper>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, ab rem exercitationem labore commodi, corporis voluptate fugiat, quis a ex iusto laborum est nobis mollitia rerum possimus molestiae harum blanditiis?</p>
    </NotiWrapper>
    </>
}

export default Notifications