import React, { useState, useEffect, useCallback } from 'react';
import io from 'socket.io-client';
import SendButton from '../style/images/icon/send_button.svg';

type Message = {
  message: string;
  nickname: any;
};

const Chat: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [nickname] = useState<any>(() => {
    const userNickname = localStorage.getItem('nickname');
    return userNickname || '햇살';
  });

  const [messages, setMessages] = useState<Message[]>([]);
  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    const newSocket = io('http://43.203.93.116:8000');
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const sendMessage = useCallback(() => {
    if (socket) {
      const data = { message, nickname };
      socket.emit('message', data);
      setMessage('');
    }
  }, [socket, message, nickname]);

  useEffect(() => {
    const messageHandler = (data: Message) => {
      setMessages(prevMessages => [...prevMessages, data]);
    };

    if (socket) {
      socket.on('message', messageHandler);

      return () => {
        socket.off('message', messageHandler);
      };
    }
  }, [socket]);

  console.log(message);
  return (
    <div className="chat">
      <div className="chatContainer">
        <div className="chatBox">
          {messages.map((msg, index) => (
            <p key={index}>
              {msg.nickname}님 : {msg.message}
            </p>
          ))}
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
            <img onClick={sendMessage} src={SendButton} alt="SendButton" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
