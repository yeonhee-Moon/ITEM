import React from 'react';
import styled from "styled-components";

const Block = styled.div`
    display: flex;
    margin-top: 1rem;
`;

function Symbol(props){

 const CompleteStyle = {
    color: 'red'
  };

 const ConfirmStyle = {
    color: 'orange'
  };

 const TutorStyle = {
    color: 'blue'
  };

  const DeleteStyle = {
    color: 'black'
  };


return (
<Block>
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
<span> : complete</span>
<span style={ConfirmStyle} class="material-symbols-outlined">
radio_button_checked
</span>
<span> : confirm</span>
<span style={TutorStyle} class="material-symbols-outlined">
check_box_outline_blank
</span>
<span> : tutor</span>
<span style={DeleteStyle} class="material-symbols-outlined">
close 
</span>
<span>: delete</span>
</Block>


    );
}


    export default Symbol;