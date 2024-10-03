import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100vw;
	// height: 100vh;	
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
  // border: 2px solid black;
  width: 260px;
`;

const LeftBlock = styled.div`
`;

const RightBlock = styled.div`
`;

const ButtonBlock = styled.div`
  margin-top: 2px;
`;

function Join() {
  const [formData, setFormData] = useState({
    username: '',
    userid: '',
    password: '',
    email: ''
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/login");

    const formDataObject = new FormData();
    formDataObject.append('username', formData.username);
    formDataObject.append('userid', formData.userid);
    formDataObject.append('password', formData.password);
    formDataObject.append('email', formData.email);
    
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

    <Container>
    <MainContent>
    <div>
    <form onSubmit={handleSubmit}>
      <div>
       <h1>회원 가입</h1>
        <Block>
        <LeftBlock>
        <label>이름 : </label>
        </LeftBlock>
        <RightBlock>
          <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          />
        </RightBlock>
        </Block>
        <Block>
        <LeftBlock>
        <label>아이디 : </label>
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
        <label>비밀번호 : </label>
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
        <LeftBlock>
        <label>이메일 : </label>
        </LeftBlock>
        <RightBlock>
          <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          />
        </RightBlock>
        </Block>
        <Block>
          <LeftBlock/>
          <ButtonBlock>
          <button type="submit">제출</button>
          </ButtonBlock>
        </Block>
      </div>
    </form>
    </div>
    </MainContent>
    </Container>
  );
}

export default Join;
