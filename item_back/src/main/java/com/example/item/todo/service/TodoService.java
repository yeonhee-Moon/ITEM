package com.example.item.todo.service;

import com.example.item.todo.mapper.TodoMapper;
import com.example.item.todo.model.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {
    @Autowired
    private TodoMapper todoMapper;

    public List<Todo> getAllTodos() {
        return todoMapper.getAllTodos();
    }

    public void insertTodo(Todo todo) {
        todoMapper.insertTodo(todo);
    }

    public void updateTodo(Todo todo) {
        todoMapper.updateTodo(todo);
    }

    public void updateComplete(Todo todo) {
        todoMapper.updateComplete(todo);
    }
    
    public void updateLine(Todo todo) {
        todoMapper.updateLine(todo);
    }
    public void deleteTodo(Long id) {
        todoMapper.deleteTodo(id);
    }
}