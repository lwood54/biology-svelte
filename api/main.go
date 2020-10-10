package main

import (
	"biology-svelte/controllers"
	"biology-svelte/dao"
	"log"
)

func main() {
	log.Println("Server starting...")
	dao.DbInit()
	controllers.Init()
}
