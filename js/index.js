$(function() {
    //解决图片双击变蓝
    document.onselectstart = new Function("return false");


    // ****************************************************************************
    //js动画效果

    //下载app
    $('li').on('mouseover', function() {
        $(this).children('.app').stop().slideDown(200);
        $(this).on('mouseout', function() {
            $(this).children('.app').stop().slideUp(200);
        })
    });

    //购物车
    $('.potn').on('mouseover', function() {
        $(this).children('.Cart-info').stop().slideDown(180);
        $(this).on('mouseout', function() {
            $(this).children('.Cart-info').stop().slideUp(180);
        })
    });



    // 搜索切换 和得到焦点清除提示
    let temp = 0;
    let temes;

    clearInterval(temes);
    temes = null;

    function inputTime() {
        temes = setInterval(function() {
            $.getJSON('JSON/data.json', function(data) {
                if (temp < data.data.length - 1) {
                    $('input').prop('placeholder', data.data[temp].word);
                    temp++;
                } else {
                    $('input').prop('placeholder', data.data[data.data.length - 1].word);
                    temp = 0;
                }
            });
        }, 6 * 1000);
    }

    inputTime();

    // $('input').on('blur', function() {
    //     $('input').prop('placeholder', '红米')
    //     clearInterval(temes);
    //     temes = null;
    //     inputTime();
    // });
    // $('input').on('focus', function() {
    //     $('input').prop('placeholder', '');
    //     clearInterval(temes);
    //     temes = null;
    // });


    //下拉tab栏切换
    $('.site-nav>ul>li').on('mouseover', function() {
        $('.site-tab>.site-tab-body>ul>li').stop().css('display', 'none');
        $(this).children('a').css('color', '#ff6700');

        let index = $(this).index();

        if (index <= 6) {
            $('.site-tab').stop().slideDown(150);
            $('.site-tab>.site-tab-body>ul>li').eq(index).css('display', 'block');
        } else {
            $('.site-tab').stop().slideUp(200);
        }

        $(this).on('mouseout', function() {
            $('.site-tab').stop().slideUp(200);
            $(this).children('a').css('color', '#333');
        })
    });

    $('.site-tab').on('mouseover', function() {
        $(this).stop().slideDown(150);
        $(this).on('mouseout', function() {
            $(this).stop().slideUp(200);
        })
    });


    //侧拉tab栏
    $('.rotation-nav>ul>li').on('mouseover', function() {
        $(this).siblings('li').css('backgroundColor', '');
        let index = $(this).index();
        $(this).css('backgroundColor', '#ff6700');

        $('.side-tab-ul>li').eq(index).css('display', 'block').siblings('li').css('display', 'none');

        $(this).on('mouseout', function() {
            $(this).css('backgroundColor', '');
            $('.side-tab-ul>li').eq(index).css('display', 'none')
        })
    });

    $('.side-tab-ul>li').on('mouseover', function() {
        let index = $(this).index();
        $(this).css('display', 'block');
        $('.rotation-nav>ul>li').eq(index).css('backgroundColor', '#ff6700');

        $(this).on('mouseout', function() {
            $(this).css('display', 'none');
            $('.rotation-nav>ul>li').eq(index).css('backgroundColor', '');
        })
    });


    // 卷曲部分
    $(document).on('scroll', function() {
        let height = $("header").height();
        let top = $(this).scrollTop();
        if (top > height) {
            $(".return-top").fadeIn()
        } else {
            $(".return-top").fadeOut();
        }
    })

    // 回到顶部
    $('.return-top').on('click', function() {
        scrollTo(0, 0);
    })


    //字体变化
    function change(ints) {
        $(ints).on('mouseover', function() {
            $(this).css({
                color: '#ff6700',
                borderBottom: '2px solid #ff6700'
            }).siblings('span').css({
                color: '#333',
                borderBottom: '2px solid #f5f5f5'
            });
        })
    }
    change('.custom-head-2>span');
    change('.custom-head-4>span');
    change('.custom-head-5>span');
    change('.custom-head-6>span');
    change('.custom-head-7>span');
    change('.custom-head-8>span');


    // prop() 获取固有属性
    // attr() 获取自定义属性

    // 视频
    $('.box-body>ul>li').on('click', function() {
        $('.video').fadeIn();
        $('.video-box').fadeIn();
        $('.video-box>.body>video').attr('src', $(this).attr('src'));
        video.play();
    });

    $('.video-box>.head>p').on('click', function() {
        $('.video').fadeOut();
        $('.video-box').fadeOut();
        video.pause();
    });



    //尾部图片显示
    $('.right-4>img').eq(1).on('mouseover', function() {
        $(this).siblings('div').css('display', 'block');
        $(this).on('mouseout', function() {
            $(this).siblings('div').css('display', 'none');
        })
    });

    //定时更换图片
    let time = 0;
    setInterval(function() {
        if (time == 0) {
            $('.body-top-2>div>.img').prop('src', $('.body-top-2>div>.img').attr('hrefb'));
            time = 1;
        } else {
            $('.body-top-2>div>.img').prop('src', $('.body-top-2>div>.img').attr('hrefa'));
            time = 0;
        }
    }, 3 * 1000)
});