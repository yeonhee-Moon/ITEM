import React ,{ useState } from 'react';

function TutorButton(props){
const{todo, onClick}= props;
var linedValue;
const [isButtonClicked, setIsButtonClicked] = useState(linedValue);
const [isConditionTrue, setIsConditionTrue] = useState(false);

//line 상태 db에 저장하고 id 에따라 line 상태값 정해지기

const storedIsAuthorTwo = localStorage.getItem('isAuthorTwo');

if (storedIsAuthorTwo ==='true') {
  setIsConditionTrue(!isConditionTrue)
};

const showLined = (lined) => {
  // var linedValue;
  linedValue = lined;
  console.log('lined : ', lined);
};

const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
  };

const buttonStyle = {
    padding: '10px',
    backgroundColor: isButtonClicked ? 'blue' : 'white',
    color: 'black',
    cursor: 'pointer',
  };

  return (
  
  <button style={buttonStyle} onClick={() => {showLined(todo.lined); handleButtonClick(); onClick(); }} disabled={!isConditionTrue}>GOOD
  </button>

  );
}


export default TutorButton;