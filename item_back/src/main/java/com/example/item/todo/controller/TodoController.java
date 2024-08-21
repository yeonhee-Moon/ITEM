package com.example.item.todo.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.item.todo.model.Todo;
import com.example.item.todo.service.TodoService;

@RestController
@RequestMapping("/item")
public class TodoController{
	
	@Autowired
	private TodoService todoService;
	
	
	@GetMapping("/gettodo/{storedTeam}")
	public List<Todo> getAllTodos(@PathVariable Long storedTeam) {
        return todoService.getAllTodos(storedTeam);
	}
	
	@PostMapping("/addtodo")
	 public Todo saveTodo(@RequestBody Todo todo) {
        todoService.insertTodo(todo);
        return todo;
	}
	
	@PutMapping("/updatetodo/{updateid}")
	 public Todo updateTodo(@PathVariable Long updateid, @RequestBody Todo todo) {
        todo.setId(updateid);
        todoService.updateTodo(todo);
        return todo;
    }
	
	@PatchMapping("/updatecomplete/{id}")
	 public Todo updateComplete(@PathVariable Long id, @RequestBody Todo todo) {
       todo.setId(id);
       todoService.updateComplete(todo);
       return todo;
   }
	
	@PatchMapping("/updateconfirm/{id}")
	 public Todo updateConfirm(@PathVariable Long id, @RequestBody Todo todo) {
      todo.setId(id);
      todoService.updateConfirm(todo);
      return todo;
	}
	
	@PatchMapping("/updateline/{id}")
	 public Todo updateLine(@PathVariable Long id, @RequestBody Todo todo) {
       todo.setId(id);
       todoService.updateLine(todo);
       return todo;
   }
	
	@DeleteMapping("/deletetodo/{id}")
	public void deleteTodo(@PathVariable Long id) {
        todoService.deleteTodo(id);
   }
	
//	@PostMapping("/confirm")
//	public ResponseEntity<Object> itemTodo(String username) {
//
//		Map<String, Object> param = new HashMap<>();
//		
//		System.out.println("username: "+ username);
//
//		
//		param.put("username", username);
//	
//
//		int result = todoService.todo(param);
//		
// 		return ResponseEntity.ok(result);
//	}
}
