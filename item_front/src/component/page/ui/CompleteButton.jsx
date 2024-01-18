import React from "react";
import styled from "styled-components";


function CompleteButton(props){
  const{}= props;
  const [isButtonClicked, setIsButtonClicked] = useState(completeValue);
  var completeValue;
  
  const handleButtonClick = (completed) => {
    completeValue = completed;
    // 상태를 변경하여 버튼의 스타일을 변경
    setIsButtonClicked(!isButtonClicked);
  };


  // 버튼의 스타일을 동적으로 설정
const buttonStyle = {
    padding: '10px',
    backgroundColor: isButtonClicked ? 'red' : 'white',
    color: 'black',
    cursor: 'pointer',
  };

  return (
  
  <button style={buttonStyle} onShowComplete={handleButtonClick} >
  </button>

  );
}


export default CompleteButton;