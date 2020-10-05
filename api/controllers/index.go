package controllers

import (
	"biology-svelte/constants"
	"biology-svelte/controllers/ping"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"time"
)

// Init initializes application routes
func Init() {
	constants.Router = gin.Default()
	constants.Router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"PUT", "PATCH", "GET", "POST", "OPTIONS", "DELETE"},
		AllowHeaders:     []string{"Origin", "Content-Type"},
		ExposeHeaders:    []string{"Content-Length", "Content-Type", "Accept"},
		AllowCredentials: true,
		// AllowOriginFunc: func(origin string) bool {
		// 	return origin == "https://github.com"
		// },
		MaxAge: 12 * time.Hour,
	}))
	ping.InitRoute()
	constants.Router.Run()
}
