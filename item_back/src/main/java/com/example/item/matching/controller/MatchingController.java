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
	
	
	@PostMapping("/matching")
	public ResponseEntity<Map<String, Object>> itemMatching(String tutorid, String tuteeid, String userid) {

		Map<String, Object> paramTutor = new HashMap<>();
		Map<String, Object> paramTutee = new HashMap<>();
		Map<String, Object> paramMatching = new HashMap<>();
		Map<String, Object> param = new HashMap<>();
		
		
		System.out.println("tutorid: "+ tutorid);
		System.out.println("tuteeid: "+ tuteeid);
		System.out.println("userid: "+ userid);

		paramTutor.put("tutorid", tutorid);
		paramTutee.put("tuteeid", tuteeid);
		paramMatching.put("tutorid", tutorid);
		paramMatching.put("tuteeid", tuteeid);
		
		int getMaxTeam = matchingService.getMaxTeam();
		
		getMaxTeam= getMaxTeam+1;
		System.out.println("team: "+ getMaxTeam);
		
		paramMatching.put("team", getMaxTeam);
		
		matchingService.authorTutee(paramTutee);
		matchingService.authorTutor(paramTutor);
		
		int resultTutee = matchingService.authorTutee(paramTutee);
		int resultTutor = matchingService.authorTutor(paramTutor);
		
		matchingService.matching(paramMatching);
		
		param.put("tutorid", tutorid);
		param.put("tuteeid", tuteeid);

		Map<String, Object> Tutorbox = matchingService.showTutor(param);
		Map<String, Object> Tuteebox = matchingService.showTutee(param);
		Object valueMatchingTutor = Tutorbox.get("USER_NAME");
		Object valueMatchingTutee = Tuteebox.get("USER_NAME");
		Object valueAuthorTutor = Tutorbox.get("AUTHOR");
		Object valueAuthorTutee = Tuteebox.get("AUTHOR");
		
		Map<String, Object> showTutor = new HashMap<>();
		Map<String, Object> showTutee = new HashMap<>();
		
		showTutee.put("matchingname", valueMatchingTutor);
		showTutee.put("AUTHOR", valueAuthorTutee);
		showTutee.put("TEAM", getMaxTeam);
		showTutor.put("matchingname", valueMatchingTutee);
		showTutor.put("AUTHOR", valueAuthorTutor);
		showTutor.put("TEAM", getMaxTeam);
		

		
		if ( (userid.equals(tutorid)) && (resultTutee==1 && resultTutor==1)) {
			return ResponseEntity.ok(showTutor);
		} else if ( (userid.equals(tuteeid)) && (resultTutee==1 && resultTutor==1)) {
			return ResponseEntity.ok(showTutee);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);	
		}
		
	}
}
