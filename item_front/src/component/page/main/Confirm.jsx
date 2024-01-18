import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

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
    navigate("/main");

    const formDataObject = new FormData();
    formDataObject.append('id', formData.id);
    formDataObject.append('text', formData.text);
    formDataObject.append('image', formData.image);
    
    // Axios로 POST 요청 보내기
    try {
      const response = await axios.post('http://localhost:3000/item/join', formDataObject, {
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
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          />
        </div>
      <button type="submit">제출</button>
    </form>
  );
}

export default Confirm;