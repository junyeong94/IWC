$(function(){
        var mySwiper = new Swiper ('.swiper-container', {
          // Optional parameters
          loop: true,
          autoplay:{
              delay:3000
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable:true,
          },
        });
});