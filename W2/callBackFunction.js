const cars = [
  { make: "Toyota", yrsOld: 5, mileage: 92399 },
  { make: "Ford", yrsOld: 12, mileage: 255005 },
  { make: "Ferrari", yrsOld: 9, mileage: 12966 },
  { make: "Subaru", yrsOld: 9, mileage: 111266 },
  { make: "Toyota", yrsOld: 2, mileage: 41888 },
  { make: "Tesla", yrsOld: 3, mileage: 57720 },
];

// let wellDrivenCars = cars.filter(function (car) {
//   return car.mileage > 20000;
// });

let wellDrivenCars = cars.filter((car) => car.mileage / car.yrsOld > 20000);
wellDrivenCars.forEach((car) => console.log(car));
