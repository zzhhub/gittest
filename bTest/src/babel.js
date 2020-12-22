import "core-js/stable"

let name = 'Alex';
const age = 18;
console.log(name, age);

const add = (x, y) => x + y;
console.log(add(10, 20));

new Promise((resolve, reject) => {
    resolve('成功');
});
Array.from([1, 2]);
class Person {}