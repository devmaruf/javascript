//String literal vs constructor


//String Comparison
// it's work according to Lexical order
var a = 'abc';
var b = 'bcd';
console.log(a===b);
console.log(a<b);
console.log('a'>'b');
console.log('a'>'X');
console.log('aaaaaZ'>'aaaaaz');
console.log('1'==1);//string==number->number
console.log('1'+1);//string+number->String

// string method
var a = 'Maruf';
var b = ' Afridi';
var c= (a.concat(b));
var d= c.substr(5,3);//(5,3)start from after of 5 index and 3 take number of output of substring
console.log(d);
console.log(c.charAt(0));
console.log(c.startsWith('M'));
console.log(c.endsWith('i'));
console.log(c.toUpperCase());
var k= '  iuwhjgh    '
console.log(k.trim());
console.log(c.split(''));//Based on empty string
console.log(c.split(' '));//Based on space
// Find out string length without building method
var str= 'Masum Billah';
var length = 0;
while (true) {
    if (str.charAt(length)=== '') {
        break
    } else {
        length++
    }
}
console.log(length);
