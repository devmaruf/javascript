//pure function
//It return same result if givens same arguments
//it doesn't cause any side effect 
function sqr(n) {
    console.log(n*n);
}
sqr(2)
sqr(2)
sqr(2)
//print() is not pure function because when i call the function
//then it causes side effect sus as changes the outer level of variable value 
var a=10;
function print() {
    a=100;
}
print()
console.log(a);
//First class function
function add(a,b) {
    return a+b;
}
//1-> A function can be stored in a variable
var sum = add;
console.log(sum(4,6));
console.log(typeof sum);
//2-> A function can be stored in an array
var arr =[];
arr.push(add);
console.log(arr);
console.log(arr[0](60,60))
//3-> A function can be stored in an Object
var obj = {
    sum: add
}
console.log(obj);
console.log(obj.sum(7,3));
//4-> we can create function as need
setTimeout(function() {
    console.log('I am Maruf Afridi');
},5000)
// Higher Order function
//1-> We can pass function as function argument
//1-> We can return function from another function 
function add(a,b) {
    return a+b;
}
function manupulation(a,b,func) {
    var c= a+b;
    var d= a-b;
    return function() {
        var m= func(a,b)
        return c*d*m
    }
}
var m = manupulation(10,6,add);
console.log(m());
//callback function
function calculator(a,b,cb){
    var output = cb(a,b)
    return output;
}

var result = calculator(8,4,function(a,b) {
    return a-b;
});
console.log(result);
//Foreach summation
var arr= [1,2,3,4,5,6,7,8,9,10]
var sum = 0;
arr.forEach(function(value,index,arr) {
    sum+=value;
})
console.log(sum);
//Foreach implementation
function forEach(arr,cb){
    for (let i = 0; i < arr.length; i++) {
       cb(arr[i],i,arr);
    }
}
forEach(arr,function(value,index,arr){

    console.log(value,index,arr);
})
//Foreach modify original array
//map create a new array then return that array, don't modify original array
var newArray = arr.map(function(value,index,arr){
    return value*value*value
})
console.log(newArray);
//Custom map implementation
function myMap(arr){
    var newArray=[];
    for (let i = 0; i < arr.length; i++) {
        var temp = arr[i]; 
        newArray.push(temp);
    }
    return newArray;
}
console.log(myMap(arr));
//Dynamic Custom map implementation 
function dMap(arr,cb){
    var newArray=[];
    for (let i = 0; i < arr.length; i++) {
        var temp = cb(arr[i]); 
        newArray.push(temp);
    }
    return newArray;
}
console.log(dMap(arr,function(value){
    return value*1000;
}));
//filter as like map. but it return a new array based on logic
var filterArray= arr.filter(function(value){
    return value%2===0
})
console.log(filterArray);
//simple implementation
function myFilter(arr) {
    var newFilter=[];
    for (let i = 0; i < arr.length; i++) {
         if (arr[i]%2===1) {
             newFilter.push(arr[i])
         }
    }
    return newFilter;
}
var simpleFiltermy = myFilter(arr);
console.log(simpleFiltermy);
//Dynamic Filter implementation
function dynamicFilter(arr,cb) {
    var newFilter=[];
    for (let i = 0; i < arr.length; i++) {
         if (cb(arr[i],i,arr)) {
             newFilter.push(arr[i])
         }
    }
    return newFilter;
}
var simpleFiltermy = dynamicFilter(arr,function(value){
    return value>5;
});
console.log(simpleFiltermy);
//Array reduce method
var newArray= arr.reduce(function(acc,curr,index,arr) {
    return acc+curr;
})
console.log(newArray);
//simple reduce implementation
function myReduce(arr,cb,acc) {
    for (let i = 0; i < arr.length; i++) {
        acc= cb(acc,arr[i]);
    }
    return acc;
}
console.log(myReduce(arr,function(prev,curr) {
    return prev+curr
},0));
console.log(myReduce(arr,function(prev,curr) {
    return Math.max(prev,curr)
},0));
console.log(myReduce(arr,function(prev,curr) {
    return Math.min(prev,curr)
},arr[0]));
// Array find and find index
var res= arr.find(function(value){
    return value ===9;
})
console.log(res);
//findIndex
var res= arr.findIndex(function(value){
    return value ===9;
})
console.log(res);
//Own myFind implementation
function myFind(arr,cb) {
    for (let i = 0; i < arr.length; i++) {
        if(cb(arr[i])){
            return arr[i];
        } 
    }
}
console.log(myFind(arr,function(value){
    return value===4;
}));
//FindIndex implementation
function myFindIndex(arr,cb) {
    for (let i = 0; i < arr.length; i++) {
        if(cb(arr[i])){
            return i;
        } 
    }  
}
console.log(myFindIndex(arr,function(value){
    return value===4;
}));
// Callback function example with power function implementation
function base(b) {
   return function(n) {
        var result=1;
        for (let i = 0; i <b; i++) {
           result*=n; 
        }
        return result;
    }
}
var base10= base(3);
console.log(base10(3));
//Recursive function: It's call ownly. so that function call can not infinity thats why have to set a terminate point.
function reSum(n) {
    if (n===1) {
        return 1;
    }
    return n + reSum(n-1);
}
console.log(reSum(5));
// Factorial with recursive function
function fact(n) {
    if (n===1) {
        return 1;
    }
    return n * fact(n-1);
}
console.log(fact(5));
//Sum of array with recursive function
function sumOfArray(arr,lastIndex) {
    if (lastIndex <0) {
        return 0;
    }
    return arr[lastIndex] + sumOfArray(arr,lastIndex -1);
}
console.log(sumOfArray(arr,arr.length-1));
//currying
//Have to pass single argument
function currying(a) {
    return function(b) {
        return function(c){
            return a+b+c;
        }
    }
}
var result = currying(10)(20)(30);
console.log(result);
//Function composition
// if one function input will be another function output then it's call function composition
function print(inp){
    console.log(inp);
}
function mutiplyByFive(n){
    return n*5;
}
function add(a,b) {
    return a+b;
}
print(mutiplyByFive(add(5,4)))