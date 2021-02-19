let book = { title: "JSReference", Publish: "Tech出版社", price: 3000 };
let { price, title, memo = "なし" } = book;

console.log(title);
console.log(price);
console.log(memo);
