console.log('-----Câu 2-----');

function isTriangle(a, b, c) {
    if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a)
        console.log(true);
    else   
        console.log(false);
}

isTriangle(3, 4, 5);
isTriangle(3, 4, 8);