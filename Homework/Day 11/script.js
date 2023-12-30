let arr = [5, 3, 7, 2, 4];

// My Reduce
function myReduce(arr, callBack, inititalVal) {
    let total;
    // Không giá trị ban đầu
    if (inititalVal === undefined) {
        total = arr[0];
        for (let i = 1; i < arr.length; i++) {
            total = callBack(total, arr[i]);
        }
    } 
    // Có giá trị ban đầu
    else {
        total = inititalVal;
        for (let i = 0; i < arr.length; i++) {
            total = callBack(total, arr[i]);
        }
    }
    return total;
    
}
console.log(myReduce(arr, (total, curValue) => total += curValue, 0));

// My Find
function myFind(arr, callBack) {
    for (let i = 0; i < arr.length; i++) {
        if (callBack(arr[i])) return arr[i];
    }
}
console.log(myFind(arr, (x) => x % 2 == 0));

// My Sort
function mySort(arr, callBack) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (callBack(arr[j], arr[j+1]) > 0) {
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
    return arr;
}
console.log(mySort(arr, (a, b) => a - b));