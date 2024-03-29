import React, { useState, useEffect, useRef } from 'react';
import CompleteButton from "../ui/CompleteButton";
import ConfirmButton from "../ui/ConfirmButton";
import TutorButton from "../ui/TutorButton";
import DeleteButton from "../ui/DeleteButton"

function TodoList({ todos, updateTodo, onTodoClick, onComplete, updateId, onConfirm, onLined, onDelete}) {
  const inputRef = useRef(null);
  const [editedTodo, setEditedTodo] = useState({ id: null, title: '' });
  
  useEffect(() => {
    // 외부 클릭 시 이벤트 처리
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        // 입력 필드 외부를 클릭한 경우에만 처리
        updateTodo({
          id: editedTodo.id,
          title: editedTodo.title
        });
        setEditedTodo({ id: null, title: '' });
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [editedTodo, updateTodo]);

  const handleChange = (event, todo) => {
    setEditedTodo({
      // ...editedTodo,
      id : todo.id,
      title: event.target.value
    });
  };


  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {updateId === todo.id ? (
            <input
              type="text"
              ref={inputRef}
              value={editedTodo.id === todo.id ? editedTodo.title : todo.title}
              onChange={(event) => handleChange(event, todo)}
            />
          ) : (
            todo.lined ? (<s>{todo.title}</s>) : (<span onClick={() => onTodoClick(todo.id)}>{todo.title}</span>)
          )}
          <CompleteButton completed={todo.completed} onClick={() => onComplete(todo.id, todo.completed)}></CompleteButton>
          <ConfirmButton todo={todo} confirmed={todo.confirmed} onClick={() => onConfirm(todo.id, todo.confirmed)}></ConfirmButton>
          <TutorButton lined={todo.lined} onClick={() => onLined(todo.id, todo.lined)}></TutorButton>
          <DeleteButton onClick={() => onDelete(todo.id)}></DeleteButton>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;