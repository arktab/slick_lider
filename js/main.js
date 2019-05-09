'use strict';

(function ($) {
    $(document).ready(function () {
        // Code

        $('.autoplay').slick({
            infinite: true,
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3
        });
    });
})(jQuery);
