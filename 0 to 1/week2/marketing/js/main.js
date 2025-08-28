$(function () {
  $(".slider-blog__inner").slick({
    dots: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="arrow-left"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="arrow-right"></button>',
  });

  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleClass(".menu__list--active");
  });

  var mixer = mixitup(".portfolio__content");
});
