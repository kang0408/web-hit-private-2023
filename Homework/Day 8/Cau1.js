console.log('-----Câu 1-----');

function findMax(a, b, c) {
    if (a > b && a > c) 
        console.log(a);
    else if (b > c)
        console.log(b);
    else
        console.log(c);
}

findMax(1, 2, 3);
findMax(3, 4, 5);
findMax(3, 4, 8);