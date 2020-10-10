CREATE TABLE user (
  email varchar(200) UNIQUE NOT NULL,
  authority varchar(45) DEFAULT NULL,

  PRIMARY KEY (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
