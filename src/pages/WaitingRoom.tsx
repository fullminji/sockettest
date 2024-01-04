import React from 'react';
import '../style/sass/WaitingRoom.scss';
import PrivateIcon from '../style/images/private.svg';
import SoundOn from '../style/images/soundOn.svg';

interface UserProps {
  username: string;
  points: number;
}

const User: React.FC<UserProps> = ({ username, points }) => {
  return (
    <div className="user">
      <p>{username}</p>
      <p>{points} POINT</p>
    </div>
  );
};

const WaitingRoom: React.FC = () => {
  return (
    <div className="waitingRoom">
      <div className="background">
        <div className="gameBar">
          <p className="logo">
            MYSTERY
            <br />
            SKETCH
          </p>
          <div className="iconBox">
            <img src={PrivateIcon} alt="icon" />
            <img src={SoundOn} alt="icon" />
          </div>
        </div>
        <div className="container">
          <div className="userBox">
            <User username="헝민" points={100} />
            <User username="NO USER" points={0} />
            <User username="NO USER" points={0} />
            <User username="NO USER" points={0} />
            <User username="NO USER" points={0} />
            <User username="NO USER" points={0} />
            <User username="NO USER" points={0} />
            <User username="NO USER" points={0} />
          </div>

          <div className="gameBox">
            <div className="settingBox">
              <div className="canvas">
                <div className="check">
                  <p>플레이어</p>
                  <p>몇명</p>
                </div>

                <div className="check">
                  <p>라운드</p>
                </div>
                <button>START</button>
              </div>
              <div className="linkCopyBtn">
                <span>링크</span>
                <span className="linkBtn">Copy</span>
              </div>
            </div>
            <div className="chatroom" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingRoom;
