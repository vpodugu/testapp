CREATE DATABASE test;
USE test;
CREATE TABLE Transactions (
    t_id int not null AUTO_INCREMENT,
    t_data varchar(255),
Primary key ( t_id )
);
ALTER TABLE Transactions ADD column \
 datetime DATETIME DEFAULT CURRENT_TIMESTAMP \
 ON UPDATE CURRENT_TIMESTAMP;
