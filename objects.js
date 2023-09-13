let car = {
  name: "BMW",
  model: 500,
  wight: "890 KG",
  color: "black",

  start: function () {
    console.log("car is started");

  },

  drive: function () {
    console.log("car was driving");
  },
};

/// get a car properties value with in two way

console.log(car.name);
console.log(car.wight);
console.log(car["name"]);
console.log(car["wight"]);

let x = car.start();

