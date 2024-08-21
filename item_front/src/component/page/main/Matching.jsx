import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Matching() {
    const [formData, setFormData] = useState({
      tutorid: '',
      tuteeid: '',
    });
  
    const storedUserid = localStorage.getItem('userid');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      navigate("/main");
  
      const formDataObject = new FormData();
      formDataObject.append('tutorid', formData.tutorid);
      formDataObject.append('tuteeid', formData.tuteeid);
      formDataObject.append('userid', storedUserid);
      
      // Axios로 POST 요청 보내기
      try {
        const response = await axios.post('http://localhost:3000/item/matching', formDataObject, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
        });
        console.log('서버 응답:', response.data);
        localStorage.setItem('matchingname', response.data.matchingname);
        localStorage.setItem('team',  response.data.TEAM);
        
        if (response.data.AUTHOR === '1') {
          localStorage.setItem('isAuthorOne', 'true');
          localStorage.setItem('isAuthorTwo', 'false');
          //setIsAuthorOne(true);
        } else if (response.data.AUTHOR === '2'){
          localStorage.setItem('isAuthorTwo', 'true');
          localStorage.setItem('isAuthorOne', 'false');
          //setIsAuthorTwo(true);
        } else {
          localStorage.setItem('isAuthorOne', 'false');
          localStorage.setItem('isAuthorTwo', 'false');
          //setIsAuthorOne(false);
          //setIsAuthorTwo(false);
        }
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
       <h1>팀매칭</h1>
       <h2>아이디를 입력하세요</h2>
      <div>
        <label>튜터(선생님):</label>
          <input
          type="text"
          name="tutorid"
          value={formData.tutorid}
          onChange={handleChange}
          />
      </div>
      <div>
        <label>튜티(학생)</label>
          <input
          type="text"
          name="tuteeid"
          value={formData.tuteeid}
          onChange={handleChange}
          />
        </div>
        <button type="submit">완료</button>
    </form>
  </div>
  );
}

export default Matching;