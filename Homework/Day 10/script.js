// Bai 1
console.log("-----Bai 1-----");
const ageArrOfCat = [1, 5, 3, 2, 4 , 7];
const ageArrOfHuman = [];

ageArrOfCat.forEach(function(a) {
    if (a <= 2) ageArrOfHuman.push(a * 2);
    else ageArrOfHuman.push(a * 4 + 16);
});
console.log(ageArrOfHuman);

const adultArr = ageArrOfHuman.filter(function(a) {
    return a >= 18;
});
console.log(adultArr);

let sum = 0;
let cnt = 0;
const sumAge = adultArr.forEach(function(a) {
    sum += a;
    cnt++;
});
console.log("Average of adult's age: " + (sum / cnt));

// Bai 2
console.log("-----Bai 2-----");
const dogs = [
    { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
    { weight: 8, curFood: 200, owners: ["Matilda"] },
    { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
    { weight: 32, curFood: 340, owners: ["Michael"] },
  ];

// Hãy tính lượng thức ăn recommended và lưu thành 1 thuộc tính (recFood) cho từng chú chó
let calcRecFood;
dogs.forEach(function(dog) {
    calcRecFood = dog.weight ** 0.75 * 28;
    dog.recFood = +calcRecFood.toFixed(2);
});
dogs.forEach(function(dog) {
    console.log(dog);
});


// Tìm chú chó của Sarah và in ra console nếu nó ăn quá nhiều hoặc quá ít
const findSarahDog = dogs.find(function(dog) {
    return dog.owners.includes("Sarah");
});
if (findSarahDog.curFood > findSarahDog.recFood * 1.1) console.log("Sarah's dog eats too much!");
if (findSarahDog.curFood < findSarahDog.recFood * 0.9) console.log("Sarah's dog eats too little!");


// Tạo một mảng chứa tất cả chủ nhân của những chú chó ăn quá nhiều (ownersEatTooMuch) 
// và một mảng chứa tất cả chủ nhân của những chú chó ăn quá ít (ownersEatTooLittle)
const ownersEatTooMuch = [];
const ownersEatTooLittle = [];
let minFood = 0;
let maxFood = 0;
dogs.forEach(function(dog) {
    minFood = dog.recFood * .9;
    maxFood = dog.recFood * 1.1;
    if (dog.curFood > maxFood) ownersEatTooMuch.push(dog.owners);
    if (dog.curFood < minFood) ownersEatTooLittle.push(dog.owners);
});
console.log(ownersEatTooMuch.flat());
console.log(ownersEatTooLittle.flat());

// Từ 2 mảng trên hãy in ra A and B and C's dogs eat too much! và D and E and F's dogs eat too little!
console.log(ownersEatTooMuch.flat().join(" and ") + "'s dogs eat too much!");
console.log(ownersEatTooLittle.flat().join(" and ") + "'s dogs eat too little!");

// In ra consle xem có chú chó nào ăn CHÍNH XÁC lượng thức ăn được recommended hay không (chỉ in true hoặc false)
const exactlyRecFood = dogs.every(function(dog) {
    return dog.recFood === dog.curFood;
});
console.log("Have dog eats exactly recommended food?");
console.log(exactlyRecFood);

// In ra consle xem có chú chó nào ăn ĐỦ lượng thức ăn hay không (chỉ in true hoặc false)
const enoughFood = dogs.some(function(dog) {
    minFood = dog.recFood * .9;
    maxFood = dog.recFood * 1.1;
    return (dog.curFood >= minFood && dog.curFood <= maxFood);
});
console.log("Have dog eats enough recommended food?");
console.log(enoughFood);

// Tạo một mảng chứa những chú chó ăn đủ lượng thức ăn
const enoughFoodDogs = dogs.filter(function(dog) {
    minFood = dog.recFood * .9;
    maxFood = dog.recFood * 1.1;
    return dog.curFood >= minFood && dog.curFood <= maxFood;
});
console.log("Dogs eat enough food: ");
console.log(enoughFoodDogs);

// Tạo một mảng shallow copy từ mảng đã cho và sắp xếp tăng dần theo lượng thức ăn recommended
const newDogs = dogs;
newDogs.sort(function(a, b) {
    return a.recFood - b.recFood;
});
console.log("Sort increasing dogs by recommended amount of food: ")
console.log(newDogs);
