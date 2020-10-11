package userdao

import (
	"biology-svelte/dao"
	"biology-svelte/structs/userstructs"
	"errors"
	"github.com/jinzhu/gorm"
)

const usersTable = "user"

// FindUserByEmail queries the database for a user by their email address
func FindUserByEmail(email string) userstructs.UserEntity {
	var userEntity userstructs.UserEntity
	result := dao.DB.Table(usersTable).Where("email = ?", email).First(&userEntity)

	if errors.Is(result.Error, gorm.ErrRecordNotFound) == true {
		return userEntity
	}

	if result.Error != nil {
		panic(result.Error.Error())
	}
	return userEntity
}

// CreateNewUser saves a new user to the database
func CreateNewUser(userEntity userstructs.UserEntity) userstructs.UserEntity {
	dao.DB.Table(usersTable).AutoMigrate(&userstructs.UserEntity{})
	result := dao.DB.Table(usersTable).Create(&userEntity)

	if result.Error != nil {
		panic(result.Error.Error())
	}
	return userEntity

}
