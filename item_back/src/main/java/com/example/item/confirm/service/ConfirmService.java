package com.example.item.confirm.service;


import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.item.confirm.mapper.ConfirmMapper;
import com.example.item.confirm.model.Confirm;
import com.example.item.confirm.model.ImageInfo;

@Service
public class ConfirmService {
	@Autowired
    private ConfirmMapper confirmMapper;

	public void insertConfirm(Long id, MultipartFile image, String descript) throws IOException {
        byte[] imageData = null;

        if (image != null && !image.isEmpty()) { // 이미지가 있을 때만 처리
            imageData = image.getBytes();
        }
        
        Confirm confirm = new Confirm(id, imageData, descript);
        confirmMapper.insertConfirm(confirm);
	}
		
	
	public void updateConfirm(Long id, MultipartFile image, String descript) throws IOException {
        byte[] imageData = null;

        if (image != null && !image.isEmpty()) { // 이미지가 있을 때만 처리
            imageData = image.getBytes();
        }
        
        Confirm confirm = new Confirm(id, imageData, descript);
        confirmMapper.updateConfirm(confirm);

    }
	
	
	public ImageInfo getImageInfoById(Long id) {
        return confirmMapper.getImageInfoById(id);
    }
}
