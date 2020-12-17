// 先创建一个base.js文件，定义一个加法函数，之后将函数导出。

console.log(this);

function add(num1, num2) {
    return num1 + num2
}

export { add }