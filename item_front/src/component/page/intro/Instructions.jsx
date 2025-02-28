import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";
import Explain from "./Explain";


const Block = styled.div`

`;

const Wrapper = styled.div`
height: 100vh;
overflow-y: scroll;
scroll-snap-type: y mandatory;
  
  > ${Block} {
    height: 100vh;
    scroll-snap-align: start;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const LogoBlock = styled.div`
height: 100vh;
scroll-snap-align: start;
display: flex;
justify-content: center;
align-items: center;
`;

const MainContent = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

const SideContent = styled.div`
`;

const Title = styled.h1`
  text-align: center;
  color: green;
  font-size: 3em;
  `;

function Instructions(props) {
  
  const navigate = useNavigate();

  return (
  
  <Wrapper>
    <Block>
    <Explain/>
    </Block>
    <LogoBlock>
    <MainContent>
    <SideContent>
    <Title>아이템</Title>
    <Button title="회원가입"
            onClick={() => {
                navigate("/join");
            }}
    />
    <Button title="로그인"
            onClick={() => {
                navigate("/login");
            }}
    />
    <Button title="아이디 찾기"
            onClick={() => {
                navigate("/findid");
  }}/>
    <Button title="비밀번호 찾기"
            onClick={() => {
                navigate("/reset");
  }}/>
    </SideContent>
    </MainContent>
    </LogoBlock>
  </Wrapper>
  
  );
}

export default Instructions;