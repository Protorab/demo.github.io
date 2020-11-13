//  phone mask + send mail
$(document).ready(function () {
  $('.certificates__gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function (item) {
        return item.el.attr('title') + '<small>Сертификаты</small>';
      }
    }
  });
  $('.popup__img').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    image: {
      verticalFit: false
    }
  });
  $(".telephone").inputmask({
    mask: "+375 (99) 999 99 99",
    clearIncomplete: true,
    greedy: false
  });
  $("form").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "/mail.php", //Change
      data: th.serialize()
    }).done(function () {
       
      $('._def').hide();
      $('._thx').show();
      setTimeout(function () {
        $('._thx').hide();
        $('._def').show();
        $('.popup__close').click();
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
  $("form").keydown(function () {
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  });
});
// slick
$(document).ready(function () {
  $('.top__slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    cssEase: 'linear',
    nextArrow: '<div class="top__slider-next top__slider-arrow "><span></span><span></span></div>',
    prevArrow: '<div class="top__slider-prev top__slider-arrow"><span></span><span></span></div>',
  });
  $('.reviews__slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    // autoplay: true,
    cssEase: 'linear',
    nextArrow: '<div class="team__slider-next team__slider-arrow "><span></span><span></span></div>',
    prevArrow: '<div class="team__slider-prev team__slider-arrow"><span></span><span></span></div>',
    responsive: [

      {
        breakpoint: 680,
        settings: {

          arrows: false,

        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.team__slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: '<div class="team__slider-next team__slider-arrow "></div>',
    prevArrow: '<div class="team__slider-prev team__slider-arrow"></div>',
    responsive: [{
        breakpoint: 1601,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,

        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          arrows: false,

        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});


$(document).ready(function () {
  $('.burger__menu').click(function (e) {
    $(this).toggleClass('__clicked');
    e.preventDefault();

  });
  $('.show__item').click(function (e) {
    $(this).parents('.header__item').find('.header__item-content').toggleClass('__show');
    e.preventDefault();
  });
$('.phone__item').hover(function () {
    // over
        $(this).find('.header__item-content').addClass('__show');
  }, function () {
    // out
    $(this).find('.header__item-content').removeClass('__show');
  }
);
  function hideClose() {
    $('.header__item-content').removeClass('__show');
    $('.burger__menu').removeClass('__clicked');
    $('body').removeClass('__fixed');
    $('.warning').fadeOut();
    $('.popup').fadeOut();
    $('.question').addClass('__hide');
      $('.type__housing').removeClass('__hide');
      counter=0;
      $('.check__number').hide();
  }
  $('.popup-bg').click(function (e) {
    hideClose()
    e.preventDefault();

  });
  $('.popup__close').click(function (e) {
    hideClose()
    e.preventDefault();

  });
  $(document).keyup(function (e) {
    if (e.keyCode === 27) // esc
      hideClose();
  });
  $('.next__question').hover(function () {
    // over

  }, function () {
    hideClose();

    // out
  });
  $('.subject__item').click(function (e) {
    $('.subject__item').removeClass('__clicked');
    var subject = $(this).text();
    $('.top__subject').val("Хочу " + subject);
    $(this).addClass('__clicked');
    e.preventDefault();
  });

  $('.next__question').click(function (e) {
    var input = $(this).parents('.top__form-question').find('input');
    input.val() === '' ? $('.warning').fadeIn() :
      $(this).parents('.top__form-question').addClass('__hide').next('.top__form-question').removeClass('__hide');
if($("#top__phone")!==''){
  $(this).parents('form').submit();
}
    e.preventDefault();

  });
  $('.top__send').click(function (e) { 
    e.preventDefault();
    var input = $(this).parents('.top__form-question').find('input');
       input.val() === '' ? $('.warning').fadeIn() : $(this).parents('form').submit();
  });

  $('.show__form').click(function (e) {
    $('.popup__form').hide().css("display", "flex").fadeIn();
    $('body').addClass('__fixed');

    e.preventDefault();

  });
  $(window).scroll(function () {
    hideClose();
  });
  $('.check__show').click(function (e) {
    $('body').addClass('__fixed');
    $('.popup__check').hide().css("display", "flex").fadeIn();

    e.preventDefault();
    
  });
  var counter=0;
  $('.check__grid-item').click(function (e) {
    var nextWindow = $(this).data('question'),
      inputText = $(this).text(),
      allNumber = $(this).data('allnumber');
      $('.all__number').text(allNumber);
      $('.check__number').fadeIn();
      counter++;
      console.log(counter);
      $('.current__number').text(counter);
    $(this).parents('.question').addClass('__hide').find('.check__popup-input').val(inputText);
    $('.' + nextWindow).removeClass('__hide');
    e.preventDefault();
  });
});