package com.example.item.confirm.model;

public class Confirm {
	private Long id;
	private byte[] imageData;
    private String descript;


	public Confirm() {}

	public Confirm(Long id, byte[] imageData, String descript) {
		this.id = id;
	    this.imageData = imageData;
	    this.descript = descript;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getDescript() {
		return descript;
	}
	public void setDescript(String descript) {
		this.descript = descript;
	}

	public byte[] getImageData() {
		return imageData;
	}

	public void setImageData(byte[] imageData) {
		this.imageData = imageData;
	}

}
