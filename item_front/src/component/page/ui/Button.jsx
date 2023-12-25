import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-width: 1px;
  `;


function Button(props){
  const{title, onClick}= props;
  return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}


export default Button;
