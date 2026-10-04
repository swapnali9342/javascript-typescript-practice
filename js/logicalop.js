

const age = 25;
const hasId = true;

if (age>18&& hasId) {
    console.log ("You are eligible to vote");
}

else if (age>18||hasId){
    console.log ("You are eligible to vote but you need to have an ID");
}

else if (age<18 && !hasId){
    console.log("You are not eligible to vote and you need to have an ID");
}
else {
    console.log("You are not eligible to vote but you have an ID");
}