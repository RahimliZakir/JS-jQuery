$(document).ready(() => {

    let menu = $('.menu');


    $(menu).on('click', function () {

        let iFind = $(this).find('i');

        $(this).siblings().find('i').removeClass('fa-minus').addClass('fa-plus');

        if ($(iFind).hasClass('fa-plus')) {
            $(iFind).removeClass('fa-plus');
            $(iFind).addClass('fa-minus');
        }
        else {
            $(iFind).removeClass('fa-minus');
            $(iFind).addClass('fa-plus');
        }

    });

})