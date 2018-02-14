$(document).ready(function () {
    var movementStrength = 60;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();

    $(".move").each(function () {
        $(this).mousemove(function (e) {
            var pageX = e.pageX - ($(window).width() / 2);
            var pageY = e.pageY - ($(window).height() / 2);
            var newvalueX = width * pageX * -1 - 60;
            $(this).css("background-position", newvalueX + "px     " + 0 + "px");
        });
    });

    $('nav li a').each(function () {
        $(this).on('click', function () {
            $(this).parent().siblings().find('a').removeClass('active_underlined');
            $(this).addClass('active_underlined');
        });
    })

    $("body > div, body > section").mouseenter(function () {
        var id = $(this).attr('id');
        $('nav li a').removeClass('active_underlined');
        $("[href='#" + id + "']").addClass('active_underlined');
    });
});
