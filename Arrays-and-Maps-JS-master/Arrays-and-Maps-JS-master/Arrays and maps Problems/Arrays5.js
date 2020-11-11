let numArray = new Array();
for(num=1;num<=100;num++){
    if(num%10==(Math.floor(num/10)%10)&&num%10!=0)
        numArray.push(num);
}
console.log(numArray);

let numArray2=new Array();
function isValidNumber(number){
    return number%10==(Math.floor(number/10)%10)&&number%10!=0;
}
for(num=1;num<=100;num++){
    numArray2.push(num);
}
let filteredArray = numArray2.filter(isValidNumber);
console.log("Filtered array: "+filteredArray);
