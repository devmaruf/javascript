//loop
//0 to 10 all even number print with for loop
for (let i = 0; i < 10; i++) {
    if (i%2===0) {
        console.log(i);
    }  
}
// 1 to 100 summation with for loop
var sum=0;
for (let i = 0; i <= 10; i++) { 
    console.log(sum+'+'+i+'='+(sum+i)); 
    sum+=i;
}
console.log(sum);
//1 to 10 even number summation
var sum=0;
for (let i = 0; i <= 10; i++) { 
    if (i%2===0) {
        console.log(sum+'+'+i+'='+(sum+i)); 
    sum+=i;
    }
}
console.log(sum);
//while loop is usually used to based on condition
// if condition is true then will be execute
// Usage of while loop as like for loop
var i=0;
while (i<=10) {
    console.log(i);
    i++;
}
//
var isRunning = true;
while (isRunning) {
    var rand= Math.floor(Math.random()*50+1);
    if (rand === 9) {
        console.log('winner winner chicken dinner');
        isRunning= false;
    }else{
        console.log('You have got '+rand);
    }
}
//do-while loop
var isRunning= false;
do {
    console.log('I am Running');
} while (isRunning);
//Nested loop
//1
//1 2
//1 2 3
//1 2 3 4
//1 2 3 4 5
var i = 1;
var n = 20;
for (var i; i <= n; i++) {
    var result='';
    for (let j = 1; j <= i; j++) {
        result += j +' ';
    }
    console.log(result);
}
//* * * * *
//* * * * *
//* * * * *
//* * * * *
//* * * * *
var n = 5;
for (let i = 1; i <= n; i++) {
    var result='';
    for (let j = 1; j <= n; j++) {
        result += '1 ' ;
    }
    console.log(result);
}
// Break statement
while (true) {
    var rand= Math.floor(Math.random()*50+1);
    if (rand === 9) {
        console.log('winner winner chicken dinner');
        break;
    }else{
        console.log('You have got '+rand);
    }
}
//Continue statement
for (let i = 0; i <= 10; i++) {
    if (i===3 || i===5) {
        continue;
    }else{
        console.log(i);
    }
    
}
//Infinity statement
for (; ;) {
    var rand= Math.floor(Math.random()*50+1);
    if (rand === 9) {
        console.log('winner winner chicken dinner');
        break;
    }else{
        console.log('You have got '+rand);
    }   
}