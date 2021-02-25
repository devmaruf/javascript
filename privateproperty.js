// var Rect = function(width,height) {
//     this.width = width
//     this.height = height
//     this.position = {
//         x: this.width,
//         y: this.height
//     }
//     this.printProperties= function() {
//         console.log('Rectangle width = '+this.width+' Rectangle height = '+this.height );
//     }
//     this.area=function() {
//         console.log('Rectangle Area = '+this.width*this.height);
//     }
//     this.range=function() {
//         console.log('Rectangle Range = '+ 2*(this.width+this.height) );
//     }
// }
// var rect= new Rect(400,600)
// rect.range()
// rect.area()
// //another
// var rect= new Rect(200,300)
// rect.range()
// rect.area()
//Private property and method define into this object
var Rect = function(width,height) {
    var position = {
        x: 50,
        y: 80
    }
    this.width = width
    this.height = height

    var printProperties= function() {
        console.log('Rectangle width = '+this.width+' Rectangle height = '+this.height );
    }
    Object.defineProperty(this,'printProperty',{
        get:function() {
            return printProperties;
          }
    
    })
    Object.defineProperty(this,'getPosition',{
        get:function() {
            return position;
          },
        set:function(value) {
             position = value;
          },
    
    })
    this.area=function() {
        console.log('Rectangle Area = '+this.width*this.height);
    }
    this.range=function() {
        console.log('Rectangle Range = '+ 2*(this.width+this.height) );
    }
}
var rect = new Rect(400,600)
rect.area()
rect.printProperty()
rect.position={
    x:10,
    y:40,
}
console.log(rect.getPosition);

