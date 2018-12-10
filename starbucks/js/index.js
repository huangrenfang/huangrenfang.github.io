$(function () {
    var w = $('#content .banner img').width();
    var nowIndex=1;
    var timer;
    var speed = 1500;
    // console.log(w);
    $('.header_li_5').on('click',function () {
        // console.log(123);
        $('.overlay').addClass('active');
    });
    $('.close').on('click',function () {
        $('.overlay').removeClass('active');
        return false;
    });
    $('#bnt').on('click',function () {
        if(nowIndex == 4){
            nowIndex=1;
            $('#content .banner').css({
                transition:'none',
                transform:'translateX(0)'
            })
        }else{
            $('#content .banner').css({
                transition:'transform .8s ease',
                transform:'translateX(-'+w*(nowIndex)+'px)'
            });
            nowIndex++;
        }
    });
    $('.slide').on('mouseenter',function () {
        clearInterval(timer);
    });
    $('.slide').on('mouseleave',function () {
        play();
    });
    var play = function () {
        if (nowIndex == 4) {
            nowIndex = 1;
            $('#content .banner').css({
                transition: 'none',
                transform: 'translateX(0)'
            });
            speed = 0;
        } else {
            $('#content .banner').css({
                transition: 'transform .8s ease',
                transform: 'translateX(-' + w * (nowIndex) + 'px)'
            });
            nowIndex++;
            speed =1500;
        }
        clearInterval(timer);
        timer = setInterval(play,speed)
    };
    timer = setInterval(play,speed);
    let wid = 500;
    $('#content5 .right').on('click',function(){
        $('#content5 .footer').css({
            transition:'transform .8s ease',
            transform:'translateX(-'+wid+'px)'
        });
    });
    $('#content5 .left').on('click',function(){
        $('#content5 .footer').css({
            transition:'transform .8s ease',
            transform:'translateX(0)'
        });
    })
});
