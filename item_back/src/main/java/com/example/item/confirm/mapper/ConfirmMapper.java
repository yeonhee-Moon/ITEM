package com.example.item.confirm.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.example.item.confirm.model.Confirm;

@Mapper
public interface ConfirmMapper {
	
	void insertConfirm(Confirm confirm);
	
	void updateConfirm(Confirm confirm);
	
	Confirm getImageInfoById(Long id);
}
