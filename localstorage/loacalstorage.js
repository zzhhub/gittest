let timeText = null;

// 初始化页面加载
if (localStorage.getItem("count") === null) {
    timeText = 1;
    localStorage.setItem("count", timeText);
} else {
    timeText = localStorage.getItem("count");
    timeText++;
    localStorage.setItem("count", timeText);
}

document.getElementById("times").innerHTML = localStorage.getItem("count");