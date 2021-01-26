const box = document.getElementById("box");
const clientW = document.body.offsetWidth;
const clientH = document.body.offsetHeight;
const boxW = box.offsetWidth;
const boxH = box.offsetHeight;
const maxMoveWidth = clientW - boxW;
const maxMoveHeight = clientH - boxH;

drag(box, {
    x: true,
    y: true
})

function drag(el, options) {
    options.x = typeof options.x !== 'undefined' ? options.x : true;
    options.y = typeof options.y !== 'undefined' ? options.y : false;

    if (!options.x && !options.y) return;

    var curPoint = {
        x: 0,
        y: 0
    };
    var startPoint = {};
    var isTouchMove = false;

    el.addEventListener('touchstart', handleStart, false);
    el.addEventListener('touchmove', handleMove, false);
    el.addEventListener('touchend', handleEnd, false);

    function handleStart(ev) {
        var touch = ev.changedTouches[0];

        startPoint.x = touch.pageX;
        startPoint.y = touch.pageY;
    }

    function handleMove(ev) {
        ev.preventDefault();


        isTouchMove = true;

        var touch = ev.changedTouches[0];
        var diffPoint = {};
        var movePoint = {
            x: 0,
            y: 0
        };

        diffPoint.x = touch.pageX - startPoint.x;
        diffPoint.y = touch.pageY - startPoint.y;

        if (options.x) {
            movePoint.x = diffPoint.x + curPoint.x;
            if (movePoint.x < 0) {
                movePoint.x = 0;
            }
            if (movePoint.x > maxMoveWidth) {
                movePoint.x = maxMoveWidth;
            }
        }
        if (options.y) {
            movePoint.y = diffPoint.y + curPoint.y;
            if (movePoint.y < 0) {
                movePoint.y = 0;
            }
            if (movePoint.y > maxMoveHeight) {
                movePoint.y = maxMoveHeight;
            }
        }
        move(el, movePoint.x, movePoint.y);
    }

    function handleEnd(ev) {
        if (!isTouchMove) return;

        var touch = ev.changedTouches[0];

        curPoint.x += touch.pageX - startPoint.x;
        curPoint.y += touch.pageY - startPoint.y;
        isTouchMove = false;
    }

    function move(el, x, y) {
        x = x || 0;
        y = y || 0;
        el.style.transform = 'translate3d(' + x + 'px, ' + y + 'px, 0)';
    }
}