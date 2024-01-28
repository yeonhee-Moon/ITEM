package com.example.item.todo.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.item.todo.service.TodoService;

@RestController
@RequestMapping("/todo")
public class TodoController {
	
	@Autowired
	TodoService todoService;
	
	
	@GetMapping("/gettodo")
	public ResponseEntity<Object> itemTodo(String username) {

		Map<String, Object> param = new HashMap<>();
		
		System.out.println("username: "+ username);

		
		param.put("username", username);
	

		int result = todoService.todo(param);
		
 		return ResponseEntity.ok(result);
	}
	
	@PostMapping("/addtodo")
	public ResponseEntity<Object> itemTodo(String username) {

		Map<String, Object> param = new HashMap<>();
		
		System.out.println("username: "+ username);

		
		param.put("username", username);
	

		int result = todoService.todo(param);
		
 		return ResponseEntity.ok(result);
	}
	
	@PostMapping("/updatetodo/{updateid}")
	public ResponseEntity<Object> itemTodo(String username) {

		Map<String, Object> param = new HashMap<>();
		
		System.out.println("username: "+ username);

		
		param.put("username", username);
	

		int result = todoService.todo(param);
		
 		return ResponseEntity.ok(result);
	}
	
	@PostMapping("/deletetodo/{id}")
	public ResponseEntity<Object> itemTodo(String username) {

		Map<String, Object> param = new HashMap<>();
		
		System.out.println("username: "+ username);

		
		param.put("username", username);
	

		int result = todoService.todo(param);
		
 		return ResponseEntity.ok(result);
	}
	
	@PostMapping("/confirm")
	public ResponseEntity<Object> itemTodo(String username) {

		Map<String, Object> param = new HashMap<>();
		
		System.out.println("username: "+ username);

		
		param.put("username", username);
	

		int result = todoService.todo(param);
		
 		return ResponseEntity.ok(result);
	}
}
