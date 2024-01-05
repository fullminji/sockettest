import '../../style/sass/Main.scss';
import question from '../../style/images/icon/question.svg';
import character from '../../style/images/visual/char.png';
import title from '../../style/images/title.png';

const Main = () => {
  return (
    <div className="main">
      <img src={title} alt="title" className="title" />
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
