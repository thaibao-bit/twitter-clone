
import Qeett from "../component/qeett"
import BackArrowSvg from "../component/svg/backArrowSvg"
import {BackWrapper,RightWrapper,Title,TitleBar,QeettCount, BackGroundImage, InfoBlock, InfoTopLeft, InfoTopRight, UserInfoBlock, ProfileWrapper, Bio, DayJoined,FollowBlock,FollowText,FollowerText,Nav,NavItem, Item}
 from './profile.style'

const Profile = () => {


    return <>
        <ProfileWrapper>
        <TitleBar>
            <BackWrapper>
                <BackArrowSvg></BackArrowSvg>
            </BackWrapper>
            <RightWrapper>
            <Title>UserName Profile</Title>
            <QeettCount>11 Qeetts</QeettCount>
            </RightWrapper>
        </TitleBar>
        <BackGroundImage>   </BackGroundImage>
        <InfoBlock>
            <InfoTopLeft></InfoTopLeft>
            <InfoTopRight>Edit Profile</InfoTopRight>
        </InfoBlock>
        <UserInfoBlock>
        <strong >username</strong >
        <span >@useraccount</span >
        </UserInfoBlock>
        <Bio>This is my bio</Bio>
        <DayJoined>Joined from Feb, 2021</DayJoined>
        </ProfileWrapper>
        <FollowBlock>
        <FollowText>80</FollowText>
        <FollowerText>0</FollowerText>
        </FollowBlock>
        <Nav>
            <NavItem>
                <Item>Qeett</Item>
            </NavItem>
            <NavItem>
                <Item>Qeett & Answers</Item>
            </NavItem>
            <NavItem>
                <Item>Media</Item>
            </NavItem>
            <NavItem>
                <Item>Likes</Item>
            </NavItem>
            
        </Nav>
        <Qeett></Qeett>
        <Qeett></Qeett>
        <Qeett></Qeett>
        <Qeett></Qeett>
    </>
}

export default Profile