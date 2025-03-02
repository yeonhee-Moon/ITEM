import React from "react";

function DeleteButton(props){
  
  const{onClick}= props;

  const buttonStyle = {
    padding: '10px',
    backgroundColor: 'white',
    color: 'black',
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
    <button style={buttonStyle} onClick={onClick}>
    <span className="material-symbols-outlined">
    close
    </span>
    </button>
   </span>
  );

};


export default DeleteButton;