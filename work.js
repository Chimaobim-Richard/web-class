// how to data types

let num = false
console.log(typeof(num))

// strings
// strings are indexed

 let username = 'solensky'

 console.log(username[5]) // s

 console.log(username.indexOf('n')) // 4

 let re = username.toUpperCase()

 let lc = username.toLowerCase()

 console.log(re)
 console.log(lc)

// chaining methods

// let firstname = 'sdifjijfioefiojwjfiosdjiojeio'

// let initial = firstname[0].toUpperCase()
// console.log(initial)

// let lastname = '     Nonye   '
// console.log(lastname.trim())
// console.log(lastname)

// prompt

// let username = prompt('Enter your username')

// console.log(.trim())
let email = 'jejfeojosojdcgmail.com'

console.log(email.indexOf('@')) // -1

// if the value is not found in the string it

// slice
let fullname = 'Nancy Oloma'
let firstnamee = fullname.slice(0, fullname.indexOf(" "))
let lastnamee = fullname.slice(fullname.lastIndexOf(" "))

console.log(fullname.slice(0,7))
console.log(fullname.slice(0,4))

console.log(firstnamee)
console.log(lastnamee)

// replace
let newuser = "Chimaobim Richard"
let newperson = newuser.replace('Chimaobim', 'Chiamaka')

console.log(newuser)
console.log(newperson)

// break command for java is \n
console.log('I am a \n smart alec')

// template Literals
console.log(`I counted ${8393+2378} grains of rice`)

console.log(`My initial is ${newuser[0]}`)

let item = 'cucumbers'
let price = 1.99
let quantity = 4

console.log(`You bought ${quantity} ${item}, total price: $${price*quantity}`)

console.log (Math.PI)

// Rounding a number
console.log (Math.round(230.6))

// Absolute value
console.log(Math.abs(-4847))

// Raises 7 to the 4th power
console.log(Math.pow(7,4))

// Removes decimal
console.log(Math.floor(4.888))

// Gives random numbers
console.log(Math.random())

// Generate random number between 1-10
console.log(Math.floor(Math.random()*10))


