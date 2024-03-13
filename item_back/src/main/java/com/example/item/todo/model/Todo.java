package com.example.item.todo.model;

public class Todo {
	private Long id;
    private String title;
    private boolean completed;
    private boolean lined;
    
    public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public boolean isCompleted() {
		return completed;
	}
	public void setCompleted(boolean completed) {
		this.completed = completed;
	}
	public boolean isLined() {
		return lined;
	}
	public void setLined(boolean lined) {
		this.lined = lined;
	}
	
    
}