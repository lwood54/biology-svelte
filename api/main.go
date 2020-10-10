package main

import (
	"biology-svelte/controllers"
	"log"
)

func main() {
	log.Println("Server starting...")
	// dao.DbInit()
	controllers.Init()
}
