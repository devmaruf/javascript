var obj= {
    x:10,
    y:20,
}//with object literal
obj.z=30;
console.log(obj);

var obj1= Object();//Constructor way
obj1.x=10
obj1.y=20
console.log(obj1);

var obj2= new Object();//Constructor way
obj2.x=60;
console.log(obj2);
//Accessing object property
var obj= {
    x:10,
    y:20,
}
console.log(obj.y);//Use .(dot) notation
console.log(obj['x']);//Use array notation
var show= 'y'
console.log(obj[show]);// array notation is used with dynamic properties
obj['a']=500;//insert with array notation
console.log(obj);
var b='m'//insert with array notation and variable
obj[b]=300;
console.log(obj);
delete(obj.x);// Remove object property using delete() method
console.log(obj);
//Object in operator
console.log('y' in obj);
//object iterate
for (const key in obj) {
    console.log(obj[key]);
}
//Some object method
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
//Object duplicate
var nObj= Object.assign({},obj);
nObj['y']=70;
var va='k';
nObj[va]=70;
console.log(obj);
console.log(nObj);