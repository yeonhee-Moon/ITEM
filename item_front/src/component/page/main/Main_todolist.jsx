import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";


const Title = styled.h1`
  color: green;
  `;

function Main_todolist(props) {
  
  const navigate = useNavigate();
  
  return (
  <div>
  <Title>메인</Title>
  <Button title="팀매칭"
  onClick={() => {
      navigate("/matching");
  }}
  />
  </div>
  );
}

export default Main_todolist;