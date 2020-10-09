package controllers

import (
	"biology-svelte/constants"
	"biology-svelte/controllers/authenticationcontroller"
	"biology-svelte/controllers/ping"
	"biology-svelte/controllers/usercontroller"
	"github.com/gin-contrib/cors"
	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
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
	store := cookie.NewStore([]byte("secret"))
	constants.Router.Use(sessions.Sessions("mysession", store))
	ping.InitRoute()
	usercontroller.InitRoutes()
	authenticationcontroller.InitRoutes(store)
	constants.Router.Run()
}
