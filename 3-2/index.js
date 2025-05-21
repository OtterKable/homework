var x = 13.8
var y = 19.2

addNums(x,y);
diffNums(x,y);
multNums(x,y);
divNums(x,y);


console.log([['x',x],['y',y]]);


function addNums(x,y){
    return x + y;
}

function diffNums(x,y){
    return x - y;
}

function multNums(x,y){
    return x * y;
}

function divNums(x,y){
    return x / y;
}

