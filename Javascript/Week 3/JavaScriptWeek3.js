console.log('<-----1----->');
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
myString = myString.replace(/,/g ,' ');
console.log(myString);
console.log('<-----2---->');
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);
console.log('Adding meerkat animal in a spesific place in the array');
favoriteAnimals.splice(1,0,"meerkat");
console.log(favoriteAnimals);
console.log('The length of the array is: '+ favoriteAnimals.length);
console.log('Deleting giraffe from the array cause Jason doesn\'t like it');
delete favoriteAnimals[3];
console.log(favoriteAnimals);
console.log('The array has an empty slot now,not cool. Let\'s fix that');
let tempArrayHelper = [];
for(let i = 0; i<favoriteAnimals.length; i++){
    if(favoriteAnimals[i] != undefined){
        tempArrayHelper.push(favoriteAnimals[i])
    }
}
favoriteAnimals = tempArrayHelper;
console.log(favoriteAnimals);
console.log('Finding the index of meerkat:');
function findIndexInArray(anArray,element){
    for(let i = 0; i<anArray.length; i++){
        if(anArray[i] === element){
            return i;
        }
    }
}
console.log('The item you are looking for is at index: ');
console.log(findIndexInArray(favoriteAnimals,"meerkat"));
console.log('<-------------->');
console.log('More javascript');
//              1
function addThreeNumbers(number1,number2,number3){
    return (number1 + number2 + number3)
}
console.log(addThreeNumbers(5,6,7));
//              2
function colorCar(color){
    console.log("A " + color + " car");
}
colorCar('black');
//              3
myObject = {
    name:"Kostas",
    surname:"Kostakis",
    age:"12",
    height:"1.6m"
}
function printObject(object){
    console.log(JSON.stringify(object));
    console.log(object);
}
printObject(myObject);
//             4
function vehicleType(color,type){
    if(type === 1){
        console.log('A ' + color + " car");
    }else if(type === 2){
        console.log('A ' + color + " motorbike");
    }
}
vehicleType("black",1);
vehicleType("red",2);
//             5
console.log((3===3) ?  "yes" : "no");
console.log((3===2) ?  "yes" : "no");
//             6
function vehicle(color,type,age){
    if(type === 1){
        if(age === 0){
            console.log('A ' + color + " brand new car");
        }else{
            console.log('A ' + color + " used car");
        }
        
    }else if(type === 2){
        if(age === 0){
            console.log('A ' + color + " brand new motorbike");
        }else{
            console.log('A ' + color + " used motorbike");
        }
    }
}
vehicle("blue", 1, 5);
//             7
let vehicleList = ["motorbike","caravan","bike"];
//             8
console.log(vehicleList[2]);
//             9
function vehicle(color,type,age){
    if(type === 1){
        if(age <= 1){
            console.log('A ' + color + " new motorbike");
        }else{
            console.log('A ' + color + " used motorbike");
        }
        
    }else if(type === 2){
        if(age <= 1){
            console.log('A ' + color + " new caravan");
        }else{
            console.log('A ' + color + " used caravan");
        }
    }else if(type === 3){
        if(age <= 1){
            console.log('A ' + color + " new bike");
        }else{
            console.log('A ' + color + " used bike");
        }
    }
}
vehicle("green", 3, 1)