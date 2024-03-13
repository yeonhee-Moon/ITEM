import React ,{ useState } from 'react';
import CompleteButton from "../ui/CompleteButton";
import ConfirmButton from "../ui/ConfirmButton";
import TutorButton from "../ui/TutorButton";
import DeleteButton from "../ui/DeleteButton"

function TodoList({ todos, onTodoClick, onClick, onUpdate, updateId, onConfirm, onDelete}) {


  //line 상태 db에 저장하고 id 에따라 line 상태값 정해지기
  //isLined= todo.line ?


  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {updateId === todo.id ? (
            <input
              type="text"
              value={todo.title}
              onChange={(e) => onUpdate(todo.id, e.target.value)}
            />
          ) : (
            todo.line ? (<s>{todo.title}</s>) : (<span onClick={() => onTodoClick(todo.id)}>{todo.title}</span>)
          )}
          <CompleteButton onShowCompleted={() =>(todo.completed)} onClick={() => onClick(todo.id, todo.completed)}></CompleteButton>
          <ConfirmButton onClick={() => onConfirm(todo.id)}></ConfirmButton>
          <TutorButton onShowLined={() =>(todo.lined)} onClick={() => onClick(todo.id, todo.lined)}></TutorButton>
          <DeleteButton onClick={() => onDelete(todo.id)}>Delete</DeleteButton>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;