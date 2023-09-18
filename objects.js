let car = {
  name: "BMW",
  model: 500,
  wight: "890 KG",
  color: "black",

  start: function () {
    console.log("car is started");
    this.drive();
  },

  drive: function () {
    console.log("car has driving");
  },

  stop: function () {
    console.log("car was stoped");
  },
};

/// get a car properties value with in two way

console.log(car.name);
console.log(car.wight);
console.log(car["name"]);
console.log(car["wight"]);


car.start();

car.stop();



