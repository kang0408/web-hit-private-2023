console.log('-----Câu 4-----');

function checkSymmetricNum(num) {
    let stringNum = num.toString();
    let lengthNum = stringNum.length;
    let flag;
    
    if (lengthNum == 1) 
        flag = false;
    else {
        let i = 0;
        while (i < lengthNum / 2) {
                if (stringNum[i] == stringNum[lengthNum-1]) 
                    flag = true;
                else 
                    flag = false;
                i++;
                lengthNum--;
        }
    }

    return flag;
}

console.log(checkSymmetricNum(121));
console.log(checkSymmetricNum(123));