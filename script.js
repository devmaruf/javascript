//------Logic condition------Chapter 1-----------
console.log('Hello world');
console.log(49);// 49 number 
console.log('My age is '+ 90);//number+number=number--string+number=string
console.log(false);// here false is boolean
//js variable------------------------------------
var myName= 'Maruf Afridi';
var myAge= 24;
console.log(myName+' knows javascript properly');
console.log('His age is '+ myAge);
console.log(myName+' created a javascript course');
//Datatype (1)->Primitive data type (2)->Object Type data Type
//Primitive: String,number,Boolean,null,undefined,Symbol,bigint
//Object type data type: Object, array, function
//---------------------Number--------------------------
var n= 4.5;
console.log(Number.parseFloat(n));
console.log(Number.parseInt(n));
console.log(Number('45'));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_VALUE);
console.log(1/0);
console.log('abc'*100);
//------------String------------------------------
var str = 'string';
var str2 = "string";
var str3 = `String`;
var str4= String('Maruf Afridi');
var str5= String(45);
//-------------Boolean--------
var b1= Boolean(true);
var b2= Boolean(false);
console.log(str,str2,str3,str4,str5,b1,b2);
//--------------------Null vs undefined----------
var a;
var b = null;
console.log(a,b);
//---------------Type conversion with truthy or falsy value-----
var str='1000';
var n= 12;
console.log(Number(str));
console.log(n.toString());
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(-Infinity));
console.log(Boolean(false));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(' '));
var x= true;
console.log(x.toString());
// ---------Hexadecimal and Octal number-----------
var hex= 0xff;
console.log(hex);
var oct= 0255;
console.log(oct);
//------------operator of js---------------
//arithmetic: + - * / % ++ --
var a= 10;
var b= 3;
console.log(a%b);
//Incremental operator
console.log(++a);
console.log(a++);
console.log(a);
//Decremental operator
console.log(--a);
console.log(a--);
console.log(a);
var a= 20;
var b= 4;
a+=b;
console.log(a);
a/=b;
console.log(a);
a-=b;
console.log(a);
a*=b;
console.log(a);
//--Comparison operator---------
var a= 30;
var b= 25;
console.log(a==b);
console.log(a!=b);
console.log(a === b);
console.log(a !== b);
console.log(a>b);
console.log(a>=b);
console.log(a<b);
console.log(a<=b);
var a= '20';
var b= 20;
console.log(a==b);
console.log(a!=b);
console.log(a===b);
console.log(a!==b);
//-----logical operator---
var a= 30;
var b= 30;
if (a==b) {
    console.log('Good');
} else {
    console.log('Bad');
}
console.log(typeof('45'));
console.log(typeof(45));
console.log(typeof(true));
console.log(typeof(false));
console.log(typeof(NaN));
console.log(typeof(null));
//--Statement---------------
var num= 100 + (90*4)/2;
console.log(num);
//--------MAth function--------------
console.log(Math.E);
console.log(Math.PI);
console.log(Math.abs(7346));
var n= 4.578;
console.log(Math.abs(n));
console.log(Math.floor(n));
console.log(Math.ceil(n));
console.log(Math.round(n));//(4.578=5)Round work with mathmetical terms
var n= 4.378;
console.log(Math.round(n));//(4.378=5)Round work with mathmetical terms
console.log(Math.pow(5,3));
console.log(Math.max(100,500,900));
console.log(Math.min(100,500,900));
console.log(Math.sqrt(25));
console.log(Math.sqrt(100));
console.log(Math.sqrt(16));
console.log(Math.round(Math.random() *20 +1));
//--------Date function--------------
var date= new Date();
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toLocaleDateString());
console.log(date.getDate());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMilliseconds());
console.log(date.getTime());




