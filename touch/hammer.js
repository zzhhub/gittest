const box = document.getElementById("box");

const hammer = new Hammer(box);
hammer.on("swipe swipeleft swiperight pan panleft panright tap doubletap press pinch rotate", function(ev) {
    console.log(ev.type);
    box.innerText = `${ev.type}事件被触发`;
})