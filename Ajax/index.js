// localStorage封装
let localStorage = window.localStorage;
// set
const set = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
    console.log(localStorage);
}

// get
const get = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

// remove
const remove = (key) => {
    localStorage.removeItem(key);
    console.log(localStorage);
}

// clear
const clear = () => {
    localStorage.clear();
    console.log(localStorage);
}

export {set, get, remove, clear }