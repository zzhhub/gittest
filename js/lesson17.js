import Slider from './slide.js'

const el = document.querySelector(".slider")
const leftbtn = document.querySelector(".left")
const rightbtn = document.querySelector(".right")

const s = new Slider(el, {
    // 初始索引
    initialIndex: 1,
    // 切换时是否有动画
    animation: true,
    // 切换速度，单位 ms
    speed: 2000
}, leftbtn, rightbtn)