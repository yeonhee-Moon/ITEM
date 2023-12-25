import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

function Login() {
  const [formData, setFormData] = useState({
    userid: '',
    password: ''
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const formDataObject = new FormData();

    formDataObject.append('userid', formData.userid);
    formDataObject.append('password', formData.password);
    
    // Axios로 POST 요청 보내기
    try {
      const response = await axios.post('http://localhost:3000/item/login', formDataObject, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });
      console.log('서버 응답:', response.data);
      if (response.data.length !== 0) {
        // 로그인 성공
        const expirationTime = new Date().getTime() + 60 * 60 * 1000; // 1시간 후 만료
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('expirationTime', expirationTime);
        setIsLoggedIn(true);
      } else {
        // 로그인 실패
        setIsLoggedIn(false);
        alert('로그인 실패. 사용자 이름과 비밀번호를 확인하세요.');
      }
    } catch (error) {
      console.error('오류 발생:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('expirationTime');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    const expirationTime = localStorage.getItem('expirationTime');

    if (storedIsLoggedIn === 'true' && expirationTime) {
      const currentTime = new Date().getTime();

      if (currentTime > parseInt(expirationTime)) {
        // 세션이 만료되었을 때 로그아웃
        handleLogout();
      } else {
        setIsLoggedIn(true);
      }
    }
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>로그인 성공!</h1>
          <p>환영합니다, {formData.userid}님.</p>
          <Button title="HOME"
            onClick={() => {
                navigate("/main");
        }}/>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
        <div>
          <h1>로그인</h1>
          <div>
          <label>아이디:</label>
          <input
          type="text"
          name="userid"
          value={formData.userid}
          onChange={handleChange}
          />
          </div>
          <div>
          <label>비밀번호:</label>
          <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          />
          </div>
          <button type="submit">로그인</button>
        </div>
        </form>
      )}
    </div>
  );
}

export default Login;
