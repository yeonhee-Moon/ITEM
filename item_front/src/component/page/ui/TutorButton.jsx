import React ,{ useState } from 'react';
import Todolist from '../main/Todolist';

function TutorButton(props){
const [isButtonClicked, setIsButtonClicked] = useState(false);
const [isConditionTrue, setIsConditionTrue] = useState(false);
const [isLined, setIsLined] = useState(linedValue);

//line 상태 db에 저장하고 id 에따라 line 상태값 정해지기


const storedIsAuthorTwo = localStorage.getItem('isAuthorTwo');

if (storedIsAuthorTwo ==='true') {
  setIsConditionTrue(!isConditionTrue)
};

const showLined = (lined) => {
  var linedValue;
  linedValue = lined;
};

const handleButtonClick = (lined) => {
    // 상태를 변경하여 버튼의 스타일을 변경
    setIsButtonClicked(!isButtonClicked);
    lined = !isLined;
  };


  // 버튼의 스타일을 동적으로 설정
const buttonStyle = {
    padding: '10px',
    backgroundColor: isButtonClicked ? 'blue' : 'white',
    color: 'black',
    cursor: 'pointer',
  };

  return (
  
  <button style={buttonStyle} onShowLined={showLined} onClick={() => {handleButtonClick(); onLined(todo.id, todo.lined);}} disabled={isConditionTrue}> GOOD
  </button>

  );
}


export default TutorButton;