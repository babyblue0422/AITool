if ($(window).width() < 992) {
    //header置頂固定
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 0) {
    //         /* 要滑動到選單的距離 */
    //         $('header').addClass('fixed-top'); /* 幫選單加上固定效果 */
    //     } else {
    //         $('header').removeClass('fixed-top'); /* 移除選單固定效果 */
    //     }
    // });

    //行動裝置固定頁面不隨選單滑動
    $(".navbar-toggler").click(function () {
        $(this).attr("aria-expanded", "true");
        //$(".mobile-bar").stop(true, false).slideToggle();
        $("body").toggleClass("fixed");
    });

    var swPartner = new Swiper(".swiper-partner", {
        centeredSlides: true,
        direction: 'horizontal',
        slidesPerView: 1, 
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        loop:true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
      });
 } 

//滑至頂端
$(".scrolltop").click(function(e){
    e.preventDefalut();
    $("html,body").animate(
        {
            scrollTop: 0,
        },
        
    )
})

  var swiper = new Swiper(".swiper-brand01", {
    spaceBetween: 30,
    slidesPerView: 'auto',
    loop:true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      lazy: {
        loadPrevNext: true,
      },
      speed: 3500,  //滑動速度
  });

  var swiper2 = new Swiper(".swiper-brand02", {
    spaceBetween: 30,
    slidesPerView: 'auto',
   loop:true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      lazy: {
        loadPrevNext: true,
      },
      speed: 4000,  //滑動速度
  });

