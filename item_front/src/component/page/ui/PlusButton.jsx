import React ,{ useState } from 'react';


function PlusButton(props){

  // 버튼의 스타일을 동적으로 설정
const buttonStyle = {
    padding: '10px',
    backgroundColor: 'yellow',
    color: 'black',
    cursor: 'pointer',
  };

  return <button style={buttonStyle} onClick={onClick}>Plus</button>;
}


export default PlusButton;