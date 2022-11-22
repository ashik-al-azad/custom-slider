(function ($) {
    "use strict";

    //wow
    new WOW().init();

    // nivo-slider
    $("#slider").nivoSlider({
        pauseTime: 3000,
        controlNav: false,
        slices: 15,
        boxCols: 8,
        boxRows: 4,
        prevText: "<i class='bi bi-arrow-left-circle-fill'></i>",
        nextText: "<i class='bi bi-arrow-right-circle-fill'></i>",
    });

})(jQuery);