
class ParkingLot {
  // Add the methods here
  constructor(slots) {
    this.slots = this.makeSlots(slots);
  }

  makeSlots(slots) {
    const garage = []
    for (let i = 0; i < slots; i++) {
      garage.push({ slot: i, carId: null });
    }
    return garage;
  }

  park(carId) {
    for (const car of this.slots) {
      if (car.carId === null) {
        car.carId = carId;
        return true;
      }
    }
    return false
  }

  getSlots() {
    return this.slots.map(data => data.carId);
  }

  remove(carId) {
    for (const car of this.slots) {
      if (car.carId === carId) {
        car.carId = null;
        return true
      }
    }
    return false;
  }
}

const myGarrage = new ParkingLot(5);
myGarrage.park("car-12");
myGarrage.park("car-13");
myGarrage.remove("car-13");
console.log(myGarrage.getSlots());