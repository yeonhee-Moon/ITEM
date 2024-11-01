import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
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
  width: 300px;
`;

const LeftBlock = styled.div`
`;

const RightBlock = styled.div`
`;

const ButtonBlock = styled.div`
  margin-top: 2px;
`;


const ResetPassword = () => {
  const [formData, setFormData] = useState({
    password: '',
    userid: ''
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };


  const handleResetPassword = async (e) => {
    e.preventDefault();

    const formDataObject = new FormData();
    formDataObject.append('password', formData.password);
    formDataObject.append('userid', formData.userid);

    try {
      if (formData.password !== confirmPassword) {
        setError('비밀번호와 확인 비밀번호가 일치하지 않습니다.');
        setResetSuccess(false);
        return;
      }
        const response = await axios.post('http://localhost:3000/item/reset', formDataObject, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });
      if (response.data === 1) {
        setResetSuccess(true);
        setError(null);
      }
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
    <form onSubmit={handleResetPassword}>
    <div>
      <h2>비밀번호 재설정</h2>
      <Block>
      <LeftBlock>
      <label>아이디 : </label>
      </LeftBlock>
        <input type="text" name="userid" value={formData.userid} onChange={handleChange} />

      </Block>
      <Block>
      <LeftBlock>
      <label>새 비밀번호 : </label>
      </LeftBlock>
      <RightBlock>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </RightBlock>
      </Block>
      <Block>
      <LeftBlock>
      <label>확인 비밀번호 : </label>
      </LeftBlock>
      <RightBlock>
        <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
      </RightBlock>
      </Block>
      <Block>
        <LeftBlock/>
        <ButtonBlock>
        <button type="submit">비밀번호 재설정</button>
        </ButtonBlock>
      </Block>
      
      {resetSuccess && <p>비밀번호가 성공적으로 재설정되었습니다.</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
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

export default ResetPassword;
