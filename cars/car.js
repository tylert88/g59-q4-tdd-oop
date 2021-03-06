module.exports = Car;

function Car({ mpg, gallons, odometer, trips }) {
  if (!(this instanceof Car)) {
    return new Car({ mpg, gallons, odometer, trips });
  }
  this.gallons = 0;
  this.odometer = 0;
  this.trips = [];
  this.mpg = 10;
}

// THIS WILL ADD GALLONS TO THE CAR
Car.prototype.fill = function(gallons) {
  this.gallons += gallons;
};

// THIS WILL:
// CALCULATE THE AMOUNT OF GALLONS USED WHILE DRIVING
// KEEP TRACK OF THE ODOMITER AS THE CAR DRIVES
// CALCULATES THE DISTANCE THE CAR HAS TRAVELED IN MILES
Car.prototype.drive = function(distance) {
  this.gallons -= distance / this.mpg;
  this.odometer += distance;
  this.trips.push(distance + " miles");
};
