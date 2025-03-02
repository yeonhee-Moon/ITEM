package com.example.item.confirm.controller;

import java.io.IOException;

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
	 	  public void insertConfirm(@RequestParam(value = "image", required = false) MultipartFile image,
	 			  					@RequestParam("text") String descript,
	 			  					@RequestParam("id") Long id) throws IOException {
										confirmService.insertConfirm(id, image, descript);
								}
	 	
	 	
	 	@PostMapping("/confirm/update")
	    public void updateConfirm(@RequestParam(value = "image", required = false) MultipartFile image,
	                            @RequestParam("text") String descript,
	                            @RequestParam("id") Long id)   throws IOException {
	                            	confirmService.updateConfirm(id, image, descript); // 서비스 호출
	                                
	                            }

	 	
	    @GetMapping("/confirmlist/{id}")
	    public ResponseEntity<ImageInfoDTO> getImageInfoById(@PathVariable Long id) {
	        	ImageInfo imageInfo = confirmService.getImageInfoById(id);
	        	
	        	  if (imageInfo == null) {
	                  return ResponseEntity.notFound().build(); // 데이터가 없을 때 404 응답
	              }

	              ImageInfoDTO imageInfoDTO = new ImageInfoDTO(
	                  imageInfo.getDescript(),
	                  imageInfo.getImage() != null ? imageInfo.getImage() : null // 이미지 데이터가 없을 때 null로 처리
	              );
	              
	              return ResponseEntity.ok(imageInfoDTO);

	    }
}
