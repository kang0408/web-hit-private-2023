console.log('-----Câu 6-----');

function findMin(a, b) {
    let result;

    if (a > b) result = b;
    else result = a;

    return result;
}

function findMax(a, b) {
    let result;

    if (a > b) result = a;
    else result = b;

    return result;
}

function findUCLN(a, b) {
    let min = findMin(a, b);
    let result = 1;

    for (let i = 2; i <= min; i++) {
        if (a % i == 0 && b % i == 0) 
            result = i;
    }

    return result;
}

function findBCNN(a, b) {
    let result;
    if (a % b == 0) result = a;
    else if (b % a == 0) result = b;
    else {
        result = a * b;
    }
    return result;
}

let a = findUCLN(10,20);
let b = findBCNN(10,20);

console.log(a + ', ' + b);