import {set, get, remove, clear } from './index.js'

// set("name", "mili");

const options = {
    "id": 1,
    "name": "就看见"
}

set("choose", options)

const option = {
    id: 2,
    name: "WikY"
}

set("data", option)

console.log(get("data"));

remove("data");

clear()