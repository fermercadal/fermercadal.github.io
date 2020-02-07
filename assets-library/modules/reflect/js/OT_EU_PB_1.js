;$(function () {
    clearHistory();
    resetAllStates();
    resetAllButtons();

    var options1 = {
        canvasID: 'chart-1',
        sectors: [70],
        colors: ['#b8b3ad'],
        center: [123, 123],
        radius: 120,
        delay: 0,
        velocity: 70,
        lineWidth: 0
    };
    var options2 = {
        canvasID: 'chart-2',
        sectors: [54],
        colors: ['#b8b3ad'],
        center: [123, 123],
        radius: 120,
        delay: 0,
        velocity: 54
    };
    var options3 = {
        canvasID: 'chart-3',
        sectors: [79],
        colors: ['#b8b3ad'],
        center: [123, 123],
        radius: 120,
        delay: 0,
        velocity: 79
    };
    var pcm1 = new pieChartManager(options1);
    var pcm2 = new pieChartManager(options2);
    var pcm3 = new pieChartManager(options3);
    var counter = 0;

    clickAction($('.chart-1 .chart-cap'), function () {
        if(counter == 0){
            $('.chart-1 .pointer').addClass('move-1');
            $('.chart-1 .zero').removeClass('active');
            $('.chart-1 .value').addClass('active');
            $('.text.t1').addClass('fadeInUp');
            $('.caption.t1').addClass('fadeIn');
            $('.btn-2').addClass('tap');
            pcm1.start();
            setTimeout(function () {
                counter = 1;
            },1000);
        }
    });
    clickAction($('.chart-2 .chart-cap'), function () {
        if(counter == 1){
            $('.chart-2 .pointer').addClass('move-2');
            $('.chart-2 .zero').removeClass('active');
            $('.chart-2 .value').addClass('active');
            $('.text.t2').addClass('fadeInUp');
            $('.caption.t2').addClass('fadeIn');
            $('.btn-3').addClass('tap');
            pcm2.start();
            setTimeout(function () {
                counter = 2;
            },1000);
        }
    });
    clickAction($('.chart-3 .chart-cap'), function () {
        if(counter == 2){
            $('.chart-3 .pointer').addClass('move-3');
            $('.chart-3 .zero').removeClass('active');
            $('.chart-3 .value').addClass('active');
            $('.text.t3').addClass('fadeInUp');
            $('.caption.t3').addClass('fadeIn');
            pcm3.start();
            setTimeout(function () {
                counter = 3;
            },1000);
        }
    });
    var clip_count = 0;
    // clickAction($('.btn'), function () {
        
    //     //Та же анимация через интервал
    //     // var clipPath = setInterval(function () {
    //     //     clip_count+=3;
    //     //     if (clip_count >= 750){
    //     //         clearInterval(clipPath);
    //     //     }
    //     //     $('.view').css({
    //     //         "clip-path" : 'circle('+ clip_count +'px at 38.8% 20.75%)',
    //     //         "-webkit-clip-path" : 'circle('+ clip_count +'px at 38.8% 20.75%)'
    //     //     });
    //     //     $('.fake-view').css({
    //     //         "width" : clip_count * 2,
    //     //         "height" : clip_count * 2
    //     //     });
    //     // },1);
    // });
    window.storyCLMNavigation.onSwipeNext = function () {

            window.location = 'OT_EU_PB_4.html';
    }
});

clickAction($('.btn-skip'), function () {
    alert('skip to OTVF');
});

clickAction($('.btn-wheel'), function () {
    alert('show wheel of control');
});

