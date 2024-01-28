package com.example.item.matching.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.item.matching.service.MatchingService;

@RestController
@RequestMapping("/item")
public class MatchingController {

	@Autowired
	MatchingService matchingService;
	
	int a = 0;
	
	@PostMapping("/matching")
	public ResponseEntity<Object> itemMatching(String tutorid, String tuteeid) {

		Map<String, Object> paramTutor = new HashMap<>();
		Map<String, Object> paramTutee = new HashMap<>();
		Map<String, Object> paramMatching = new HashMap<>();
		
		
		System.out.println("tutorid: "+ tutorid);
		System.out.println("tuteeid: "+ tuteeid);

		paramTutor.put("tutorid", tutorid);
		paramTutee.put("tuteeid", tuteeid);
		paramMatching.put("tutorid", tutorid);
		paramMatching.put("tuteeid", tuteeid);
		
		a = a+1;
		System.out.println("team: "+ a);
		
		paramMatching.put("team", a);
		
		matchingService.authorTutee(paramTutee);
		matchingService.authorTutor(paramTutor);
		
		int resultTutee = matchingService.authorTutee(paramTutee);
		int resultTutor = matchingService.authorTutor(paramTutor);
		
		matchingService.matching(paramMatching);
		
	    if(resultTutee==1 && resultTutor==1) {
	    	return ResponseEntity.ok(null);
	    } else {
	    	return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);	
	    }

	}
}
