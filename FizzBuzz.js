
for(var num = 0; num<=15;num++){
if(num % 3 == 0 && num % 5 ==0) //checks for divisibility of both 5 and 3
console.log("fizzBuzz");
else if(num % 5 ==0) //checks divisibility of 5
console.log("buzz");
else if (num % 3 == 0) //Check divisibility of 3
console.log("Fizz");
else
console.log(num);}