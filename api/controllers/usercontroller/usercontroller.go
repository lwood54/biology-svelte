package usercontroller

import (
	"biology-svelte/constants"
	"github.com/gin-gonic/gin"
)

func newUser(c *gin.Context) {

}

// InitRoutes starts the usercontroller routes
func InitRoutes() {
	constants.Router.POST("/new-user", newUser)
}
