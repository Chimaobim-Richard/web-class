// let password = '#234kkkll%4%%'
// // use conditional statement to check the length of te password

// console.log(password.length)

// if(password.length<16){
//     console.log('Password Character must be greater than 16')
// }else {
//     console.log('Good Password')
// }

// let email = 'jegbogu@gmail.com'

// if(email.length<9){
//     console.log('password must be greater than 9')
// }else {
//     console.log('Good email')
// }

// let username = prompt('Enter Username')

// if(username.length<8){
//     alert('Username must be greater than eight characters')
// }else{
//     alert(`Welcome ${username}`)
// }

//if your age is less than 20, your gate fee is 1000 and you will be assigned a password that starts with teen

//if your age is more 60 you would be assigned a password that starts with ret and your fee will be 500

// let fullname = prompt('Enter Fullname')
// let age = Number(prompt('Enter age'))

// let genPass = Math.floor(Math.random()*10000)+14300
// let teenPassword =  `teen${genPass}`
// let retPassword =  `ret${genPass}`

// let firtsname = fullname.slice(fullname.indexOf(' '),100)
// if(age<20){
//     alert(`Welcome ${firtsname}, your password is ${teenPassword} and your fee is 1000 Naira`)
// }else if(age>60){
//     alert(`Welcome ${firtsname}, your password is ${retPassword} and your fee is 500 Naira`)
// }else{
//     alert('You didnt meet the requirement')
// }

// an application that can determine discount based on purchase
// let fullname = prompt('Enter fullname')
// let firstPurchase = prompt('Enter product')

// let firstamount;
// if(firstPurchase.trim().toLowerCase() === 'noodles' && qty!=0){
//     firstamount = 2000*qty
// }else if(firstPurchase.trim().toLowerCase() === 'hamper'){
//     firstamount = 3500
// }

// let noodlesQty =Number (prompt('noodlesQty'))

// let hamperQty = Number(prompt('hamperQty'))
// let shoesQty = Number(prompt('shoesQty'))
// let chickenQty =Number (prompt('chickenQty'))
// let noodles = 2000
// let hamper = 3500
// let shoes = 1700
// let chicken = 2300



//create an application that would give 3% discount for a purchese of 5000 and above, and let the user know his total purchase, his discount percentage, and how much he has to pay
//5% 10000 and above

//the app must the firstname of the user and the qunatity he wants to purchase

if(totalPurchase>=5000){
    alert(`Your total is :${totalPurchase},
    \nYour discount percentage is 3% and total amount to be paid with discount is\n
    : ${totalPurchase - (totalPurchase*0.3)}./nThank you ${fullname.slice(0, fullname.indexOf(' '))}`)
}else if(totalPurchase>=10000){
    alert(`Your total is :${totalPurchase},
    \nYour discount percentage is 5% and total amount to be paid with discount is\n
    : ${totalPurchase - (totalPurchase*0.5)}./nThank you ${fullname.slice(0, fullname.indexOf(' '))}`)
}