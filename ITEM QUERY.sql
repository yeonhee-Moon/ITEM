-- DROP SCHEMA item; 
CREATE SCHEMA item;
USE item;

CREATE TABLE user
(
	USER_NAME varchar(40) ,
	USER_ID varchar(40) PRIMARY KEY ,
	PW varchar(40) ,
	EMAIL varchar(40) ,
	TEAM int ,
	AUTHOR varchar(40)
);

SELECT * FROM user;

CREATE TABLE todolist
(
	ID int auto_increment PRIMARY KEY,
	TITLE varchar(40) ,
	COMPLETED tinyint(1) ,
	CONFIRMED tinyint(1) ,
	LINED tinyint(1) ,
	TEAM int
);

SELECT * FROM todolist;

CREATE TABLE confirmlist
(
	ID int PRIMARY KEY,
	IMAGE longblob ,
	DESCRIPT varchar(255)
);

SELECT * FROM confirmlist;