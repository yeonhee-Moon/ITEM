package com.example.item.join.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.item.join.mapper.JoinMapper;

@Service
public class JoinService {
	@Autowired
	private JoinMapper joinMapper;

	public int join(Map<String, Object> param) {
		int join = joinMapper.join(param);
		return join;
	}
	
	public Map<String, Object> login(Map<String, Object> param) {
		Map<String, Object> result = joinMapper.login(param);
		return result;
	}
	
	public Map<String, Object> matchingname(Map<String, Object> param) {
		Map<String, Object> resultMatching = joinMapper.matchingname(param);
		return resultMatching;
	}

	public Map<String, Object> findid(Map<String, Object> param) {
		Map<String, Object> result = joinMapper.findid(param);
		return result;
	}
	
	public int reset(Map<String, Object> param) {
		int reset = joinMapper.reset(param);
		return reset;
	}
}
