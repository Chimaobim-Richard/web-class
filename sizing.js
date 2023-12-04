let age= Number(prompt('Enter your age'))
let agerange=age>=24 && age<=29
if (agerange){
    alert('CONGRATULATIONS! You are eligible for internship')
    console.log('CONGRATULATIONS! You are eligible for internship')
}

// else{
//     alert("Sorry, you didn't meet up the requirement")
//     console.log("Sorry, you didn't meet up the requirement")
    
// }

let course =prompt('Enter your course of study')
if ( agerange && course.toLowerCase() .includes("engineering") || course.toLowerCase() ==="computer science"){
    alert("You've been assigned to the field operations")
    console.log("You've been assigned to the field operations")
}
else if (agerange && course.toLowerCase() ==="biochemistry" || course.toLowerCase() ==="biology" || course.toLowerCase() ==="industrial chemistry"){
    alert("You've been assigned to the laboratory")
    console.log("You've been assigned to the laboratory")
}
else{
    alert("INVALID INPUT")
    console.log("INVALID INPUT")
}

if (age<24 || age>29){
    alert("Sorry, you didn't meet up the required age")
    console.log("Sorry, you didn't meet up the required age")
}