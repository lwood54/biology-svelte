package userstructs

import "biology-svelte/constants"

// GoogleUser is holds google oauth info
type GoogleUser struct {
	Picture    string `json:"picture"`
	Email      string `json:"email"`
	Name       string `json:"name"`
	GivenName  string `json:"given_name"`
	FamilyName string `json:"family_name"`
	Gender     string `json:"gender"`
}

// UserResponse is the user object that is exposed to the UI
type UserResponse struct {
	Picture    string `json:"picture"`
	Email      string `json:"email"`
	Name       string `json:"name"`
	GivenName  string `json:"given_name"`
	FamilyName string `json:"family_name"`
	Gender     string `json:"gender"`
	NewUser    bool   `json:"newUser"`
	Authority  string `json:"authority"`
	Jwt        string `json:"-"`
}

// UserEntity is the user entity for the database
type UserEntity struct {
	Email     string `gorm:"column:email" gorm:"primaryKey"`
	Authority string `gorm:"column:authority"`
}

// BuildUserFromGoogleUser returns a UserResponse struct with google oauth results + UserResponse default values
func (googleUser *GoogleUser) BuildUserFromGoogleUser() UserResponse {
	return UserResponse{
		Picture:    googleUser.Picture,
		Email:      googleUser.Email,
		Name:       googleUser.Name,
		GivenName:  googleUser.GivenName,
		FamilyName: googleUser.FamilyName,
		Gender:     googleUser.Gender,
		NewUser:    false,
		Authority:  constants.UserRoleStudent,
	}
}
