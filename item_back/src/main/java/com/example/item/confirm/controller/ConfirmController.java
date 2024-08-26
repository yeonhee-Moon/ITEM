package com.example.item.confirm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.item.confirm.model.ImageInfo;
import com.example.item.confirm.model.ImageInfoDTO;
import com.example.item.confirm.service.ConfirmService;

@RestController
@RequestMapping("/item")
public class ConfirmController {
	 @Autowired
	    private ConfirmService confirmService;

	 	@PostMapping("/confirm/insert")
	    public void insertConfirm(@RequestParam("image") MultipartFile image,
	                            @RequestParam("text") String descript,
	                            @RequestParam("id") Long id) {
	 		confirmService.insertConfirm(id, image, descript);
	    }
	 	
	 	@PostMapping("/confirm/update")
	    public void updateConfirm(@RequestParam("image") MultipartFile image,
	                            @RequestParam("text") String descript,
	                            @RequestParam("id") Long id) {
	 		confirmService.updateConfirm(id, image, descript);
	    }
	 
	    @GetMapping("/confirmlist/{id}")
	    public ResponseEntity<ImageInfoDTO> getImageInfoById(@PathVariable Long id) {
	        	ImageInfo imageInfo = confirmService.getImageInfoById(id);
	        	ImageInfoDTO imageInfoDTO = new ImageInfoDTO(
	            imageInfo.getDescript(), // 텍스트 데이터
	            imageInfo.getImage() // 이미지 바이너리 데이터
	        );

	        return ResponseEntity.ok(imageInfoDTO);
	    }
}
