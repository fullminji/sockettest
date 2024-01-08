import question from '../../style/images/icon/question.svg';
import character from '../../style/images/visual/char.png';
import logo from '../../style/images/logo.png';

const Main = () => {
  return (
    <div className="page main">
      <h1>
        <img src={logo} alt="미스터리 스케치" className="title" />
      </h1>
      <div className="selectContainer">
        <div className="questionArea">
          <img src={question} alt="questionIcon" className="questionIcon" />
        </div>
        <div className="characterArea">
          <img src={character} alt="캐릭터이미지" />
        </div>
        <input type="text" placeholder="enter your name" className="userName" />
        <div className="btnArea">
          <button className="startBtn">START</button>
          <button className="createBtn">CREATE</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
