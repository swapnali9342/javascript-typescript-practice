
const marks:number = 75;
const passingmarks:number = 40;
const distinctionmarks:number = 90;

if (marks >= distinctionmarks){
    console.log("You have passed with distinction");
}

else if (marks >= passingmarks){
    console.log("You have passed");
}

else{
    console.log("error");
}