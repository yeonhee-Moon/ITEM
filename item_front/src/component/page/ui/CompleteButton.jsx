import React, { useState } from 'react';

function CompleteButton(props){
  const{completed, onClick}= props;
  var completedValue;
    completedValue = completed;
  const [isButtonClicked, setIsButtonClicked] = useState(completedValue);


  // const showCompleted = (completed) => {
  //   // var completedValue;
  //   completedValue = completed;
  //   console.log('completed : ', completed);
  // };

  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
    // completed = !isButtonClicked;
    // console.log('completedButtoned : ', completed);
  };

const buttonStyle = {
    padding: '10px',
    backgroundColor: 'white',
    color: isButtonClicked ? 'red' : 'black',
    cursor: 'pointer',
  };

  return (
  //만약 버튼을 눌렀을 때 todo.completed의 값이 변하지 않으면 바뀐 값을 변수에 담아서 보내보자
  
  // <button style={buttonStyle} onShowCompleted={showCompleted} onCompleteClick={() => {handleButtonClick(); onComplete();}}>
  // </button>
  <span>
  <style>
     {`
      .material-symbols-outlined {
        font-variation-settings:
          'FILL' 0,
          'wght' 400,
          'GRAD' 0,
          'opsz' 40
        }
      `}
  </style>
  <button style={buttonStyle} onClick={() => {handleButtonClick(); onClick(); }}>
  <span class="material-symbols-outlined">
  check
  </span>
  </button>
  </span>
  );
}


export default CompleteButton;