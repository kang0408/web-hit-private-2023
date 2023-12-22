// 1.
console.log("------Bai 1-----");
let obj1 = {
    fullName: "Nguyễn Văn A",
    height: 1.7, // m
    weight: 55, // kg
    calcBMI: function() {
        return this.weight / (this.height * this.height);
    }
};

let obj2 = {
    fullname: "Trần Thị B",
    height: 1.65, // m
    weight: 48, // kg
    calcBMI: function() {
        return this.weight / (this.height * this.height);
    }
}


console.log(`BMI obj1: ${obj1.calcBMI()}`);
console.log(`BMI obj2: ${obj2.calcBMI()}`);
if (obj1.calcBMI() > obj2.calcBMI()) console.log(true);
else console.log(false);

// 2.
console.log("------Bai 2-----");
function arrayNum(num) {
    let arrayNum = [];
    num += 1;
    while (num > 0) {
        m = num % 10;
        arrayNum.push(m);
        num = Math.floor(num / 10);
    }
    return arrayNum.reverse();
}

console.log(arrayNum(1234));
console.log(arrayNum(123456789));

// 3.
console.log("------Bai 3-----");
function sumInt(arrNum, target) {
    let arr = []
    for (let i = 0; i < arrNum.length - 1; i++) 
        for (let j = i + 1; j < arrNum.length; j++) 
            if (arrNum[i] + arrNum[j] == target) {
                arr.push(`[${i}, ${j}]`);
                break;
            }
    
    return arr;
}

console.log(sumInt([2, 7, 11, 15], 9));
console.log(sumInt([3, 2, 4], 6));
console.log(sumInt([4, 2, 5, 8, 1, 2], 6));

// 4.
console.log("------Bai 4-----");

function pascalRectangle(num) {
    let mainArr = [];
    let arrA = [];
    for (let i = 0; i < num; i++) {
        if (i == 0) {
            arrA.push(1);
            console.log(arrA);
            mainArr.push(`[${arrA}]`);
        }
        else if (i == 1) {
            arrA.push(1);
            console.log(arrA);
            mainArr.push(`[${arrA}]`);
        } 
        else {
            let arrB = [];
            for (let i = 0 ; i < arrA.length - 1; i++) {
                arrB.push(arrA[i] + arrA[i+1]);
            }
            arrB.push(1);
            arrB.unshift(1);
            console.log(arrB);
            arrA = arrB;
            mainArr.push(`[${arrA}]`);
        }
    }
    return mainArr;
}

console.log(pascalRectangle(8));

// 5.
console.log("------Bai 5-----");
function formatArr(arrNum) {
    let zeroArr = [];

    for (let i = 0; i < arrNum.length; i++) 
        if (arrNum[i] === 0) {
            zeroArr.push(arrNum[i]);
            arrNum.splice(i, 1);
            i--;
        }
    return arrNum.concat(zeroArr);
}

console.log(formatArr([0,0,0,21,3,0,0,5]));
console.log(formatArr([0]));