//------Logical condition------Chapter 2-----------
var a= 12;
var b= 10;
if (a>b) {
    console.log(a+' is greater than '+b);
} else {
    console.log(a+' is Less than '+b);
}
//Determine odd or even number
var n= 13;
if (n%2===0) {
    console.log(n+' is even number');
} else {
    console.log(n+' is odd number');
}
//if-elseif-else 
var a= 10;
var b= 10;
if (a>b) {
    console.log(a+' is greater than '+b);
} else if(a<b){
    console.log(a+' is Less than '+b);
}else{
    console.log('they both are same');
}
//---Switch statement------
//Determine Today with date function
// 0= sunday, 1= monday, 2= tuesday
var date= new Date();
var today= date.getDay();
switch (today) {
    case 0:
        console.log('sunday');
        break;
    case 1:
            console.log('Monday');
            break;
    case 2:
            console.log('Tuesday');
            break;
    case 3:
            console.log('WednesDay');
            break;
    case 4:
            console.log('Thursday');
            break;
    case 5:
            console.log('Friday');
            break;
    case 6:
            console.log('Saturday');
            break;

    default:console.log('Not a valid number');
        break;
}
// Logical a&&(and), ||(or), !(not) operator
//a && b
//true && true= true
//false && true= false
//true && false= false
//false && false= false
// a || b
//true || true= true
//true || false= true
//false || true= true
//false || false= false
var a=14;
var b=12;
var c= 30;
var d= 40;
if (a>b && c>d) {
    console.log(a+ ' is greater than '+b+' and '+c+' is Greater than '+d );
} else {
    console.log('at least one condition is false');
}

if (!(a>b && c>d)) {
    console.log(a+ ' is greater than '+b+' and '+c+' is Greater than '+d );
} else {
    console.log('at least one condition is false');
}
// ternary operator-----------
var n= 20;
var result = n%2===0?'Even':'Odd';
console.log(result);
//---------Logical and,or shorthand---------
var name= '';
var fullName= '';
// if there have any value of name variable then asign to fullName=name, otherwise default fullName= Maruf Afridi; 
//Normally
if (name.length ==0) {
    fullName= 'Maruf Afridi';
} else {
    fullName= name; 
}
console.log(fullName);
//shorthand logical (or)
var fullName= name || 'Maruf Billah';
console.log(fullName);
//Normally
var isOk= true;
if (isOk) {
    console.log('Everything is okay');
}
//shorthand logical (and)
isOk && console.log('Everything is ok');