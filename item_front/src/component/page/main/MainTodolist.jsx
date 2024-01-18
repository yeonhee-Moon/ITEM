import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import TutorButton from "../ui/TutorButton";
import PlusButton from "../ui/PlusButton";
import DeleteButton from "../ui/DeleteButton"
import Button from "../ui/Button"
import ButtonLogic from "./ButtonLogic";
import Confirm from "./Confirm";
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

  // const [showButton, setShowButton] = useState(true);

  // const handleDeleteButton = () => {
  //   setShowButton(false);
  // };

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [updateId, setUpdateId] = useState(null);
  const [formData, setFormData] = useState({
    todo: {newTodo},
    completed: false
  });

  useEffect(() => {
    // Fetch todos from the backend on component mount using axios
    axios.get('http://localhost:3000/todo/gettodo')
      .then((response) => setTodos(response.data))
      .catch((error) => console.error('Error fetching todos:', error));
  }, []);

  const handleAddTodo = () => {
    // Add a new todo using axios
    axios.post('http://localhost:3000/todo/addtodo', { title: newTodo, completed: false })
      .then((response) => setTodos([...todos, response.data]))
      .catch((error) => console.error('Error adding todo:', error));

    setNewTodo('');
  };

  const handleUpdateTodo = (id, e) => {
    setUpdateId(id);
    if (updateId) {
      axios.put(`http://localhost:3000/todo/updatetodo/${updateId}`, { title: e.target.value, completed: false })
        .then(() => {
          setUpdateId(null);
          axios.get('http://localhost:3000/todo/gettodo')
            .then((response) => setTodos(response.data))
            .catch((error) => console.error('Error fetching todos:', error));
        })
        .catch((error) => console.error('Error updating todo:', error));
    }
  };

  //버튼 값 전송
  const handleUpdateComplete = (id) => {
   axios.put(`http://localhost:3000/todo/updatetodo/${id}`, { completed: true })
        .then(() => {
          axios.get('http://localhost:3000/todo/gettodo')
            .then((response) => setTodos(response.data))
            .catch((error) => console.error('Error fetching todos:', error));
        })
        .catch((error) => console.error('Error updating todo:', error));
  
  };

  const handleTodoClick = (id, title) => {
    if (!updateId) {
      setUpdateId(id);
      setNewTodo(title);
    }
  };

  const handleDeleteTodo = (id) => {
    // Delete a todo using axios
    axios.delete(`http://localhost:3000/todo/deletetodo/${id}`)
      .then(() => setTodos(todos.filter((todo) => todo.id !== id)))
      .catch((error) => console.error('Error deleting todo:', error));
  };
  // // 버튼 정보를 저장할 상태 설정
  // const [buttons, setButtons] = useState([]);
  // const [inputs, setInputs] = useState([]);
  // const [checkButtons, setCheckButtons] = useState([]);


  // // 버튼 클릭 시 동작 함수
  // const handleButtonClick = () => {
  //   // 새로운 버튼 정보 생성
    
  //   const newButton = {
  //     id: buttons.length + 1, // 간단한 id 부여 (id는 고유해야 함)
  //   };

  //   // 새로운 버튼 정보를 기존 버튼 배열에 추가
  //   setButtons([...buttons, newButton]);

  //   const newInput = {
  //     id: inputs.length + 1,
  //   };

  //   // 새로운 버튼 정보를 기존 버튼 배열에 추가
  //   setInputs([...inputs, newInput]);

  //   const newCheckButton = {
  //     id: checkButtons.length + 1,
  //   };

  //   // 새로운 버튼 정보를 기존 버튼 배열에 추가
  //   setCheckButtons([...checkButtons, newCheckButton]);
  // };

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const submitTodo = async (e) => {
    e.preventDefault();

    const formDataObject = new FormData();
    formDataObject.append('todo', formData.todo);
  
    try {
      const response = await axios.post('http://localhost:3000/item/login', formDataObject, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });
      console.log('서버 응답:', response.data);
    } catch (error) {
      console.error('오류 발생:', error);
    }
  };

  <Confirm confirmTodo= {formData.todo}></Confirm>

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
      <PlusButton onClick={handleAddTodo}>Add Todo</PlusButton>
      <Todolist 
      todos={todos} 
      onComplete={handleUpdateComplete}
      onUpdate={handleUpdateTodo}
      onTodoClick={handleTodoClick}
      onDelete={handleDeleteTodo} 
      updateId={updateId}/>
  </div>

    {/* <form onSubmit={submitTodo}>

      
        {buttons.map((button) => (
          <TutorButton key={button.id}>
            {inputs.map((input) => (
            <div>
            <input key={input.id}
              type="text"
              name="todo"
              value={formData.todo}
              onChange={handleChange}
            />
            </div>
            ))}
            {checkButtons.map((checkbutton) => (
            <div>
            <ButtonLogic key={checkbutton.id}/>
            <DeleteButton key={checkbutton.id} onClick={handleDeleteButton}/>
            </div>
            ))}
          </TutorButton>
          ))};
      
  
    </form> */}

  {username && <p>{username}  {isAuthorOne==='true'? '튜티' : '튜터'}</p>}
  {matchingname && <p>{matchingname}  {isAuthorOne==='true'? '튜터' : '튜티'}</p>}
  </div>
  );
}

export default MainTodolist;