$(()=> {
  // $('#tabs')
  console.log("hola");
  let lastScrollTop = 200;
$(window).scroll( function(){

  const currentScroll = window.scrollY;
  if (currentScroll < lastScrollTop) {
    $('.tabs').removeClass("fixed");
  } if( currentScroll >= 100) {
    $('.tabs').addClass("fixed");

  }
});

})
