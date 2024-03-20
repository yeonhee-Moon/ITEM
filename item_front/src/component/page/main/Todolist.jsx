import React from 'react';
import CompleteButton from "../ui/CompleteButton";
import ConfirmButton from "../ui/ConfirmButton";
import TutorButton from "../ui/TutorButton";
import DeleteButton from "../ui/DeleteButton"

function TodoList({ todos, onTodoClick, onComplete, onUpdate, updateId, onLined, onDelete}) {


  //line 상태값 가져오기
  //isLined= todo.line ?
  //completed값 가져와서 나타내기


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
          {/* <CompleteButton onShowCompleted={() =>(todo.completed)} onClick={() => onCompleteClick(todo.id, todo.completed)}></CompleteButton> */}
          {/* <CompleteButton onClick={() => {onShowCompleted(todo.completed); onCompleteClick(todo.id, todo.completed);}}></CompleteButton> */}
          <CompleteButton todo={todo} onClick={() => onComplete(todo.id, todo.completed)}></CompleteButton>
          <ConfirmButton todo={todo} onClick></ConfirmButton>
          <TutorButton todo={todo} onClick={() => onLined(todo.id, todo.lined)}></TutorButton>
          <DeleteButton onClick={() => onDelete(todo.id)}>Delete</DeleteButton>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;