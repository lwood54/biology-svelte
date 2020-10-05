package ping

import (
	"biology-svelte/constants"
	"github.com/gin-gonic/gin"
	"net/http"
)

func ping(c *gin.Context) {
	c.String(http.StatusOK, "Working")
}

// InitRoute starts the ping route
func InitRoute() {
	constants.Router.GET("/ping", ping)
}
