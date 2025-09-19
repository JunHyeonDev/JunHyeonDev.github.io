$(document).ready(() => {
    // 헤더 색상 수정
    $("body").on("mousewheel", (e) => {
        var wheel = $(window).scrollTop();
        if (wheel > 0) {
            $('#header').css('background-color', 'rgba(255, 255, 255, 1)')
            $('#toTop').css('opacity', '1')
            $('#toTop').css('pointer-events', 'auto')
        } else {
            $('#header').css('background-color', 'rgba(255, 255, 255, 0)')
            $('#toTop').css('opacity', '0')
            $('#toTop').css('pointer-events', 'none')
        }
    });

    //백 투 탑
    $("#toTop").click(function () {
        $('#header').css('background-color', 'rgba(255, 255, 255, 0)')
        $("html, body").animate({scrollTop: 0}, 1000);
        $('#toTop').css('opacity', '0')
        $('#toTop').css('pointer-events', 'none')
    });
})