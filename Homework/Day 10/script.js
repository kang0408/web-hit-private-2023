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

// Calculate recommended food 
let calcRecFood;
dogs.forEach(function(dog) {
    calcRecFood = dog.weight ** 0.75 * 28;
    dog.recFood = +calcRecFood.toFixed(2);
});
dogs.forEach(function(dog) {
    console.log(dog);
});

// Find Sarah's dog
dogs.forEach(function(dog) {
    dog.owners.forEach(function(owner) {
        if (owner === "Sarah") {
            console.log("Found " + owner + "'s dog");
            if (dog.recFood > dog.curFood) 
                console.log("It eats too much!");
            else 
                console.log("It eats too little");
        }
    })
});

// Owner array has dog eats too much and too little
const ownersEatTooMuch = [];
const ownersEatTooLittle = [];
dogs.forEach(function(dog) {
    if (dog.recFood > dog.curFood) 
        ownersEatTooMuch.push(dog.owners);
    else 
    ownersEatTooLittle.push(dog.owners);
});

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

console.log(ownersEatTooMuch.flat().join(" and ") + "'s dogs eat too much!");
console.log(ownersEatTooLittle.flat().join(" and ") + "'s dogs eat too little!");


const exactlyRecFood = dogs.every(function(dog) {
    return dog.recFood === dog.curFood;
});
console.log("Have dog eats exactly recommended food?");
console.log(exactlyRecFood);

let tenPercentRecFood;
const enoughFood = dogs.some(function(dog) {
    tenPercentRecFood = dog.recFood * 10 / 100;
    const min = dog.recFood - tenPercentRecFood.toFixed(2);
    const max = dog.recFood + +tenPercentRecFood.toFixed(2);
    return (dog.curFood >= min && dog.curFood <= max);
});
console.log("Have dog eats enough recommended food?");
console.log(enoughFood);


const enoughFoodDogs = [];
dogs.forEach(function(dog) {
    tenPercentRecFood = dog.recFood * 10 / 100;
    const min = dog.recFood - tenPercentRecFood.toFixed(2);
    const max = dog.recFood + +tenPercentRecFood.toFixed(2);
    if (dog.curFood >= min && dog.curFood <= max) {
        enoughFoodDogs.push(dog);
    };
});
console.log("Dogs eat enough food: ");
console.log(enoughFoodDogs);

const newDogs = dogs;
// Cái này ảo ma quá =))
// newDogs.sort(function(a, b) {
//     return a.recFood - b.recFood;
// });
// console.log(newDogs);
// Sort increasing dogs by recommended amount of food
for (let i = 0; i < newDogs.length - 1; i++) {
    let m = i;
    for (let j = i + 1; j < newDogs.length; j++) {
        if (newDogs[j].recFood < newDogs[m].recFood) m = j;
    }

    if (m != i) {
        let obj = newDogs[i];
        newDogs[i] = newDogs[m];
        newDogs[m] = obj;
    }
}
console.log("Sort increasing dogs by recommended amount of food: ")
console.log(newDogs);
