package com.example.item.join.mapper;


import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface JoinMapper {
	public int join(Map<String, Object> param);
	
	public Map<String, Object> login(Map<String, Object> param);
	
	public Map<String, Object> matchingname(Map<String, Object> param);
	
	public Map<String, Object> findid(Map<String, Object> param);
	
	public int reset(Map<String, Object> param);
}
