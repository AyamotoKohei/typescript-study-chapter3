let list = ["this", "is", "a", "test"];

list.push("!");
console.log(list);

list = list.map((item) => item.toUpperCase());
console.log(list);

let message = list.reduce((prev, current) => `${prev} ${current}`);
console.log(message);
