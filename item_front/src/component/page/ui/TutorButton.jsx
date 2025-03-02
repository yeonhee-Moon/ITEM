import React ,{ useState , useEffect} from 'react';

function TutorButton(props){
const{lined, onClick}= props;

var linedValue;
  linedValue = lined;

const [isButtonClicked, setIsButtonClicked] = useState(linedValue);
const [isConditionTrue, setIsConditionTrue] = useState(false);

useEffect(() => {
  const storedIsAuthorTwo = localStorage.getItem('isAuthorTwo');

  if (storedIsAuthorTwo ==='true') {
    setIsConditionTrue(!isConditionTrue)
  };
}, []);


const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
  };

const buttonStyle = {
    padding: '10px',
    backgroundColor: 'white',
    color: isButtonClicked ? 'blue' : 'black',
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
  <button style={buttonStyle} onClick={() => {handleButtonClick(); onClick(); }} disabled={!isConditionTrue}>
  <span className="material-symbols-outlined">
  check_box_outline_blank
  </span>
  </button>
  </span>

  );
}


export default TutorButton;