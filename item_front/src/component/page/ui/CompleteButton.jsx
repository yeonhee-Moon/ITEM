import React, { useState } from 'react';

function CompleteButton(props){
  const{completed, onClick}= props;

  var completedValue;
    completedValue = completed;

  const [isButtonClicked, setIsButtonClicked] = useState(completedValue);

  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
  };

const buttonStyle = {
    padding: '10px',
    backgroundColor: 'white',
    color: isButtonClicked ? 'red' : 'black',
    cursor: 'pointer',
  };

  return (

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
  <span className="material-symbols-outlined">
  check
  </span>
  </button>
  </span>
  
  );
}


export default CompleteButton;