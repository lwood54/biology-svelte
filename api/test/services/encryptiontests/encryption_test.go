package encryptiontests

import (
	"biology-svelte/services/encryption"
	"testing"
)

func TestAesEncryptAndDecrypt(t *testing.T) {
	initialValue := "Some Secret"

	encryptedValue := encryption.AesEncrypt(initialValue)
	decryptedValue := encryption.AesDecrypt(encryptedValue)

	if initialValue != decryptedValue {
		t.Errorf("Failed to encrypt and decrypt value accurately: expected decrypted value %v but got %v", initialValue, decryptedValue)
	}
}
