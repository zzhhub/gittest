const swiper = new Swiper('#swiper', {
    // loop: true,
    onSlideChangeStart: function(swiper) {
        let index = swiper.activeIndex;
        $("#tabs .tab-item").removeClass("tab-item-active");
        $("#tabs .tab-item").eq(index).addClass("tab-item-active");
    }
});



$("#tabs .tab-item").click(function() {
    let index = $(this).index();
    $("#tabs .tab-item").removeClass("tab-item-active");
    $(this).addClass("tab-item-active");
    swiper.swipeTo(index);
})