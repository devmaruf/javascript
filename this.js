var rect = {
    width: 10,
    height: 10,
    draw: function() {
        console.log('I am rect object');
        this.printProperties()
    },
    printProperties: function() {
        console.log('My Width is '+ this.width);
        console.log('My Height is '+ this.height);
    }
}
rect.draw()
rect.draw()
//
function print() {
    console.log(this);
}
print()
//
function propertiesPrint() {
    rect.printProperties()
}
propertiesPrint()

