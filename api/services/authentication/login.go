package authentication

import (
	"biology-svelte/structs/userstructs"
)

// HandleGoogleOAuthLogin searches for a current user in the db by email. If no user exists, a new one is created. Otherwise existing details are sent
func HandleGoogleOAuthLogin(googleUser userstructs.GoogleUser) userstructs.UserResponse {
	// Query Db for user
	// If no user found, create user
	// Build user details and store in jwt
	// encrypt jwt and return jwt
}
