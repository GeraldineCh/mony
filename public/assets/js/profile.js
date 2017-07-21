
  // $('.owl-carousel').owlCarousel({
  //     loop:true,
  //     margin:10,
  //     nav:true,
  //     responsive:{
  //         0:{
  //             items:1
  //         },
  //         600:{
  //             items:3
  //         },
  //         1000:{
  //             items:5
  //         }
  //     }
  // })

  $( () => {
     $(".button-collapse").sideNav();
     $('ul.tabs').tabs({'swipeable':true});
     $('.modal').modal();

      var firstImg = 0;
      var slider = $("#carousel");
      var lyst = $("#carousel .slider__listas");
      var circle = $(".btn__slider");

      showImg(firstImg);
      $("#btn-next").on('click',function(e) {
          e.preventDefault();
          moveImg(1);
      });
      $("#btn-prev").on('click',function(e) {
          e.preventDefault();
          moveImg(-1);
      });
      function showImg(valor){
        lyst.hide();
        lyst.eq(valor).show();
        circle.removeClass("color-circle");
        circle.eq(valor).addClass("color-circle");
        firstImg = valor + 1;
      }

      function moveImg(valor){
        firstImg += valor;
        if(firstImg > lyst.length){
          firstImg = 1;
        }
        if(firstImg < 1){
          firstImg = lyst.length;
        }
        showImg(firstImg-1);
      }
      // SLIDER CIRCLE
      circle.on("click",function(){
          switch (this.id) {
            case "first":  showImg(0);
              break;
            case "second": showImg(1);
              break;
            case "third":  showImg(2);
              break;
            case "fourth":  showImg(3);
              break;
            case "fifth":  showImg(4);
              break;
          }
        });
  })
