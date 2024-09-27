import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";


const Block = styled.div`
background-image: ${(props) => props.backgroundImage};

`;

const Wrapper = styled.div`
height: 100vh;
overflow-y: scroll;
scroll-snap-type: y mandatory;
  
  > ${Block} {
    height: 100vh;
    scroll-snap-align: start;
    display: flex;
    min-height: 200px;
    background-size: cover;
    background-position: center;
    justify-content: center;
    align-items: center;
  }
`;

const BlockItems=[
  {backgroundImage: "url(https://showcases.yalco.kr/html-css-scoop/04-12/images/01.jpg)"},
  {backgroundImage: "url(https://showcases.yalco.kr/html-css-scoop/04-12/images/02.jpg)"},
  {backgroundImage: "url(https://showcases.yalco.kr/html-css-scoop/04-12/images/03.jpg)"}
];

const LogoBlock = styled.div`
// width: 240px;
// height: 160px;
height: 100vh;
scroll-snap-align: start;
display: flex;
// background-size: cover;
// background-position: center;
justify-content: center;
align-items: center;
// background-image: url(https://showcases.yalco.kr/html-css-scoop/04-12/images/04.jpg);
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
  `;

function Instructions(props) {
  const navigate = useNavigate();

  return (
  
  <Wrapper>
    {BlockItems.map((blockItem)=>{
      return(
        <Block backgroundImage={blockItem.backgroundImage}>
        </Block>
        );
    
    })}
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