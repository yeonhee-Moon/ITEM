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
  backgroundColor: 'white',
  color: isButtonClicked ? 'orange' : 'black',
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
<button style={buttonStyle} onClick = {() => {handleConfirm(todo.id); handleButtonClick(); onClick();}}>
<span className="material-symbols-outlined">
radio_button_checked
</span>
</button>
</span>
);

};


export default ConfirmButton;