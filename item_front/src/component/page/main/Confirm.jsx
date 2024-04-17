import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import ConfirmList from './ConfirmList';


function Confirm(props) {
  const{confirmId}= props;
  const [formData, setFormData] = useState({
    id: {confirmId},
    text: '',
    image:''
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/confirmList");//학생>>제출>>"/제출목록(>>main)" 선생>>바로 제출목록


    const formDataObject = new FormData();
    formDataObject.append('id', formData.id);
    formDataObject.append('text', formData.text);
    formDataObject.append('image', formData.image);
    
    try {
      const response = await axios.post('http://localhost:3000/item/comfirm', formDataObject, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });
      console.log('서버 응답:', response.data);
    } catch (error) {
      console.error('오류 발생:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
       <h1>확인해주세요~!</h1>
      <div>
        <label>글:</label>
          <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
          />
      </div>
      <div>
        <label>사진:</label>
          <input
          type="file"
          name="image"
          value={formData.image}
          onChange={handleChange}
          />
        </div>
      <button type="submit">제출</button>
      <button type="submit">수정</button>
    </form>
    <ConfirmList condition={handleSubmit}/>
    </div>
  );
}

export default Confirm;