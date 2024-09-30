import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-width: 1px;
  padding: 10px;
  backgroundColor: black;
  color: white;
  cursor: pointer;
  `;


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
    <span class="material-symbols-outlined">
    close
    </span>
    </button>
   </span>
  );

};


export default DeleteButton;