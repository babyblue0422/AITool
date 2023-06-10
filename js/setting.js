//滑至頂端
$(".scrolltop").click(function (e) {
  e.preventDefalut();
  $("html,body").animate({
    scrollTop: 0,
  });
});

var swiper = new Swiper(".swiper-brand01", {
  spaceBetween: 30,
  slidesPerView: "auto",
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  lazy: {
    loadPrevNext: true,
  },
  speed: 3500, //滑動速度
});

var swiper2 = new Swiper(".swiper-brand02", {
  spaceBetween: 30,
  slidesPerView: "auto",
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  lazy: {
    loadPrevNext: true,
  },
  speed: 4000, //滑動速度
});

//faq
  $(".faq-list").on("click", ".card-header", function() {

  $(this).toggleClass("active").next().slideToggle();
  $(this).parent().css({border:'2px solid var(--color-black20)'})

  $(".card-body").not($(this).next()).slideUp(300);
               
  $(this).siblings().removeClass("active");

  $(this).siblings('.active').removeClass('active')
  $(".faq-card").not($(this).parent()).css({border:''})
  });

//行動裝置版本
  if ($(window).width() < 992) {

    //行動裝置固定頁面不隨選單滑動
    $(".navbar-toggler").click(function () {
      $(this).attr("aria-expanded", "true");
      //$(".mobile-bar").stop(true, false).slideToggle();
      $("body").toggleClass("fixed");
    });
  
    //評分卡
    var swPartner = new Swiper(".swiper-partner", {
      centeredSlides: true,
      direction: "horizontal",
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  }
  