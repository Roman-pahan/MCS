

const sneaker = { brand: "adidas YEEZY", model: "Boost 700" }; 

const details = { version: 2, color: "Tephra" }; 

const sneakerDetails = {...sneaker, ...details};


const {brand, ...short} = sneakerDetails;
console.log(sneakerDetails)
console.log(short)
console.log(brand)

const obj1 = { color1:"yellow" ,color2: "brown",color3: "black",color4: "red", color5:"pink"}
const {color1, ...obj2} = obj1
const obj3 = Object.values(obj2)
const obj4 = obj3.join(", ")

console.log(obj4)
console.log(typeof obj4);




