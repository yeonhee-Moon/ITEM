import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-width: 1px;
  padding: 10px;
  backgroundColor: red;
  color: black;
  cursor: pointer;
  `;


function CompleteButton(props){
  const{title, onClick}= props;
  return <StyledButton onClick={onClick}>{title || "check"}</StyledButton>;
}


export default CompleteButton;