package authenticationcontroller

import (
	"biology-svelte/constants"
	"biology-svelte/structs/userstructs"
	"crypto/rand"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-gonic/gin"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
	"io/ioutil"
	"log"
	"net/http"
	"os"
)

// Credentials for google oauth
type Credentials struct {
	Cid     string `json:"cid"`
	Csecret string `json:"csecret"`
}

var conf *oauth2.Config

func randToken() string {
	b := make([]byte, 32)
	rand.Read(b)
	return base64.StdEncoding.EncodeToString(b)
}

func getLoginURL(state string) string {
	return conf.AuthCodeURL(state)
}

func loginHandler(c *gin.Context) {
	state := randToken()
	session := sessions.Default(c)
	session.Set("state", state)
	session.Save()
	c.Writer.Write([]byte("<a class='g-anchor-wrap' href='" + getLoginURL(state) + "'><button class='g-auth-btn'>Login with Google!</button> </a>"))
}

func authHandler(c *gin.Context) {
	// Handle the exchange code to initiate a transport.
	session := sessions.Default(c)
	retrievedState := session.Get("state")
	if retrievedState != c.Query("state") {
		c.AbortWithError(http.StatusUnauthorized, fmt.Errorf("Invalid session state: %s", retrievedState))
		return
	}

	tok, err := conf.Exchange(oauth2.NoContext, c.Query("code"))
	if err != nil {
		c.AbortWithError(http.StatusBadRequest, err)
		return
	}

	client := conf.Client(oauth2.NoContext, tok)
	email, err := client.Get("https://www.googleapis.com/oauth2/v3/userinfo")
	if err != nil {
		c.AbortWithError(http.StatusBadRequest, err)
		return
	}
	defer email.Body.Close()
	data, _ := ioutil.ReadAll(email.Body)
	log.Println("Email body: ", string(data))

	var googleUserDetails userstructs.GoogleUser

	jsonError := json.Unmarshal(data, &googleUserDetails)

	if jsonError != nil {
		log.Println(jsonError.Error())
	}

	c.JSON(http.StatusOK, googleUserDetails)
}

// InitRoutes starts authentication routes
func InitRoutes(store cookie.Store) {
	var credentials = Credentials{
		Cid:     os.Getenv("GOOGLE_ID"),
		Csecret: os.Getenv("GOOGLE_SECRET"),
	}

	conf = &oauth2.Config{
		ClientID:     credentials.Cid,
		ClientSecret: credentials.Csecret,
		RedirectURL:  "http://localhost:3000",
		Scopes: []string{
			"https://www.googleapis.com/auth/userinfo.profile", // You have to select your own scope from here -> https://developers.google.com/identity/protocols/googlescopes#google_sign-in
		},
		Endpoint: google.Endpoint,
	}

	constants.Router.GET("/auth/login", loginHandler)
	constants.Router.GET("/auth", authHandler)
}
