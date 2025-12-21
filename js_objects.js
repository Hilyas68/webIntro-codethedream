let car = {

    "name" : "Toyota",
    "color" : "blue",
    "doors" : 4
};

// I have a ____ ____ with ___ doors 
console.log(`I have a ${car.color} ${car["name"]} with ${car.doors} doors`)

car.doors = 5;

console.log(`I have a ${car.color} ${car["name"]} with ${car.doors} doors`)

car.model = "camry";

console.log(`I have a ${car.color} ${car.model} ${car["name"]} car with ${car.doors} doors`)

for(let key in car) {
    console.log(key + " " + car[key]) ;
}

let vehicle = { ...car }
vehicle == car;

let stringCar = JSON.stringify(car);

console.log(typeof(stringCar));
console.log(stringCar);

console.log(JSON.stringify(car) == JSON.stringify(vehicle));




function Car(name, color){
let obj = {
 "name" : name,
 "color" : color,
 hasFourDoor: function () {
    return false;
 }
}; 

return obj;
}

let benz = new Car("Benz", "black");
console.log(benz);
console.log(benz.hasFourDoor())

delete car.model;

console.log(car);


const user = {
  name: "Tara",
  city: "New York"
  
}

const name = user.name;
const city = user.city;

console.log(`My names is ${name} and I live in ${city}`);

