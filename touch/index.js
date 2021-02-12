const box = document.getElementById('box');
const start = document.getElementById('start');
const move = document.getElementById('move');
const end = document.getElementById('end');
const up = document.getElementById('up');

let curpoint = {
    x: 0,
    y: 0
}

box.addEventListener('touchstart', handleStart, false);
box.addEventListener('touchmove', handleMove, false);
box.addEventListener('touchend', handleEnd, false);

up.addEventListener('click', function() {
    handlemove(this, -10 + curpoint.x, -10 + curpoint.y);
    curpoint.x += -10;
    curpoint.y += -10;
}, false)


function handlemove(el, x, y) {
    x = x || 0;
    y = y || 0;

    el.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)';
}

function handleStart(event) {
    // console.log("touch start", event);
    box.style.backgroundColor = 'green';
    const changedTouch = event.changedTouches[0];
    start.innerHTML = `touch的开始位置：(${changedTouch.pageX},${changedTouch.pageY})`;
}

function handleMove(event) {
    // console.log("touch move", event);
    box.style.backgroundColor = 'blue';
    const changedTouch = event.changedTouches[0];
    move.innerHTML = `touch的移动位置：(${changedTouch.pageX},${changedTouch.pageY})`;

}

function handleEnd(event) {
    // console.log("touch end", event);
    box.style.backgroundColor = 'pink';
    const changedTouch = event.changedTouches[0];
    end.innerHTML = `touch的结束位置：(${changedTouch.pageX},${changedTouch.pageY})`;
}