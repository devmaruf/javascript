var Rect = function(width,height){
        this.width= width,
        this.height= height,
        this.draw= function() {
            console.log('I am rect object');
            console.log('My Width is '+ this.width);
            console.log('My Height is '+ this.height);
        }
}
var rect1 = new Rect(400,600)
rect1.draw()