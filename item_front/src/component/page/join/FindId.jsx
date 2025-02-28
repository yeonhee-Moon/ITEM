import React, { useState  }from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
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
    <Container>
    <MainContent>
    <div>
    <form onSubmit={handleFindUserid}>
    <div>
      <h2>아이디 찾기</h2>
      <Block>
      <LeftBlock>
      <label>이름 : </label>
      </LeftBlock>
      <RightBlock>
        <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange} />
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
        onChange={handleChange} />
      </RightBlock>
      </Block>
      <Block>
        <LeftBlock/>
        <ButtonBlock>
          <button type="submit">아이디 찾기</button>
        </ButtonBlock>
      </Block>
     
      {userid && <p>찾은 아이디: {userid}</p>}
      </div>
    </form>
    <Block>
        <LeftBlock/>
        <ButtonBlock>
        <Button title="HOME"
          onClick={() => {
          navigate("/main");
         }}/>
        </ButtonBlock>
    </Block>
    </div>
    </MainContent>
    </Container>
  );
};

export default FindId;