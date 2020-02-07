;$(function () {
    var answer;
    clickAction($('.form-btn'), function () {
        $('.form-wrap').toggleClass('active');
        // var answer =  $('#form-area').val();
        // StoryCLM.CustomEvents.Set('why', answer);
        // console.log(answer);
    });
    $('#form-area').focusout(function () {
        answer =  $('#form-area').val();
        StoryCLM.CustomEvents.Set('why', answer);
        console.log(answer);
    });
    var options = {
        obj: [".slider-1", ".slider-2"],
        deltaX: [200],
        delay: 1500,
        duration: 800
    };
    var ut = new UTManager(options);
    ut.drag();

    var options1 = {
        slider: $('.slider-1'),
        intervals: 100,
        xStart: 139,
        xEnd: 830,
        yStart: 269,
        dragEvent: function () {
            $('.fill-1').css('width',sm1.getValue()*7.16);
        },
        handler: function () {
            $('.fill-1').css('width',sm1.getValue()*7.16);
            var val = Math.round(sm1.getValue()/10);
            StoryCLM.CustomEvents.Set('frequency_of_recommendation_OTVR_and_OTR', 'number_of_recommendation-'+val);
            console.log('number_of_recommendation-'+val);
            if(val <= 4){
                $('.form-wrap').addClass('active');
            } else {
                $('.form-wrap').removeClass('active');
            }
        }
    };

    var sm1 = new SliderManager(options1);
    sm1.start();

    var options2 = {
        slider: $('.slider-2'),
        intervals: 100,
        xStart: 139,
        xEnd: 830,
        yStart: 523,
        dragEvent: function () {
            $('.fill-2').css('width',sm2.getValue()*7.16);
        },
        handler: function () {
            $('.fill-2').css('width',sm2.getValue()*7.16);
            StoryCLM.CustomEvents.Set('percent_of_patients_recommended_OTVR_plus_OTR', 'percent_of_recommendation-'+sm2.getValue());
            console.log('percent_of recommendation-'+sm2.getValue());
        }
    };

    var sm2 = new SliderManager(options2);
    sm2.start();
});
