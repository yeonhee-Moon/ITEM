import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import PlusButton from "../ui/PlusButton";
import Button from "../ui/Button"
import Todolist from "./Todolist"
// import { useLocation } from 'react-router-dom';
//import { useContext } from "react";



const Title = styled.h1`
  color: green;
  `;

function MainTodolist(props) {
  
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const location = useLocation();
  // const { value } = location.state || { value: false }; // 값이 없을 때를 대비해 기본값 설정
  // setIsLoggedIn(value);
  const storedTeam = localStorage.getItem('team');
  const username = localStorage.getItem('username');
  const matchingname = localStorage.getItem('matchingname');
  const isAuthorOne = localStorage.getItem('isAuthorOne');
  const isAuthorTwo = localStorage.getItem('isAuthorTwo');
  //const username =useContext(UsernameContext);
  //const matchingname =useContext(MatchingnameContext);
  //const isAuthorOne =useContext(IsAuthorOneContext);

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [updateId, setUpdateId] = useState(null);

  useEffect(() => {
    const authToken = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(!!authToken); // authToken이 있으면 true, 없으면 false
  }, []);

  useEffect(() => {

    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    const expirationTime = localStorage.getItem('expirationTime');

    if (storedIsLoggedIn === 'true' && expirationTime) {
      const currentTime = new Date().getTime();

      if (currentTime > parseInt(expirationTime)) {
        // 세션이 만료되었을 때 로그아웃
        handleLogout();
      } 
      // else {
      //   setIsLoggedIn(true);
      // //   //setIsAuthorOne(true);
      // //   //setIsAuthorTwo(true);
      // }
    }
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3000/item/gettodo/${storedTeam}`)
      .then((response) => setTodos(response.data))
      .catch((error) => console.error('Error fetching todos:', error));
  }, []);

  const handleAddTodo = () => {
    axios.post('http://localhost:3000/item/addtodo', { title: newTodo, completed: false, confirmed: false, lined: false, team: storedTeam})
      .then((response) => setTodos([...todos, response.data]))
      .catch((error) => console.error('Error adding todo:', error));

    setNewTodo('');
  };

  const handleUpdateTodo = (updateTodo) => {
    setUpdateId(updateTodo.id);
    if (updateId) {
      axios.put(`http://localhost:3000/item/updatetodo/${updateId}`, { title: updateTodo.title, completed: false, confirmed: false,  lined: false})
        .then(() => {
          setUpdateId(null);
          axios.get(`http://localhost:3000/item/gettodo/${storedTeam}`)
            .then((response) => setTodos(response.data))
            .catch((error) => console.error('Error fetching todos:', error));
        })
        .catch((error) => console.error('Error updating todo:', error));
    }
  };

  const handleUpdateComplete = (id, completed) => {
   axios.patch(`http://localhost:3000/item/updatecomplete/${id}`, { completed: !completed })
        .then(() => {
          axios.get(`http://localhost:3000/item/gettodo/${storedTeam}`)
            .then((response) => setTodos(response.data))
            .catch((error) => console.error('Error fetching todos:', error));
        })
        .catch((error) => console.error('Error updating todo:', error));
  
  };

  const handleUpdateConfirm = (id, confirmed) => {
    axios.patch(`http://localhost:3000/item/updateconfirm/${id}`, { confirmed: !confirmed })
         .then(() => {
           axios.get(`http://localhost:3000/item/gettodo/${storedTeam}`)
             .then((response) => setTodos(response.data))
             .catch((error) => console.error('Error fetching todos:', error));
         })
         .catch((error) => console.error('Error updating todo:', error));
   
   };

  const handleUpdateLine = (id, lined) => {
    axios.patch(`http://localhost:3000/item/updateline/${id}`, { lined: !lined })
         .then(() => {
           axios.get(`http://localhost:3000/item/gettodo/${storedTeam}`)
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
    axios.delete(`http://localhost:3000/item/deletetodo/${id}`)
      .then(() => setTodos(todos.filter((todo) => todo.id !== id)))
      .catch((error) => console.error('Error deleting todo:', error));
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('expirationTime');
    localStorage.removeItem('isAuthorOne');
    localStorage.removeItem('isAuthorTwo');
    localStorage.removeItem('username');
    localStorage.removeItem('matchingname');
    localStorage.removeItem('userid');
    localStorage.removeItem('team');
  
    setIsLoggedIn(false);

    // 페이지 새로고침
    // navigate('/login'); // 로그인 페이지로 이동
    // window.location.reload(); // 강제로 페이지 새로고침하여 캐시 무효화
   
  };

  const handleLogin = () => {
    navigate("/login");
  };




  return (
  <div>
    <Title>메인</Title>
    <button onClick={isLoggedIn ? handleLogout : handleLogin}>
    {isLoggedIn ? "로그아웃" : "로그인"}
    </button>
    <Button title="팀매칭"
      onClick={() => {
      navigate("/matching");
      }}
    />
     {isLoggedIn === false ? (null
     ) : (
    <div> 
    {((isAuthorOne ==='false') && (isAuthorTwo ==='false')) ? null : (<p>{username}  {isAuthorOne==='true'? '튜티' : '튜터'}</p>)}
    {matchingname !=='매칭해주세요'? (<p>{matchingname}  {isAuthorOne==='true'? '튜터' : '튜티'}</p>) : <p>{username} 님 매칭해주세요</p>}
    </div>
     )}
    
    {storedTeam === '0' || isLoggedIn === false ? ( null
     ) : (
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
      updateTodo={handleUpdateTodo}
      onComplete={handleUpdateComplete}
      onConfirm={handleUpdateConfirm}
      onLined={handleUpdateLine}
      // onUpdate={handleUpdateTodo}
      onTodoClick={handleTodoClick}
      onDelete={handleDeleteTodo} 
      updateId={updateId}/>
    </div>
  )}
  </div>
  );
}

export default MainTodolist;