package encryption

import (
	"crypto/aes"
	"crypto/cipher"
)

// todo: Needs to be replaced with an enivornment variable
// before real users use this
// must be 32 characters in length
// passphrasewhichneedstobe32bytes
const aesEncryptionKey = "ng85Ft9FyguFEmQTDARWWFEFgHpjd0uE"

// AesEncrypt encrypts a value
func AesEncrypt(value string) string {
	text := []byte(value)

	key := []byte(aesEncryptionKey)

	c, err := aes.NewCipher(key)
	if err != nil {
		panic(err)
	}
	gcm, err := cipher.NewGCM(c)
	if err != nil {
		panic(err)
	}
	nonce := make([]byte, gcm.NonceSize())
	return string(gcm.Seal(nonce, nonce, text, nil))
}

// AesDecrypt decryptes a value
func AesDecrypt(value string) string {
	text := []byte(value)
	// can change this to something else, it just must be a string with 32 characters
	key := []byte(aesEncryptionKey)

	c, err := aes.NewCipher(key)
	if err != nil {
		panic(err)
	}

	gcm, err := cipher.NewGCM(c)
	if err != nil {
		panic(err)
	}

	nonceSize := gcm.NonceSize()
	if len(text) < nonceSize {
		panic(err)
	}

	nonce, text := text[:nonceSize], text[nonceSize:]
	plaintext, err := gcm.Open(nil, nonce, text, nil)
	if err != nil {
		panic(err)
	}
	return string(plaintext)
}
