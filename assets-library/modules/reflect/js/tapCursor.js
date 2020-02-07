function tapCursors(blocks, timeout) {
    var index = 0,
        length = blocks.length;

    if (window.clearTaps) { //если кнопку уже нажали - стоп анимации
        clearInterval(cursors);
    }

    var cursors = setInterval(function(){
        $('.js-tap-ui').removeClass('show');

        var topPos = $(blocks[index]).position().top,
            leftPos = $(blocks[index]).position().left,
            halfWidth = $(blocks[index]).width()/2,
            halfHeight = $(blocks[index]).height()/2;

        if (window.clearTaps) { //если кнопку уже нажали - стоп анимации
            clearInterval(cursors);
        }

        $('.js-tap-ui').css({
            top: topPos + halfHeight,
            left: leftPos + halfWidth
        });

        $('.js-tap-ui').addClass('show');
        index++;

        if(index >= length){
            clearInterval(cursors);
            setTimeout(function () {
                $('.js-tap-ui').removeClass('show');
            }, 600);
        }
    }, timeout);
};