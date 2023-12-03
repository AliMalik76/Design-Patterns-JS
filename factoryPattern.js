function VehicleFactory(){
	this.createVehicle = function(type, {make,color,displacement}){
  	switch(type){
  	case 'car':
    	return new Car(make,color,displacement)
    case 'bike':
    	return new Bike(make,color,displacement)
  	}
  }
	
}

class Car{
  constructor(make, color, displacement){
    this.make = make
    this.color = color
    this.displacement = displacement
  }
  drive(){
    console.log(`driving ${this.make} car whose color is ${this.color} having displacement ${this.displacement}cc`)
  }
}

class Bike{
  constructor(make, color, displacement){
    this.make = make
    this.color = color
    this.displacement = displacement
  }
  drive(){
    console.log(`driving ${this.make} bike whose color is ${this.color} having displacement ${this.displacement}cc`)
  }
}

const vehicleFactory = new VehicleFactory()
let myNewCar = vehicleFactory.createVehicle('car', {make:'Honda', color:'Green', displacement:660})
myNewCar.drive()

let myNewBike = vehicleFactory.createVehicle('bike', {make:'Suzuki', color:'Red', displacement:150})
myNewBike.drive()


