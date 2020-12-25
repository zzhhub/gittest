// import Slider from './slide.js'

// 二、【自动切换图片功能】（32分）

//     1、图片不管有几张，当打开页面或者刷新页面时，默认显示的图片均是第一张。

//     2、切换到哪一张图片，该图片所对应的小圆点的样式也跟随改变。

//     3、点击小圆点时，它所对应的图片显示。

//     4、鼠标移入图片区域，停止轮播。

//     5、鼠标移出图片区域，恢复自动轮播。

//     6、图片每隔1s切换一次。


// 二、【点击选项卡切换图片功能】（12分）

//     1、图片不管有几张，当打开页面或者刷新页面时，默认显示第一张图片，且对应的第一个选项卡设置激活样式（背景颜色为#0058AA，字体颜色为白色）。

//     2、当点击选项卡时，它所对应的图片显示。

//     3、被点击的选项卡背景颜色为#0058AA，字体颜色为白色。


// 三、【点击按钮或小圆点切换图片】（50分）

//     1、图片不管有几张，当打开页面或者刷新页面时，默认都是显示第二张图片，且对应的小圆点设置特殊样式。

//     2、图片一开始是没有自动轮播的，鼠标移出图片区域时，才开启自动轮播；鼠标移入图片区域，停止自动轮播。

//     3、左右按钮默认是隐藏的，鼠标移入图片区域时，按钮显示，移出时，按钮隐藏。

//     4、点击左边按钮，切换到上一张图片，对应的小圆点的样式要跟着改变。

//     5、当显示第一张图片时，再次点击左边按钮，会切换到最后一张图片。

//     6、点击右边按钮，切换到下一张图片，对应的小圆点的样式要跟着改变。

//     7、当显示最后一张图片时，再次点击右边按钮，会切换到第一张图片。

//     8、点击小圆点时，它所对应的图片显示。

//     9、图片每隔1s切换一次。


// const el = document.querySelector(".slider")
// const leftbtn = el.querySelector(".prev")
// const rightbtn = el.querySelector(".next")

// const s = new Slider(el, {
//     // 初始索引
//     initialIndex: 1,
//     // 切换时是否有动画
//     animation: true,
//     // 切换速度，单位 ms
//     speed: 1000
// })



import BaseSlider from './BaseSlider.js';
import ArrowSlider from './ArrowSlider.js';

// const slide1 = document.getElementById("slide1");
// const bs1 = new BaseSlider(slide1, { initialIndex: 0, autoComplate: true });


// const slide2 = document.getElementById("slide2");
// const bs2 = new BaseSlider(slide2, { initialIndex: 0, autoComplate: false });

const slide3 = document.getElementById("slide3");
const bs3 = new ArrowSlider(slide3, { initialIndex: 1, autoComplate: false });