let numberArray = new Array();
numberArray.push(5);
numberArray.push(6);
numberArray.push(-11);
console.log(numberArray);
let sum =0;
function findSum(sum,num){
    sum+=num;
    return sum;
}
numberArray.reduce(findSum,0);
console.log("Sum is "+sum);

let zeroSumArray = new Array();
let num1 = 0;
let num2 = 0;
let num3 = 0;
for(let i=0;i<numberArray.length;i++){
    num1 = numberArray[i];
    for(let j=0;j<numberArray.length&&j!=i;j++){
        num2 = numberArray[j];
        for(let k=0;k<numberArray.length&&k!=j&&k!=i;k++){
            num3 = numberArray[k];
            if(num1+num2+num3==0)
                zeroSumArray.push(num1);
                zeroSumArray.push(num2);
                zeroSumArray.push(num3);
        }
    }
}
console.log(zeroSumArray);
