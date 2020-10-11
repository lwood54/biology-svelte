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
	connectionString := os.Getenv("db_connection_str")
	log.Println("Connecting to database...")
	DB, err = gorm.Open("mysql", connectionString)
	if err != nil {
		panic("Failed to connect to the database" + err.Error())
	}
	log.Println("Database connection succeeded")
}
