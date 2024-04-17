package com.example.item.confirm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.item.confirm.model.Confirm;
import com.example.item.confirm.service.ConfirmService;

@RestController
@RequestMapping("/item")
public class ConfirmController {
	 @Autowired
	    private ConfirmService confirmService;

	 	@PostMapping("/confirm")
	    public void uploadConfirm(@RequestParam("image") MultipartFile image,
	                            @RequestParam("text") String descript,
	                            @RequestParam("id") Long id) {
	 		confirmService.saveConfirm(id, image, descript);
	    }
	 
	    @GetMapping("/confirmlist/{id}")
	    public Confirm getImageInfoById(@PathVariable Long id) {
	        return confirmService.getImageInfoById(id);
	    }
}
