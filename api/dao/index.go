package dao

import (
	"github.com/jinzhu/gorm"
	// import mysql
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"log"
	"os"
)

// DB holds the gorm DB connection
var DB *gorm.DB

// DbInit creates a connection to the database and stores the connection in the DB variable
func DbInit() {
	var err error
	//
	// os.Getenv("db_connection_str")
	log.Println(os.Getenv("db_connection_str"))
	connectionString := os.Getenv("db_connection_str") //"root:root@(localhost:3306)/cu-well?charset=utf8&parseTime=True&loc=Local"
	log.Println("Connected on connection string: " + connectionString)
	DB, err = gorm.Open("mysql", connectionString)
	if err != nil {
		panic("Failed to connect to the database" + err.Error())
	}
}
