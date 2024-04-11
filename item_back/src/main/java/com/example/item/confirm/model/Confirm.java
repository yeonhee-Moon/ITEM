package com.example.item.confirm.model;

public class Confirm {
	private Long id;
	private byte[] image;
    private String descript;
	public byte[] getImage() {
		return image;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public void setImage(byte[] image) {
		this.image = image;
	}
	public String getDescript() {
		return descript;
	}
	public void setDescript(String descript) {
		this.descript = descript;
	}

}
