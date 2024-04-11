package com.example.item.confirm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.item.confirm.model.Confirm;
import com.example.item.confirm.service.ConfirmService;

public class ConfirmController {
	 @Autowired
	    private ConfirmService confirmService;

	    @GetMapping("/image/{id}")
	    public Confirm getImageInfoById(@PathVariable Long id) {
	        return confirmService.getImageInfoById(id);
	    }
}
