import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    margin-right: 3px;
    border-width: 1px;
    border-radius: 5px;
    border-color: lightgrey;
    color: aliceblue;
    width: 120px;
    font-size: 1rem;
    background-color: lightgrey;
`;

function Button(props){
  const{title, onClick}= props;
  return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}


export default Button;
