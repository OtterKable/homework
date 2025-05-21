// 3. Create an array that is multi-dimensional (it has arrays as its value).
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/nest-one-array-within-another-array

function twoDimArray(x, y) {
    arr = [];
    for (i = 0; i < x; i++) {
        arr2 = [];
        for (j = 0; j < y; j++) {
            arr2.push(Math.ceil(Math.random() * 20));
        }
        arr.push(arr2);
    }
    return arr;
}

myArray = twoDimArray(5, 6);



// 4. Create a function that takes a multi-dimensional array as an argument and console.logs every value in that two-dimensional array using a for-loop inside a for-loop.
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/nesting-for-loops

function logArray(twoDimArray(5, 6)) {
    iLen = arr.length;
    for (i = 0; i < iLen; i++) {
        jLen = arr[i].length;
        for (j = 0; j < jLen; j++) {
            arr2.push(arr[i][j]);
        }
    }
    return arr2;
}

logArray(myArray);


// 5. Create a function that receives two numbers as arguments. The function should return whichever argument is the largest.
Finally, console.log the function passing in two numbers as arguments.
    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-greater-than-operator

max = (x,y) => Math.max(x,y);
console.log(max(8,13));

// 6. Create a function that receives two values as arguments. The function should return one string if the two values are equal, and a different string if the two values are different. You may either test for equality in value or for equality in value /and/ type. Finally console.log the function with two equal arguments, and then console.log the function with two arguments that are not equal.

function areEqual(x,y){
    x === y ? console.log('The values are equal!') : console.log('The values are different.');
}

areEqual(15,15);
areEqual(15,'15');

    // 7. Deploy your work to GitHub and submit a link to the repository as your answer to this assignment.

    // 8. Quiz