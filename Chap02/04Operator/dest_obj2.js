let book = {
    title: "JavaScriptReference",
    publish: "TechBook",
    price: 3000,
    other: { keyword: "JavaScript", log: "logo.jpg" },
};
let {
    title,
    other,
    other: { keyword },
} = book;
console.log(title);
console.log(other);
console.log(keyword);
