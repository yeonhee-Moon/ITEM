import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function ConfirmButton(props){
const{todo, confirmed, onClick}= props;
var confirmedValue;
  confirmedValue = confirmed;
const [isButtonClicked, setIsButtonClicked] = useState(confirmedValue);

const handleButtonClick = () => {
  setIsButtonClicked(!isButtonClicked);
};

const storedIsAuthorTwo = localStorage.getItem('isAuthorTwo');

const navigate = useNavigate();


// const handleNavigate = (id) => {

//   navigate(`/confirm?paramName=${id}`);
// };

const handleConfirm = (id) => {
  // <Confirm confirmId={id}/>;
  // <ConfirmList confirmId={id}/>;


  storedIsAuthorTwo === 'true' ? (
    navigate(`/confirmList?paramName=${id}`)
  ) : (
    navigate(`/confirm?paramName=${id}`)
  );
};

const buttonStyle = {
  padding: '10px',
  backgroundColor: isButtonClicked ? 'orange' : 'white',
  color: 'black',
  cursor: 'pointer',
};

return (
  
<button style={buttonStyle} onClick = {() => {handleConfirm(todo.id); handleButtonClick(); onClick();}}>CONFIRM
</button>
);

};


export default ConfirmButton;