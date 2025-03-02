import React, { useState } from 'react';
import axios from 'axios';
import ConfirmList from './ConfirmList';
import { useSearchParams } from 'react-router-dom';
import styled from "styled-components";

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  // border: 2px solid black;
  width: 300px;
`;

const LeftBlock = styled.div`
`;

const RightBlock = styled.div`
`;

const ButtonBlock = styled.div`
  margin-top: 2px;
`;



function Confirm() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('paramName');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [isButtonClicked, setIsButtonClicked] = useState(false);


  const formDataObject = new FormData();
  formDataObject.append('id', `${id}`);
  formDataObject.append('text', description);
  if (image) {
    formDataObject.append('image', image); 
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const buttonType = e.nativeEvent.submitter.name;

    if (buttonType === 'buttonInsert') {
      handleInsert();
    } else if (buttonType === 'buttonUpdate') {
      handleUpdate();
    }
  };

  const handleInsert = async () => {
   
    try {
      const response = await axios.post('http://localhost:3000/item/confirm/insert', formDataObject, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });
      console.log('서버 응답:', response.data);
    } catch (error) {
      console.error('오류 발생:', error);
    }

    setIsButtonClicked(!isButtonClicked);
  };

  

  const handleUpdate = async () => {
    
    try {
      const response = await axios.post('http://localhost:3000/item/confirm/update', formDataObject, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });
      console.log('서버 응답:', response.data);
    } catch (error) {
      console.error('오류 발생:', error);
    }

    setIsButtonClicked(!isButtonClicked);
  };


  const handleDescriptionChange = (e) => {
    setDescription(e.target.value); 
  };


  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  

  return (
    <div>
    <form onSubmit={handleSubmit}>
       <h1>확인해주세요</h1>
      <Block>
      <LeftBlock>
        <label>글:</label>
      </LeftBlock>
      <RightBlock>
          <input
          type="text"
          name="text"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Enter description" 
          />
      </RightBlock>
      </Block>
      <Block>
      <LeftBlock>
        <label>사진:</label>
      </LeftBlock>
      <RightBlock>
          <input
          type="file"
          name="image"
          onChange={handleImageChange}
          />
      </RightBlock>
      </Block>
          {image && <img src={image} alt="Fetched Image" />}
      <Block>
        <LeftBlock/>
         <ButtonBlock>
         <button type="submit" name="buttonInsert" >제출</button>
         <button type="submit" name="buttonUpdate" >수정</button>
        </ButtonBlock>
      </Block>
    </form>
    <ConfirmList condition={isButtonClicked}/>
    </div>
  );
}

export default Confirm;