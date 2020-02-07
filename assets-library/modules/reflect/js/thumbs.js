var el = document.getElementById('legacyFooter');

$(".dimmer").click(function() {
  $(this).removeClass("dimmerOn");
  $(".pager ul li span").removeClass("thumbOn");
});

if(el) {
   el.addEventListener('touchmove', function(e) {

      e.preventDefault();

      var touch = e.touches[0];

      if(touch.pageX < 268 || touch.pageX > 760) { $(".pager ul li span").removeClass("thumbOn"); }
      if(touch.pageX < 268 || touch.pageX > 780) { $(".dimmer").removeClass("dimmerOn"); }
      if(touch.pageX > 268 && touch.pageX < 780) { $(".dimmer").addClass("dimmerOn"); }

      if(touch.pageX > 288 && touch.pageX < 328){
         console.log('show the first thumbnail');
         $("#thumb01 span").addClass("thumbOn");
         $("#thumb02 span").removeClass("thumbOn");
         $("#thumb03 span").removeClass("thumbOn");
         $("#thumb04 span").removeClass("thumbOn");
         $("#thumb05 span").removeClass("thumbOn");
         $("#thumb06 span").removeClass("thumbOn");
         $("#thumb07 span").removeClass("thumbOn");
         $("#thumb08 span").removeClass("thumbOn");
         $("#thumb09 span").removeClass("thumbOn");
         $("#thumb10 span").removeClass("thumbOn");
      }

      if(touch.pageX > 344 && touch.pageX < 374){
         console.log('show the second thumbnail');
         $("#thumb01 span").removeClass("thumbOn");
         $("#thumb02 span").addClass("thumbOn");
         $("#thumb03 span").removeClass("thumbOn");
         $("#thumb04 span").removeClass("thumbOn");
         $("#thumb05 span").removeClass("thumbOn");
         $("#thumb06 span").removeClass("thumbOn");
         $("#thumb07 span").removeClass("thumbOn");
         $("#thumb08 span").removeClass("thumbOn");
         $("#thumb09 span").removeClass("thumbOn");
         $("#thumb10 span").removeClass("thumbOn");
      }

      if(touch.pageX > 378 && touch.pageX < 418){
         $("#thumb01 span").removeClass("thumbOn");
         $("#thumb02 span").removeClass("thumbOn");
         $("#thumb03 span").addClass("thumbOn");
         $("#thumb04 span").removeClass("thumbOn");
         $("#thumb05 span").removeClass("thumbOn");
         $("#thumb06 span").removeClass("thumbOn");
         $("#thumb07 span").removeClass("thumbOn");
         $("#thumb08 span").removeClass("thumbOn");
         $("#thumb09 span").removeClass("thumbOn");
         $("#thumb10 span").removeClass("thumbOn");
      }

      if(touch.pageX > 426 && touch.pageX < 466){
         $("#thumb01 span").removeClass("thumbOn");
         $("#thumb02 span").removeClass("thumbOn");
         $("#thumb03 span").removeClass("thumbOn");
         $("#thumb04 span").addClass("thumbOn");
         $("#thumb05 span").removeClass("thumbOn");
         $("#thumb06 span").removeClass("thumbOn");
         $("#thumb07 span").removeClass("thumbOn");
         $("#thumb08 span").removeClass("thumbOn");
         $("#thumb09 span").removeClass("thumbOn");
         $("#thumb10 span").removeClass("thumbOn");
      }

      if(touch.pageX > 470 && touch.pageX < 510){
         $("#thumb01 span").removeClass("thumbOn");
         $("#thumb02 span").removeClass("thumbOn");
         $("#thumb03 span").removeClass("thumbOn");
         $("#thumb04 span").removeClass("thumbOn");
         $("#thumb05 span").addClass("thumbOn");
         $("#thumb06 span").removeClass("thumbOn");
         $("#thumb07 span").removeClass("thumbOn");
         $("#thumb08 span").removeClass("thumbOn");
         $("#thumb09 span").removeClass("thumbOn");
         $("#thumb10 span").removeClass("thumbOn");
      }

      if(touch.pageX > 518 && touch.pageX < 558){
         $("#thumb01 span").removeClass("thumbOn");
         $("#thumb02 span").removeClass("thumbOn");
         $("#thumb03 span").removeClass("thumbOn");
         $("#thumb04 span").removeClass("thumbOn");
         $("#thumb05 span").removeClass("thumbOn");
         $("#thumb06 span").addClass("thumbOn");
         $("#thumb07 span").removeClass("thumbOn");
         $("#thumb08 span").removeClass("thumbOn");
         $("#thumb09 span").removeClass("thumbOn");
         $("#thumb10 span").removeClass("thumbOn");
      }

      if(touch.pageX > 564 && touch.pageX < 604){
         $("#thumb01 span").removeClass("thumbOn");
         $("#thumb02 span").removeClass("thumbOn");
         $("#thumb03 span").removeClass("thumbOn");
         $("#thumb04 span").removeClass("thumbOn");
         $("#thumb05 span").removeClass("thumbOn");
         $("#thumb06 span").removeClass("thumbOn");
         $("#thumb07 span").addClass("thumbOn");
         $("#thumb08 span").removeClass("thumbOn");
         $("#thumb09 span").removeClass("thumbOn");
         $("#thumb10 span").removeClass("thumbOn");
      }

      if(touch.pageX > 608 && touch.pageX < 648){
         $("#thumb01 span").removeClass("thumbOn");
         $("#thumb02 span").removeClass("thumbOn");
         $("#thumb03 span").removeClass("thumbOn");
         $("#thumb04 span").removeClass("thumbOn");
         $("#thumb05 span").removeClass("thumbOn");
         $("#thumb06 span").removeClass("thumbOn");
         $("#thumb07 span").removeClass("thumbOn");
         $("#thumb08 span").addClass("thumbOn");
         $("#thumb09 span").removeClass("thumbOn");
         $("#thumb10 span").removeClass("thumbOn");
      }

      if(touch.pageX > 654 && touch.pageX < 694){
         $("#thumb01 span").removeClass("thumbOn");
         $("#thumb02 span").removeClass("thumbOn");
         $("#thumb03 span").removeClass("thumbOn");
         $("#thumb04 span").removeClass("thumbOn");
         $("#thumb05 span").removeClass("thumbOn");
         $("#thumb06 span").removeClass("thumbOn");
         $("#thumb07 span").removeClass("thumbOn");
         $("#thumb08 span").removeClass("thumbOn");
         $("#thumb09 span").addClass("thumbOn");
         $("#thumb10 span").removeClass("thumbOn");
      }

      if(touch.pageX > 700 && touch.pageX < 740){
         $("#thumb01 span").removeClass("thumbOn");
         $("#thumb02 span").removeClass("thumbOn");
         $("#thumb03 span").removeClass("thumbOn");
         $("#thumb04 span").removeClass("thumbOn");
         $("#thumb05 span").removeClass("thumbOn");
         $("#thumb06 span").removeClass("thumbOn");
         $("#thumb07 span").removeClass("thumbOn");
         $("#thumb08 span").removeClass("thumbOn");
         $("#thumb09 span").removeClass("thumbOn");
         $("#thumb10 span").addClass("thumbOn");
      }

   });
}

