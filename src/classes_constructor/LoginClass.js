import React from 'react'

export class LoginClass {
  constructor(email, password, name) {

    this.Id = getRandomInt(10000000),
    this.body = {
      email: email,
      password: password,
      name: name
    }

  }

}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
