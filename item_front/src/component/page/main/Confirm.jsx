import React, { useState } from 'react';
import axios from 'axios';
import ConfirmList from './ConfirmList';
import { useSearchParams } from 'react-router-dom';

function Confirm() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('paramName');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  // const [formData, setFormData] = useState({
  //   id: {id},
  //   text: description,
  //   image: image,
  // });

  const formDataObject = new FormData();
  formDataObject.append('id', `${id}`);
  formDataObject.append('text', description);
  formDataObject.append('image', image);

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

    setIsButtonClicked(true);
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

    setIsButtonClicked(true);
  };

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value); // 글 내용 설정
  };


  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  //  const handleImageChange = (e) => {
  //   const selectedImage = e.target.files[0];
  //   setImage(selectedImage);

  //  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
       <h1>확인해주세요</h1>
      <div>
        <label>글:</label>
          <input
          type="text"
          name="text"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Enter description" 
          />
      </div>
      <div>
        <label>사진:</label>
          <input
          type="file"
          name="image"
          onChange={handleImageChange}
          />
          {image && <img src={image} alt="Fetched Image" />}
        </div>
      <button type="submit" name="buttonInsert" >제출</button>
      <button type="submit" name="buttonUpdate" >수정</button>
    </form>
    <ConfirmList condition={isButtonClicked}/>
    </div>
  );
}

export default Confirm;