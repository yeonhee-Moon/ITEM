import React from 'react';
import styled from "styled-components";


function Explain(props){

const InputArea = styled.div`
  border: 2px solid black;
//   padding: '10px';
  width: 250px;
  display: inline-block;
//   justify-content: center;
`;

const ButtonArea = styled.div`
`;

const ButtonBlock = styled.div`
flex-direction: column;
`;

const ButtonName = styled.div`
`;

const Block = styled.div`
height: 100vh;
scroll-snap-align: start;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

 const CompleteStyle = {
    color: 'red',
    fontSize: '24px'
  };

 const ConfirmStyle = {
    color: 'orange',
    fontSize: '24px'
  };

 const TutorStyle = {
    color: 'blue',
    fontSize: '24px'
  };

  const DeleteStyle = {
    color: 'black',
    fontSize: '24px'
  };

  


return (
<Block>
<InputArea>todolist</InputArea>
<ButtonArea>
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
<span style={CompleteStyle} class="material-symbols-outlined">
check
</span>
<span style={ConfirmStyle} class="material-symbols-outlined">
radio_button_checked
</span>
<span style={TutorStyle} class="material-symbols-outlined">
check_box_outline_blank
</span>
<span style={DeleteStyle} class="material-symbols-outlined">
close 
</span>
</ButtonArea>
<br/>
<br/>
<ButtonBlock>
<style>
    {`
     .material-symbols-outlined {
       font-variation-settings:
         'FILL' 0,
         'wght' 400,
         'GRAD' 0,
         'opsz' 40;
         font-size: 3em;
       }
     `}
</style>
<div>
<span style={{ color: 'red' }} class="material-symbols-outlined">
check
</span>
<span>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 완료했어요
</span>
<div>complete</div>
</div>
<div>
<span style={{ color: 'orange' }} class="material-symbols-outlined">
radio_button_checked
</span>
<span>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 확인해주세요
</span>
<div>confirm</div>
</div>
<div>
<span style={{ color: 'blue' }} class="material-symbols-outlined">
check_box_outline_blank
</span>
<span>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 확인했어요
</span>
<div>tutor</div>
</div>
<div>
<span style={{ color: 'black' }} class="material-symbols-outlined">
close 
</span>
<span>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 삭제할게요
</span>
<div>delete</div>
</div>
</ButtonBlock>
</Block>


    );
}


    export default Explain;