// swiper
// const swiper = new Swiper('#swiper', {
//     autoplay: 2000,
//     mode: 'horizontal',
//     loop: true,
//     speed: 500,
// });

// progress
// const swiper = new Swiper('#swiper', {
//         autoplay: 2000,
//         mode: 'horizontal',
//         loop: true,
//         speed: 500,
//         progress: true,
//         onProgressChange: function(swiper) {
//             for (var i = 0; i < swiper.slides.length; i++) {
//                 var slide = swiper.slides[i];
//                 var progress = slide.progress;
//                 var translate, boxShadow;
//                 if (progress > 0) {
//                     translate = progress * swiper.width;
//                     boxShadowOpacity = 0;
//                 } else {
//                     translate = 0;
//                     boxShadowOpacity = 1 - Math.min(Math.abs(progress), 1);
//                 }
//                 slide.style.boxShadow = '0px 0px 10px rgba(0,0,0,' + boxShadowOpacity + ')';
//                 swiper.setTransform(slide, 'translate3d(' + (translate) + 'px,0,0)');
//             }
//         },
//         onTouchStart: function(swiper) {
//             for (var i = 0; i < swiper.slides.length; i++) {
//                 swiper.setTransition(swiper.slides[i], 0);
//             }
//         },
//         onSetWrapperTransition: function(swiper, speed) {
//             for (var i = 0; i < swiper.slides.length; i++) {
//                 swiper.setTransition(swiper.slides[i], speed);
//             }
//         }
//     })
//     // Set Z-Indexes
// for (var i = 0; i < swiper.slides.length; i++) {
//     swiper.slides[i].style.zIndex = i;
// }

// 3d FLOW

// const swiper = new Swiper('#swiper', {
//     autoplay: 2000,
//     mode: 'horizontal',
//     loop: true,
//     speed: 500,
//     tdFlow: {
//         rotate: 60,
//         stretch: 0,
//         depth: 100,
//         modifier: 1,
//         shadows: true
//     }
// });

const swiper = new Swiper('#swiper', {
    autoplay: 2000,
    mode: 'horizontal',
    loop: true,
    speed: 500,
    scrollbar: {
        container: '#swiper-scrollbar',
        draggable: true,
        hide: true,
        snapOnRelease: true
    }
});