(function() {
    'use strict'

    let view = document.documentElement;

    const viewport = document.querySelector('meta[name="viewport"]');
    const maxWidth = 540;
    const minWidth = 320;

    let dpr = window.devicePixelRatio || 1;
    dpr = dpr >= 3 ? 3 : (dpr >= 2 ? 2 : 1);

    view.setAttribute('data-dpr', dpr);
    view.setAttribute('max-width', maxWidth);
    view.setAttribute('min-width', minWidth);

    const scale = 1 / dpr;

    const content = `width=device-width, initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}, user-scalable=no`;

    if (viewport) {
        viewport.setAttribute('content', content);
    } else {
        viewport = document.createElement('meta');
        viewport.setAttribute('name', 'viewport');
        viewport.setAttribute('content', content);

        document.head.appendChild(viewport);
    }

    setRemUnit();

    window.onresize = setRemUnit;

    // 动态获取视口宽度
    function setRemUnit() {
        let vieWidth = view.getBoundingClientRect().width || window.innerWidth;
        // console.log(vieWidth);

        const RATIO = 18.75;

        // console.log(vieWidth);
        if (maxWidth && (vieWidth / dpr > maxWidth)) {
            vieWidth = maxWidth * dpr;
        } else if (minWidth && (vieWidth / dpr < minWidth)) {
            vieWidth = minWidth * dpr;
        }

        view.style.fontSize = vieWidth / RATIO + 'px';
    }

    // 动态设置 viewport content参数


    // dpr->scale = 1 / dpr





})()