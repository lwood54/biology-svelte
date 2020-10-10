package authentication

import (
	"biology-svelte/dao/userdao"
	"biology-svelte/services/tokens"
	"biology-svelte/structs/userstructs"
	"log"
)

// HandleGoogleOAuthLogin searches for a current user in the db by email. If no user exists, a new one is created. Otherwise existing details are sent
func HandleGoogleOAuthLogin(googleUser userstructs.GoogleUser) userstructs.UserResponse {
	userResponse := googleUser.BuildUserFromGoogleUser()
	log.Println(userResponse.Email)
	userEntity := userdao.FindUserByEmail(userResponse.Email)

	// If no user found, create user
	if len(userEntity.Email) == 0 {
		userEntity.Email = userResponse.Email
		log.Println(userEntity.Email)
		// determine way for admin to increase permissions to teacher
		// maybe could start as student account and then get upgraded in the dashboard
		userEntity.Authority = userResponse.Authority
		userdao.CreateNewUser(userEntity)
	}
	// Build user details and store in jwt
	jwt := tokens.CreateUserJwt(userResponse)
	userResponse.Jwt = jwt
	return userResponse
}
