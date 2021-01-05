// import {set, get, remove } from './cookie21.js';

// set('name', 'alex');
// set('username', 'alex');
// set('age', 18);
// set('用户名', '张三');
// set('sex', 'male', { maxAge: 30 });

// show(get("age"));
// show(get("用户名"));

// function show(name) {
//     console.log(name);
// }

// show(remove("name"))
// show(remove("用户名"))

// localStorage
localStorage.setItem("name", "lili")
localStorage.setItem("age", 18)

console.log(localStorage.getItem("name"));

localStorage.removeItem("name");
console.log(localStorage.getItem("name"));

console.log(localStorage.length);

console.log(localStorage.key("age") === 'age');

localStorage.clear()
console.log(localStorage);