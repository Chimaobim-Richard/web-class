let aage =prompt('Enter your age')
if (aage>=60){
    alert("You've been assigned to Free Services")
    console.log("You've been assigned to Free Services")
}
else if (aage<=59 && aage>=30){
    alert("You've been assigned to pay the sum of 2000 naira")
    console.log("You've been assigned to pay the sum of 2000 naira")
}
else if (aage<=29 && aage>=18){
    alert("You've been assigned to pay the sum of 1200 naira")
    alert("You've been assigned to pay the sum of 1200 naira")
}
else if (aage<18){
    alert("You are not permitted to enter")
    console.log("You are not permitted to enter")
}