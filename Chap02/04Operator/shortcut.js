var msg = "";
msg = msg || "Hello world!";
console.log(msg);

msg = msg === undefined ? "Hello world!" : msg;
console.log(msg);
