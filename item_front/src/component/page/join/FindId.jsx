import React, { useState  }from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const FindId = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: ''
  });
  const [userid, setUserid] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFindUserid = async (e) => {
    e.preventDefault();

    const formDataObject = new FormData();
    formDataObject.append('username', formData.username);
    formDataObject.append('email', formData.email);
    
    // Axios로 POST 요청 보내기
    try {
      const response = await axios.post('http://localhost:3000/item/findid', formDataObject, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });
      console.log('서버 응답:', response.data);
      setUserid(response.data);
    } catch (error) {
      console.error('아이디 찾기 실패:', error);
      alert('아이디 찾기 실패: 사용자 이름과 이메일을 확인하세요.');
    }
  };

  return (
    <div>
    <form onSubmit={handleFindUserid}>
    <div>
      <h2>아이디 찾기</h2>
      <label>
        이름:
        <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange} />
      </label>
      <label>
        이메일:
        <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange} />
      </label>
      <button type="submit">아이디 찾기</button>
      {userid && <p>찾은 아이디: {userid}</p>}
    </div>
    </form>
    <Button title="HOME"
      onClick={() => {
        navigate("/main");
      }}/>
    </div>
  );
};

export default FindId;