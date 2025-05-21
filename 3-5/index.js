function add(x, y) {
    z = x + y;
    console.log(z);
    return z;
}

add2 = (x,y) => x+y;

function subtract(x, y) {
    z = x - y;
    console.log(z);
    return z;
}

subtract2 = (x,y) => x-y;

function multiply(x, y) {
    z = x * y;
    console.log(z);
    return z;
}

multiply2 = (x,y) => x*y;

function divide(x, y) {
    z = x / y;
    console.log(z);
    return z;
}

divide2 = (x,y) => x/y;


var littleCar2 = {
    maxSpeed: 70,
    driver: 'Wario',
    drive: function(speed,time){
        console.log('distance is ' + speed * time + ' miles')
    }
}
