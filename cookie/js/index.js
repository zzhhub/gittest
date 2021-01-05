import {set, get, remove } from './cookie.js'

const input = document.getElementById("username");
const reg = document.getElementById("reg");
const del = document.getElementById("remove");

// 读取已有cookie
const user = get("user");
if (user !== undefined) {
    input.value = user;
}

// 登录
reg.addEventListener("click", function() {
    const inputText = input.value;
    console.log(inputText);

    if (inputText !== "" && inputText !== 'undefined' && inputText !== 'null') {
        // 设置cookie
        set('user', inputText, { maxAge: 7 * 24 * 3600 })
    }
    window.location = "cookie.html"

})

// 删除
del.addEventListener("click", function() {
    const inputText = input.value;
    console.log(inputText);

    if (inputText !== "" || inputText !== 'undefined' || inputText !== 'null') {
        // 删除cookie
        if (inputText === user) {
            remove("user")
        }
    }
    window.location = "cookie.html"

})