// Input Output Processing->Function.
//Function is a basic level of abstraction
// It reduce our repeatable work
function addition(a,b) {
    return a+b;
}
console.log(addition(50,20));

var myName= 'Maruf afridi';
function displayName() {
    return 'My name is '+myName;
}
console.log(displayName());
//Different array element summation using insider function looping
var arr1=[1,2,3,4];
var arr2=[2,4,6,8];
var arr3=[10,20,30,40];
function sumArray(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
       sum+=arr[i];
    }
    return sum;
}
console.log(sumArray(arr1));
console.log(sumArray(arr2));
console.log(sumArray(arr3));
//Array arguments
function test(a,b,c) {
    for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]); 
    }
}
test(10,20,30);
//-----------------------------------
function sum() {
    console.log(arguments);//display arguments structure
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum+= arguments[i];
    }
    console.log(sum);
}
sum(10,20,30,40,50);
// return object
function person(name,age) {
    return {
        name: name,
        age: age
    }
}
console.log(person('Afridi',24));
//Function Expression
var sum= function(){//function expression
    var add=0;
    for (let i = 0; i < arguments.length; i++) {
     add+=arguments[i];
    }
    return add;
}
var another= sum
console.log(another(1,2,3,4,5));
//Inner function
function greeting(greet,name) {
    function getFirstName() {
        return name.split(' ')[0];
    }
    var message= greet+' '+getFirstName();
    console.log(message);
}
greeting('Good Morning!', 'Maruf Afridi');
// Function Scoping
