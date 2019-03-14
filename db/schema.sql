CREATE DATABASE test;
USE test;

CREATE TABLE Transactions (
    t_id int not null AUTO_INCREMENT,
    t_field_1 varchar(255),
	t_field_2 varchar(255),
	t_field_3 varchar(255),
	t_field_4 varchar(255),
	t_field_5 varchar(255),
	t_field_6 varchar(255),
	t_field_7 varchar(255),
	t_field_8 varchar(255),
	t_field_9 varchar(255),
	t_field_10 varchar(255),
	t_field_11 varchar(255),
	t_field_12 varchar(255),
	t_field_13 varchar(255),
	t_field_14 varchar(255),
	t_field_15 varchar(255),
	t_field_16 varchar(255),
	t_field_17 varchar(255),
	t_field_18 varchar(255),
	t_field_19 varchar(255),
	t_field_20 varchar(255),
	t_date_1 DATETIME  DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	t_date_2 DATETIME  DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	t_date_3 DATETIME  DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
Primary key ( t_id )
);

