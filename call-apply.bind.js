//Usage of call,apply,bind
function test(a,b) {
    console.log(this);
    console.log(this.x + this.y+a+b);
}
test(4,5)//Natural function call where this keyword bind with window object
test.call({})//this bind with empty object 
test.call({x:20,y:30},5,10)//this bind with our object and arguments |(arguments with coma separated)
test.apply({x:20,y:30},[5,10])//this bind with our object and arguments|(arguments with array) 
test.bind({x:20,y:30},5,10)()//this bind with our object and arguments|(arguments with coma separated) 
// bind don't call the function immediately, it only bind with our object and arguments
//for invoke the function you have to store the function in variable and use console.log function and use direct ()call with function pranthesis
// Such As
var res = test.bind({x:20,y:30},5,10);
console.log(res.constructor);