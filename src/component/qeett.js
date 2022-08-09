import AnswerSvg from "./svg/answerSvg";
import EllipsisSvg from "./svg/ellipsisSvg";
import LikeSvg from "./svg/likeSvg";
import ProfileSvg from "./svg/profileSvg";
import ReqeettSvg from "./svg/reqeettSvg";
import ShareSvg from "./svg/shareSvg";
import Video from "./video";
import styled from "styled-components";
import { useRef } from 'react'
const Qeett = () => {
  const Qeet = styled.div`
    display: flex;
    padding: 10px;
    flex-direction: row;
    border: 1px outset rgba(0, 0, 0, 0.07);
    &:hover {
        cursor: pointer;
    }
  `;
  const QeetAvatar = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.363);
  `;
  const QeetContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
  `;
  const QeetTop = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 25px;
  `;
  const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 25px;
    margin: 16px;
  `
  const UserName = styled.span`
  font-weight: bold;
  margin: 0 8px;
  `
  const Account = styled.span`
  font-weight: 300;
    margin: 0 8px;
  `
  const Time = styled.span`
  font-style: oblique;
    font-weight: 300;
  `

  const Ellipsis = styled.div`
  width: 40px;
    height: 40px;
    background-color: #F7F9F9;
    border-radius: 25px;
    margin: 16px 16px 0 16px;

    &:hover{
        background-color: #d7e9e9;
    }
  `
  const QeetText = styled.div`
  margin: 16px;
  `

  const QeetMedia = styled.div`
  margin: 16px;
    width: calc(100% - 32px);
    background-color: cadetblue;
    border: 1px solid rgba(48, 45, 45, 0.288);
    border-radius: 25px;
  `

  const QeetAction = styled.div`
  width: calc(100% - 16px);
    height: 70px;
    margin: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-radius: 25px;
  `
  const QeetAnswer = styled.div`
  width: 32px;
    height: 32px;
    padding: 8px;
    border-radius: 25px;

    &:hover {
        background-color: #d7e9e9;
        color: aqua;
    }
  `
  const QeetReqeett = styled.div`
  width: 32px;
  height: 32px;
  padding: 8px;
  border-radius: 25px;

  &:hover {
    background-color: #d7e9e9;
    color: rgb(0, 255, 85);
  }
  `
  const QeetLike = styled.div`
  width: 32px;
    height: 32px;
    padding: 8px;
    border-radius: 25px;

    &:hover {
        background-color: #d7e9e9;
    color: rgb(255, 0, 128);
    }
  `
  const QeetShare = styled.div`
  width: 32px;
    height: 32px;
    padding: 8px;
    border-radius: 25px;
    &:hover {
        background-color: #d7e9e9;
    color: aqua;
    }
  `

  return (
    <Qeet>
      <QeetAvatar>
        <ProfileSvg />
      </QeetAvatar>
      <QeetContent>
        <QeetTop>
          <UserInfo>
            <UserName >Username</UserName>
            <Account>@user123</Account>
            <Time >3 B years ago</Time>
          </UserInfo>
          <Ellipsis>
            <EllipsisSvg />
          </Ellipsis>
        </QeetTop>
        <QeetText>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            possimus quidem inventore, quod, ipsa sapiente cupiditate laboriosam
            dolores atque dolorem aliquid delectus expedita ipsum quos dolorum
            voluptate, cum quibusdam dignissimos.
          </p>
        </QeetText>
        <QeetMedia>

          <Video/>
         
        </QeetMedia>
        <QeetAction>
          <QeetAnswer>
            <AnswerSvg />
          </QeetAnswer>
          <QeetReqeett>
            <ReqeettSvg />
          </QeetReqeett>
          <QeetLike>
            <LikeSvg />
          </QeetLike>
          <QeetShare>
            <ShareSvg />
          </QeetShare>
        </QeetAction>
      </QeetContent>
    </Qeet>
  );
};
export default Qeett;
