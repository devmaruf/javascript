var arr= [1,2,3,4,5,6,7];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[3]);
console.log(arr[5]);
arr[7]=10;
var length= arr.length;
var index= arr.length-1;
console.log(index);
console.log(length);
///array console
console.log(arr);
// Array declare another way
var arr2= Array(1,2,2,3,4,5,76);
console.log(arr2);
//Array Traversing
var arr= Array(1,2,2,3,4,5,76);
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);   
}
//Find out Array summation
var arr= Array(1,2,2,3,4,5,76);
var sum=0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);
//array even number traverse by for loop
var arr= Array(1,2,3,4,5,6,7,8,9,10);
for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2===0) {
        console.log(arr[i]);
    }
}
// Array element insert,update,replace
var arr= Array(1,2,3,4,5,6,7,8,9,10);
arr.splice(3,0,12,13);//3-index,0-delete count,(12,13)->insertion of array index 3
console.log(arr);
arr.splice(3,1);// 3->index number, 1->deleteCount
console.log(arr);//
//element search at array index
var arr= Array(1,2,3,4,5,6,7,8,9,10);
var find=10;
var isFound = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i]==find) {
        console.log('Data found at index '+i);
        isFound = true;
        break;
    }
}
if (!isFound) {
    console.log('Data not Found');
}
//Multidimensional array
var arr= [
    [70,73,64,87,95],
    [87,49,64,85,63],
    [85,39,94,49,98],
    [28,83,12,93,100]
];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log('Element '+'index '+i+'-> '+arr[i][j]);
    }
}
//Array Reverse
var arr= Array(1,2,3,4,5,6,7,8,9,10,11);
for (let i = 0; i < arr.length/2; i++) {
    var temp= arr[i];
    arr[i]= arr[arr.length-1-i];
    arr[arr.length-1-i]=temp;
}
console.log(arr);
//Array some method
var arr= [1,2,3,4,5,6,7,8,9,10];
console.log(arr.join(', '));// Array join() take a seprator and return a string
console.log(Array.isArray(arr));
//Usage of Array.from()
var a=[1,2];
var b= a;
b[0]=5;
console.log(a);
console.log(b);// Here is the point, I want two array with same element
//But if I change second array index of element then it create a changes of first array. that is not expected
//(var a=[1,2]; var b= a)-> here main array is not exectly coping into the second array just coping main array referrance. (Here array work as a mutable object ) so that case I will use Array.from()
var a=[1,2];
var b= Array.from(a);
b[0]=5;
console.log(a);
console.log(b);// From here I have got an expected result