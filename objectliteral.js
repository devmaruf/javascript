var rect = {
    width: 10,
    height: 10,
    draw: function() {
        console.log('I am rect object');
        console.log('My Width is '+ this.width);
        console.log('My Height is '+ this.height);
    }
}
rect.draw()
rect.height= 500;
rect.draw()