#功能一:创建用户登录表并且添加数据
SET NAMES UTF8;
DROP DATABASE IF EXISTS lp;
CREATE DATABASE lp CHARSET=UTF8;
USE lp;


/*用户信息表 lp_user*/
CREATE TABLE lp_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),

  avatar VARCHAR(128),        #头像图片路径
  user_name VARCHAR(32),      #用户名，如王小明
  gender TINYINT                  #性别  0-女  1-男
);