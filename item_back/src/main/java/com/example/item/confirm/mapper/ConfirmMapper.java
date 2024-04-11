package com.example.item.confirm.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.example.item.confirm.model.Confirm;

@Mapper
public interface ConfirmMapper {
	Confirm getImageInfoById(Long id);
}
