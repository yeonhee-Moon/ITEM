package com.example.item.todo.mapper;

import com.example.item.todo.model.Todo;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface TodoMapper {
	List<Todo> getAllTodos();
    void insertTodo(Todo todo);
    void updateTodo(Todo todo);
    void updateComplete(Todo todo);
    void updateLine(Todo todo);
    void deleteTodo(Long id);
}
