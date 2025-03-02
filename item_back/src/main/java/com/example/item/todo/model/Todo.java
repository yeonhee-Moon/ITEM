package com.example.item.todo.model;

public class Todo {
	private Long id;
    private String title;
    private boolean completed;
    private boolean confirmed;
    private boolean lined;
    private int team;
    
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
	public boolean isConfirmed() {
		return confirmed;
	}
	public void setConfirmed(boolean confirmed) {
		this.confirmed = confirmed;
	}
	public boolean isLined() {
		return lined;
	}
	public void setLined(boolean lined) {
		this.lined = lined;
	}
	public int getTeam() {
		return team;
	}
	public void setTeam(int team) {
		this.team = team;
	}
	
	
	
	
    
}
