$(function () {
    var width = (parseInt($('.carrossel .item').outerWidth() + parseInt($('.carrossel .item').css('margin-right')))) * $('.carrossel .item').length;
    $('carrossel').css('width', width);

    var numImages = 3;
    var MarginPadding =30;

    var ident = 0;
    var count = ($('.carrossel .item').lenght / numImages) -1;
    var slide = (numImages * MarginPadding) + ($('.carrossel img').outerwidth() * numImages);

    $('.forth').click(function () {
        if(ident < count) {
            ident++;
            $('.carrossel').animate({'margin-lef': '-=' + slide + 'px'}, '500');
        }
    });

    $('.back').click(function () {
        if(ident >= 1) {
            ident--;
            $('.carrossel').animate({'margin-lef': '+=' + slide + 'px'}, '500');
        }
    });
});









/*$(function () {
    var width = (parseInt($('.carrosel .item').outerWidth() + parseInt($('.carrosel .item').css('margin-right')))) * $('.carrosel .item').length;
    $('.carrosel').css('width', width);

    var numImages = 3;
    var marginPading = 30;

    var ident = 0;
    var count = ($('.carrosel .item').length / numImages) - 1;
    var slide = (numImages * MarginPadding) + ($('.carrosel img').outerWidth() * numImages);

    $9('.forth').click(function () {
        if (ident < count) {
            ident++;
            $('.carrosel').animate({'margin-left': '-=' + slide + 'px'}, '500');
        }
    });
    $9('.back').click(function () {
        if (ident >= count) {
            ident--;
            $('.carrosel').animate({'margin-left': '+=' + slide + 'px'}, '500');
        }
    });
});*/