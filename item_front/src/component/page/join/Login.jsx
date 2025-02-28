import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  width: 100vw;
`;

const MainContent = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  width: 260px;
`;

const LeftBlock = styled.div`
`;

const RightBlock = styled.div`
`;

const ButtonBlock = styled.div`
  margin-top: 2px;
`;





function Login() {
  const [formData, setFormData] = useState({
    userid: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    localStorage.setItem('userid', formData.userid);

    const formDataObject = new FormData();

    formDataObject.append('userid', formData.userid);
    formDataObject.append('password', formData.password);
    

    try {
      const response = await axios.post('http://localhost:3000/item/login', formDataObject, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });
      console.log('서버 응답:', response.data);
      
      localStorage.setItem('username', response.data.USER_NAME);
      localStorage.setItem('matchingname', response.data.matchingname);
      localStorage.setItem('team',  response.data.TEAM);

      if (response.data.except === 1) {
        // 로그인 실패
        alert('로그인 실패. 사용자 이름과 비밀번호를 확인하세요.');
        } else {
        // 로그인 성공
        const expirationTime = new Date().getTime() + 60 * 60 * 1000; // 1시간 후 만료
        
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('expirationTime', expirationTime);

        navigate('/main');
      }

      if (response.data.AUTHOR === '1') {
        localStorage.setItem('isAuthorOne', 'true');
        localStorage.setItem('isAuthorTwo', 'false');
     
      } else if (response.data.AUTHOR === '2'){
        localStorage.setItem('isAuthorTwo', 'true');
        localStorage.setItem('isAuthorOne', 'false');
  
      } else {
        localStorage.setItem('isAuthorOne', 'false');
        localStorage.setItem('isAuthorTwo', 'false');

      }
    } catch (error) {
      console.error('오류 발생:', error);
    }
  };

   
  return (
    <Container>
    <MainContent>
      <div>
        <form onSubmit={handleLogin}>
        <div>
          <h1>로그인</h1>
          <Block>
          <LeftBlock>
          <label>아이디 :</label>
          </LeftBlock>
          <RightBlock>
          <input
          type="text"
          name="userid"
          value={formData.userid}
          onChange={handleChange}
          />
          </RightBlock>
          </Block>
          <Block>
          <LeftBlock>
          <label>비밀번호 :</label>
          </LeftBlock>
          <RightBlock>
          <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          />
          </RightBlock>
          </Block>
          <Block>
          <LeftBlock/>
          <ButtonBlock>
          <button type="submit">로그인</button>
          </ButtonBlock>
          </Block>
        </div>
        </form>
      </div>
    </MainContent>
    </Container>
  );
}

export default Login;
