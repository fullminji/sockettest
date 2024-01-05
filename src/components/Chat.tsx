import React, { useState } from 'react';
import SendButton from '../style/images/icon/send_button.svg';
import '../style/sass/Chat.scss';

const Chat: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  return (
    <div className="chat">
      <div className="chatContainer">
        <div className="chatBox">
          <p>닉네임님이 입장하셨습니다.</p>
          <p>닉네임 : 포크레인</p>
          <p>현재시간은 1:39am 눈이 감겨요</p>
          <p>짜라쟌 짝수에만 배경색</p>
        </div>
        <div className="sendBox">
          <div className="send">
            <input
              type="text"
              value={message}
              placeholder="채팅을 입력해주세요"
              onChange={e => {
                setMessage(e.target.value);
              }}
            />
            <img src={SendButton} alt="SendButton" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
