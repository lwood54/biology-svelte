package tokens

import (
	"biology-svelte/services/encryption"
	"biology-svelte/structs/userstructs"
	"fmt"
	"github.com/dgrijalva/jwt-go"
	"time"
)

// todo replace with jwt_secret env variable
const testSecret = "TEST"
const ttl = 60 * time.Minute

// CreateUserJwt generates an AES encrypted JWT with user information
func CreateUserJwt(userData userstructs.UserResponse) string {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"email":      userData.Email,
		"picture":    userData.Picture,
		"givenName":  userData.GivenName,
		"familyName": userData.FamilyName,
		"name":       userData.Name,
		"gender":     userData.Gender,
		"exp":        time.Now().UTC().Add(ttl).Unix(),
	})

	tokenString, err := token.SignedString([]byte(testSecret))

	if err != nil {
		panic(err)
	}
	encryptedJwt := encryption.AesEncrypt(tokenString)
	return encryptedJwt
}

// ReadUserJwt decryptes jwt and returns user
func ReadUserJwt(jwtString string) jwt.MapClaims {
	decryptedJwt := encryption.AesDecrypt(jwtString)
	token, err := jwt.Parse(decryptedJwt, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}
		return []byte(testSecret), nil
	})

	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		return claims
	}
	panic(err)
}
