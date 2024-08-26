package com.example.item.confirm.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.example.item.confirm.model.Confirm;
import com.example.item.confirm.model.ImageInfo;

@Mapper
public interface ConfirmMapper {
	
	void insertConfirm(Confirm confirm);
	
	void updateConfirm(Confirm confirm);
	
	ImageInfo getImageInfoById(Long id);
}
