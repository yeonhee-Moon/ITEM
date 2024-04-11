package com.example.item.confirm.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.item.confirm.mapper.ConfirmMapper;
import com.example.item.confirm.model.Confirm;

@Service
public class ConfirmService {
	@Autowired
    private ConfirmMapper confirmMapper;

	public Confirm getImageInfoById(Long id) {
        return confirmMapper.getImageInfoById(id);
    }
}
