import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Confirm from '../main/Confirm';

const StyledButton = styled.button`
  border-width: 1px;
  padding: 10px;
  backgroundColor: orange;
  color: black;
  cursor: pointer;
  `;

function ConfirmButton(props){
  
const navigate = useNavigate();

const handleConfirm = (id) => {
  <Confirm confirmId={id}/>;
  navigate("/confirm");
};

return (
  
<StyledButton onConfirm ={handleConfirm}>confirm
</StyledButton>

);

};


export default ConfirmButton;