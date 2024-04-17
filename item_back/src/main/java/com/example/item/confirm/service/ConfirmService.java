package com.example.item.confirm.service;


import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.item.confirm.mapper.ConfirmMapper;
import com.example.item.confirm.model.Confirm;

@Service
public class ConfirmService {
	@Autowired
    private ConfirmMapper confirmMapper;

	public void saveConfirm(Long id, MultipartFile image, String descript) {
        try {
            byte[] imageData = image.getBytes();
            Confirm confirm = new Confirm(id, imageData, descript);
            confirmMapper.saveConfirm(confirm);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
	
	public Confirm getImageInfoById(Long id) {
        return confirmMapper.getImageInfoById(id);
    }
}
