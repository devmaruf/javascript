var rect = function(width,height){
    return {
        width: width,
        height: height,
        draw: function() {
            console.log('I am rect object');
            console.log('My Width is '+ this.width);
            console.log('My Height is '+ this.height);
        }
    }
}
var rect1= rect(400,500)
rect1.draw()
var rect1= rect(800,600)
rect1.draw()
var rect1= rect(20,40)
rect1.draw()