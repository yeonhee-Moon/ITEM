package com.example.item.matching.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.item.matching.mapper.MatchingMapper;

@Service
public class MatchingService {

	@Autowired
	private MatchingMapper matchingMapper;
	
	public int authorTutee(Map<String, Object> paramTutee) {
		int authorTutee= matchingMapper.authorTutee(paramTutee);
		return authorTutee;
	}
	
	public int authorTutor(Map<String, Object> paramTutor) {
		int authorTutor= matchingMapper.authorTutor(paramTutor);
		return authorTutor;
	}
	
	 public int getMaxTeam() {
	        return matchingMapper.selectMaxTeam();
	    }
	
	public int matching(Map<String, Object> paramMatching) {
		int matching= matchingMapper.matching(paramMatching);
		return matching;
	}
	
	public Map<String, Object> showTutor(Map<String, Object> param) {
		Map<String, Object> Tutorbox = matchingMapper.showTutor(param);
		return Tutorbox;
	}
	
	public Map<String, Object> showTutee(Map<String, Object> param) {
		Map<String, Object> Tuteebox = matchingMapper.showTutee(param);
		return Tuteebox;
	}

}

