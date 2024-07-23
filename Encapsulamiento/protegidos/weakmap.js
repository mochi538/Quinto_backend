let weak = new WeakMap();
let obj = {};
weak.set(obj, "Valor del weak");
console.log(weak.get(obj))