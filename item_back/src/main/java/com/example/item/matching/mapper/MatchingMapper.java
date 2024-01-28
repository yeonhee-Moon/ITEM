package com.example.item.matching.mapper;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MatchingMapper {
	
	public int authorTutee(Map<String, Object> paramTutee);
	public int authorTutor(Map<String, Object> paramTutor);
	
	public int matching(Map<String, Object> paramMatching);
	
}
