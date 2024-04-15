package com.example.item.confirm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.item.confirm.model.Confirm;
import com.example.item.confirm.service.ConfirmService;

@RestController
@RequestMapping("/item")
public class ConfirmController {
	 @Autowired
	    private ConfirmService confirmService;

	 	
	 
	    @GetMapping("/confirmlist/{id}")
	    public Confirm getImageInfoById(@PathVariable Long id) {
	        return confirmService.getImageInfoById(id);
	    }
}
