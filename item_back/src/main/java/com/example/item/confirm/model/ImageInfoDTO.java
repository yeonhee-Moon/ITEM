package com.example.item.confirm.model;

import java.util.Base64;

public class ImageInfoDTO {
	private String descript;
    private String image; // Base64로 인코딩된 이미지 데이터

    // 기본 생성자
    public ImageInfoDTO() {
    }

    // 모든 필드를 초기화하는 생성자
    public ImageInfoDTO(String descript, byte[] image) {
        this.descript = descript;
        this.image = (image != null) ? Base64.getEncoder().encodeToString(image) : null;
//        this.image = Base64.getEncoder().encodeToString(image); // 이미지 데이터를 Base64로 인코딩
    }

    // Getters and Setters
    public String getDescript() {
        return descript;
    }

    public void setdescript(String descript) {
        this.descript = descript;
    }

    public String getImage() {
        return image;
    }

    public void setImageData(byte[] image) {
        this.image = (image != null) ? Base64.getEncoder().encodeToString(image) : null;
    }
    
//    public void setImage(byte[] image) {
//        this.image = Base64.getEncoder().encodeToString(image); // Setter에서도 Base64로 인코딩
//    }
    
    
//	private String descript;
//    private byte[] image;
//
//    public ImageInfoDTO(String descript, byte[] image) {
//        this.setDescript(descript);
//        this.setImage(image);
//    }
//
//	public String getDescript() {
//		return descript;
//	}
//
//	public void setDescript(String descript) {
//		this.descript = descript;
//	}
//
//	public byte[] getImage() {
//		return image;
//	}
//
//	public void setImage(byte[] image) {
//		this.image = image;
//	}


}
