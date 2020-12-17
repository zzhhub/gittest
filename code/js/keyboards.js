function keyMove(params) {
    document.addEventListener(
        'keyup',
        ev => {
            if (ev.keyCode === 37) {
                params.prev();
            } else if (ev.keyCode === 39) {
                params.next();
            }
        },
        false
    );
}

export { keyMove }