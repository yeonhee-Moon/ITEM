import React, { useState } from 'react';
import styled from "styled-components";


function CompleteButton(props){
  const{onComplete}= props;
  var completedValue;
  const [isButtonClicked, setIsButtonClicked] = useState(completedValue);
  
  const showCompleted = (completed) => {
    // var completedValue;
    completedValue = completed;
  };

  const handleButtonClick = (completed) => {
    setIsButtonClicked(!isButtonClicked);
    completed = !isButtonClicked;
  };

  // 버튼의 스타일을 동적으로 설정
const buttonStyle = {
    padding: '10px',
    backgroundColor: isButtonClicked ? 'red' : 'white',
    color: 'black',
    cursor: 'pointer',
  };

  return (
  //만약 버튼을 눌렀을 때 todo.completed의 값이 변하지 않으면 바뀐 값을 변수에 담아서 보내보자
    //completed 값이 바뀐채로 백엔드에 전송될지 확인
  
  <button style={buttonStyle} onShowCompleted={showCompleted} onClick={() => {handleButtonClick(); onComplete(todo.id, todo.completed);}}>
  </button>

  );
}


export default CompleteButton;