(function ($) {

    $.fn.slider = function () {

        let slider1 = $('.slider1');

        let slider2 = $('.slider2');

        let slider3 = $('.slider3');

        let img1 = $('.img1');

        let img2 = $('.img2');

        let img3 = $('.img3');

        let leftA = $('<a/>');
        $(this).append(leftA.addClass('leftA'));
        leftA.html('&#10094;')

        let rightA = $('<a/>');
        $(this).append(rightA.addClass('rightA'));
        rightA.html('&#10095;')

        $(leftA).on('click', function () {

            let indiki = $('#umumi > div.active');
            let evvelki = $(indiki).prev('div');

            if (evvelki.length == 0) {
                evvelki = $('.bolum:last-of-type')
            }

            indiki.removeClass('active');
            evvelki.addClass('active');

        });

        $(document).keydown(function (e) {
            if (e.keyCode == 37) {
                let indiki = $('#umumi > div.active');
                let evvelki = $(indiki).prev('.bolum');

                if (evvelki.length == 0) {
                    evvelki = $('.bolum:last-of-type')
                }

                indiki.removeClass('active');
                evvelki.addClass('active');
            }
        });

        $(rightA).on('click', function () {

            let indiki = $('#umumi > div.active');
            let sonraki = $(indiki).next('div');

            if (sonraki.length == 0) {
                sonraki = $('.bolum:first-of-type')
            }

            indiki.removeClass('active');
            sonraki.addClass('active');

        });

        $(document).keydown(function (e) {
            if (e.keyCode == 39) {
                let indiki = $('#umumi > div.active');
                let sonraki = $(indiki).next('.bolum');

                if (sonraki.length == 0) {
                    sonraki = $('.bolum:first-of-type')
                }

                indiki.removeClass('active');
                sonraki.addClass('active');
            }
        });


        return this;
    };

}(jQuery));
