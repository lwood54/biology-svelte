package authentication

import (
	"biology-svelte/services/tokens"
	"biology-svelte/structs/userstructs"
	"fmt"
)

// UserDetails responds with the users details if it has access to the cookie
func UserDetails(jwtString string) userstructs.UserResponse {
	claims := tokens.ReadUserJwt(jwtString)

	// todo need to also check expiration of token
	if len(fmt.Sprint(claims["email"])) == 0 {
		panic("User not logged in")
	}

	return userstructs.UserResponse{
		Email:      fmt.Sprint(claims["email"]),
		Picture:    fmt.Sprint(claims["picture"]),
		FamilyName: fmt.Sprint(claims["familyName"]),
		GivenName:  fmt.Sprint(claims["givenName"]),
		Gender:     fmt.Sprint(claims["gender"]),
		Name:       fmt.Sprint(claims["name"]),
	}
}
