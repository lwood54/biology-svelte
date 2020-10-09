package userstructs

// GoogleUser is holds google oauth info
type GoogleUser struct {
	Picture    string `json:"picture"`
	Email      string `json:"email"`
	Name       string `json:"name"`
	GivenName  string `json:"given_name"`
	FamilyName string `json:"family_name"`
	Gender     string `json:"gender"`
}
