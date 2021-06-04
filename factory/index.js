const gadgetFactory = require("./gadgetFactory");

const myLaptop = gadgetFactory.createGadget("Laptop", {
  ram: 8,
  hdd: 256,
  name: "Lenovo Gaming 3i",
});

const myTablet = gadgetFactory.createGadget("Tablet", {
  ram: 4,
  hdd: 128,
  name: "Apple Ipad 4",
  network: "5G",
});

console.log(myLaptop);
console.log(myTablet);
