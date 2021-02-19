var ary = ["JavaScript", "Ajax", "ASP.NET"];
console.log(delete ary[0]); // true
console.log(ary);

var obj = { x: 1, y: 2 };
console.log(delete obj.x); // true
console.log(obj.x); // undefined

var obj2 = { x: obj, y: 2 };
console.log(delete obj2.x); // true
console.log(obj);

var data1 = 1;
console.log(delete data1);
console.log(data1);

// data2 = 10;
// console.log(delete data2);
// console.log(data2); // Error
