import React ,{ useState } from 'react';
import CompleteButton from "../ui/CompleteButton";
import ConfirmButton from "../ui/ConfirmButton";
import TutorButton from "../ui/TutorButton";
import DeleteButton from "../ui/DeleteButton"

function TodoList({ todos, onTodoClick, onComplete, onUpdate, updateId, onConfirm, onLine,  onDelete}) {


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
            isLined= todo.line ? (<s>{todo.title}</s>) : (<span onClick={() => onTodoClick(todo.id, todo.title)}>{todo.title}</span>)
          )}
          <CompleteButton onClick={() => onComplete(todo.id)}></CompleteButton>
          <ConfirmButton onClick={() => onConfirm(todo.id)}></ConfirmButton>
          <TutorButton onClick={() => onLine(todo.id)}></TutorButton>
          <DeleteButton onClick={() => onDelete(todo.id)}>Delete</DeleteButton>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;