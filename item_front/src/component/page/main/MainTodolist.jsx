import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import PlusButton from "../ui/PlusButton";
import Button from "../ui/Button"
import Todolist from './Todolist';
//import { useContext } from "react";



const Title = styled.h1`
  color: green;
  `;

function MainTodolist(props) {
  
  const navigate = useNavigate();

  const username = localStorage.getItem('username');
  const matchingname = localStorage.getItem('matchingname');
  const isAuthorOne = localStorage.getItem('isAuthorOne');
  //const username =useContext(UsernameContext);
  //const matchingname =useContext(MatchingnameContext);
  //const isAuthorOne =useContext(IsAuthorOneContext);

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [updateId, setUpdateId] = useState(null);
 

  useEffect(() => {
    // Fetch todos from the backend on component mount using axios
    axios.get('http://localhost:3000/item/gettodo')
      .then((response) => setTodos(response.data))
      .catch((error) => console.error('Error fetching todos:', error));
  }, []);

  const handleAddTodo = () => {
    axios.post('http://localhost:3000/item/addtodo', { title: newTodo, completed: false, lined: false })
      .then((response) => setTodos([...todos, response.data]))
      .catch((error) => console.error('Error adding todo:', error));

    setNewTodo('');
  };

  const handleUpdateTodo = (id, e) => {
    setUpdateId(id);
    if (updateId) {
      axios.put(`http://localhost:3000/item/updatetodo/${updateId}`, { title: e.target.value, completed: false, lined: false})
        .then(() => {
          setUpdateId(null);
          axios.get('http://localhost:3000/item/gettodo')
            .then((response) => setTodos(response.data))
            .catch((error) => console.error('Error fetching todos:', error));
        })
        .catch((error) => console.error('Error updating todo:', error));
    }
  };

  const handleUpdateComplete = (id, completed) => {
   axios.put(`http://localhost:3000/item/updatecomplete/${id}`, { completed: completed })
        .then(() => {
          axios.get('http://localhost:3000/item/gettodo')
            .then((response) => setTodos(response.data))
            .catch((error) => console.error('Error fetching todos:', error));
        })
        .catch((error) => console.error('Error updating todo:', error));
  
  };

  const handleUpdateLine = (id, lined) => {
    axios.put(`http://localhost:3000/item/updateline/${id}`, { lined: lined })
         .then(() => {
           axios.get('http://localhost:3000/item/gettodo')
             .then((response) => setTodos(response.data))
             .catch((error) => console.error('Error fetching todos:', error));
         })
         .catch((error) => console.error('Error updating todo:', error));
   
   };

  const handleTodoClick = (id) => {
    if (!updateId) {
      setUpdateId(id);
    }
  };

  const handleDeleteTodo = (id) => {
    axios.delete(`http://localhost:3000/ite/deletetodo/${id}`)
      .then(() => setTodos(todos.filter((todo) => todo.id !== id)))
      .catch((error) => console.error('Error deleting todo:', error));
  };
  // // 버튼 정보를 저장할 상태 설정
  // const [buttons, setButtons] = useState([]);

  // // 버튼 클릭 시 동작 함수
  // const handleButtonClick = () => {
  //   // 새로운 버튼 정보 생성
    
  //   const newButton = {
  //     id: buttons.length + 1, // 간단한 id 부여 (id는 고유해야 함)
  //   };

  //   // 새로운 버튼 정보를 기존 버튼 배열에 추가
  //   setButtons([...buttons, newButton]);
  // };



  return (
  <div>
    <Title>메인</Title>
    <Button title="팀매칭"
      onClick={() => {
      navigate("/matching");
      }}
    />
  
  <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <PlusButton onClick={handleAddTodo}></PlusButton>
      <Todolist 
      todos={todos} 
      onComplete={handleUpdateComplete}
      onLined={handleUpdateLine}
      onUpdate={handleUpdateTodo}
      onTodoClick={handleTodoClick}
      onDelete={handleDeleteTodo} 
      updateId={updateId}/>
  </div>
  
  {username !=='undefined'? (<p>{username}  {isAuthorOne==='true'? '튜티' : '튜터'}</p>): null}
  {matchingname !=='undefined'? (<p>{matchingname}  {isAuthorOne==='true'? '튜터' : '튜티'}</p>) : null}
  </div>
  );
}

export default MainTodolist;