if(el) {
   el.addEventListener('touchstart', function(e) {

      e.preventDefault();

      var touch = e.touches[0];

      if(touch.pageX < 268 || touch.pageX > 760) { $(".pager ul li span").removeClass("thumbOn"); }
      if(touch.pageX < 268 || touch.pageX > 780) { $(".dimmer").removeClass("dimmerOn"); }
      if(touch.pageX > 268 && touch.pageX < 780) { $(".dimmer").addClass("dimmerOn"); }

      if(touch.pageX > 288 && touch.pageX < 328){
         console.log('show the first thumbnail');
         $("#thumb01 span").addClass("thumbOn");
         $("#thumb02 span").removeClass("thumbOn");
         $("#thumb03 span").removeClass("thumbOn");
         $("#thumb04 span").removeClass("thumbOn");
         $("#thumb05 span").removeClass("thumbOn");
         $("#thumb06 span").removeClass("thumbOn");
         $("#thumb07 span").removeClass("thumbOn");
         $("#thumb08 span").removeClass("thumbOn");
         $("#thumb09 span").removeClass("thumbOn");
         $("#thumb10 span").removeClass("thumbOn");
      }

      if(touch.pageX > 344 && touch.pageX < 374){
         console.log('show the second thumbnail');
         $("#thumb01 span").removeClass("thumbOn");
         $("#thumb02 span").addClass("thumbOn");
         $("#thumb03 span").removeClass("thumbOn");
         $("#thumb04 span").removeClass("thumbOn");
         $("#thumb05 span").removeClass("thumbOn");
         $("#thumb06 span").removeClass("thumbOn");
         $("#thumb07 span").removeClass("thumbOn");
         $("#thumb08 span").removeClass("thumbOn");
         $("#thumb09 span").removeClass("thumbOn");
         $("#thumb10 span").removeClass("thumbOn");
      }

      if(touch.pageX > 378 && touch.pageX < 418){
         $("#thumb01 span").removeClass("thumbOn");
         $("#thumb02 span").removeClass("thumbOn");
         $("#thumb03 span").addClass("thumbOn");
         $("#thumb04 span").removeClass("thumbOn");
         $("#thumb05 span").removeClass("thumbOn");
         $("#thumb06 span").removeClass("thumbOn");
         $("#thumb07 span").removeClass("thumbOn");
         $("#thumb08 span").removeClass("thumbOn");
         $("#thumb09 span").removeClass("thumbOn");
         $("#thumb10 span").removeClass("thumbOn");
      }

      if(touch.pageX > 426 && touch.pageX < 466){
         $("#thumb01 span").removeClass("thumbOn");
         $("#thumb02 span").removeClass("thumbOn");
         $("#thumb03 span").removeClass("thumbOn");
         $("#thumb04 span").addClass("thumbOn");
         $("#thumb05 span").removeClass("thumbOn");
         $("#thumb06 span").removeClass("thumbOn");
         $("#thumb07 span").removeClass("thumbOn");
         $("#thumb08 span").removeClass("thumbOn");
         $("#thumb09 span").removeClass("thumbOn");
         $("#thumb10 span").removeClass("thumbOn");
      }

      if(touch.pageX > 470 && touch.pageX < 510){
         $("#thumb01 span").removeClass("thumbOn");
         $("#thumb02 span").removeClass("thumbOn");
         $("#thumb03 span").removeClass("thumbOn");
         $("#thumb04 span").removeClass("thumbOn");
         $("#thumb05 span").addClass("thumbOn");
         $("#thumb06 span").removeClass("thumbOn");
         $("#thumb07 span").removeClass("thumbOn");
         $("#thumb08 span").removeClass("thumbOn");
         $("#thumb09 span").removeClass("thumbOn");
         $("#thumb10 span").removeClass("thumbOn");
      }

      if(touch.pageX > 518 && touch.pageX < 558){
         $("#thumb01 span").removeClass("thumbOn");
         $("#thumb02 span").removeClass("thumbOn");
         $("#thumb03 span").removeClass("thumbOn");
         $("#thumb04 span").removeClass("thumbOn");
         $("#thumb05 span").removeClass("thumbOn");
         $("#thumb06 span").addClass("thumbOn");
         $("#thumb07 span").removeClass("thumbOn");
         $("#thumb08 span").removeClass("thumbOn");
         $("#thumb09 span").removeClass("thumbOn");
         $("#thumb10 span").removeClass("thumbOn");
      }

      if(touch.pageX > 564 && touch.pageX < 604){
         $("#thumb01 span").removeClass("thumbOn");
         $("#thumb02 span").removeClass("thumbOn");
         $("#thumb03 span").removeClass("thumbOn");
         $("#thumb04 span").removeClass("thumbOn");
         $("#thumb05 span").removeClass("thumbOn");
         $("#thumb06 span").removeClass("thumbOn");
         $("#thumb07 span").addClass("thumbOn");
         $("#thumb08 span").removeClass("thumbOn");
         $("#thumb09 span").removeClass("thumbOn");
         $("#thumb10 span").removeClass("thumbOn");
      }

      if(touch.pageX > 608 && touch.pageX < 648){
         $("#thumb01 span").removeClass("thumbOn");
         $("#thumb02 span").removeClass("thumbOn");
         $("#thumb03 span").removeClass("thumbOn");
         $("#thumb04 span").removeClass("thumbOn");
         $("#thumb05 span").removeClass("thumbOn");
         $("#thumb06 span").removeClass("thumbOn");
         $("#thumb07 span").removeClass("thumbOn");
         $("#thumb08 span").addClass("thumbOn");
         $("#thumb09 span").removeClass("thumbOn");
         $("#thumb10 span").removeClass("thumbOn");
      }

      if(touch.pageX > 654 && touch.pageX < 694){
         $("#thumb01 span").removeClass("thumbOn");
         $("#thumb02 span").removeClass("thumbOn");
         $("#thumb03 span").removeClass("thumbOn");
         $("#thumb04 span").removeClass("thumbOn");
         $("#thumb05 span").removeClass("thumbOn");
         $("#thumb06 span").removeClass("thumbOn");
         $("#thumb07 span").removeClass("thumbOn");
         $("#thumb08 span").removeClass("thumbOn");
         $("#thumb09 span").addClass("thumbOn");
         $("#thumb10 span").removeClass("thumbOn");
      }

      if(touch.pageX > 700 && touch.pageX < 740){
         $("#thumb01 span").removeClass("thumbOn");
         $("#thumb02 span").removeClass("thumbOn");
         $("#thumb03 span").removeClass("thumbOn");
         $("#thumb04 span").removeClass("thumbOn");
         $("#thumb05 span").removeClass("thumbOn");
         $("#thumb06 span").removeClass("thumbOn");
         $("#thumb07 span").removeClass("thumbOn");
         $("#thumb08 span").removeClass("thumbOn");
         $("#thumb09 span").removeClass("thumbOn");
         $("#thumb10 span").addClass("thumbOn");
      }

   });
}