
var a = 5;
var b = 6;
const y = { a: 1, b: 2, add: () => { return this.a + this.b } }
console.log(y.add()); 