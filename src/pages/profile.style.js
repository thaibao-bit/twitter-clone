import styled from "styled-components";

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 0;
`;

export const TitleBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;

export const BackWrapper = styled.div`
  width: 30px;
  height: 30px;
  margin: 8px;
  border-radius: 50%;
  &.svg {
    width: 30px;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.267);
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 16px;
`;
export const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
export const QeettCount = styled.span`
  font-size: 12;
  font-weight: 300;
`;

export const BackGroundImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: burlywood;
`;

export const InfoBlock = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoTopLeft = styled.div`
  width: 160px;
  height: 160px;
  background-color: black;
  margin-left: 16px;
  border-radius: 50%;
  transform: translateY(-80px);
  border: 5px solid whitesmoke;
`;

export const InfoTopRight = styled.button`
  margin: 20px;
  height: fit-content;
  padding: 10px;
  font-weight: bold;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  color: gray;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
export const UserInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 20px;
`;

export const Bio = styled.span`
  margin: 0px 20px;
`;
export const DayJoined = styled.span`
  font-weight: 200;
  color: gray;
  margin: 10px 20px;

  &::before {
    content: "";
    background-color: grey;
    padding: 0 10px;
    margin: 8px;
  }
`;
export const FollowBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: flex-start;
  margin-bottom: 16px;
`;
export const FollowText = styled.span`
  margin: 0 20px;
  font-weight: bold;
  color: black;

  &::after {
    content: " Following";
    font-weight: 300;
    color: grey;
  }

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const FollowerText = styled.span`
  margin: 0 20px;
  font-weight: bold;
  color: black;

  &::after {
    content: " Follower";
    font-weight: 300;
    color: grey;
  }

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
export const Nav = styled.div`
margin-top: 30px;
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content:center;
`
export const NavItem = styled.div`
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
export const Item = styled.div`
    height: 100%;
    border-bottom:3px solid #1D9BF0;
    font-weight: 600;
   
`