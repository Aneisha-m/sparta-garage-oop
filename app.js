/*function Car(){} //car constructor //4 properties
class Garage //4 properties
method called car builder which takes in arguments
output in the console. 
*/

//===Constructor Function


function Car(country, model, make, color){
    this.country = country;
    this.model = model;
    this.make = make;
    this.color = color;
    
}

class Garage{
    constructor(name, location, size, owner){
        this.name = name;
        this.location  = location;
        this.size = size;
        this.owner = owner;
        this.cars = [];
    }
    carBuilder(country, model, make, color){
        const newCar = newCar(country, model, make, color);
        this.cars.push(newCar)
    }
}

const newGarage = new Garage

newGarage.carBuilder("England","AMG","Merc", "red");
newGarage.carBuilder("England","","Bentley",);
console.log(newGarage.cars);
console.log(newGarage)