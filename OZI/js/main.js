$(document).ready(function () {

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

$(document).ready(function () {
  if ($(window).width() > 1024) {
    $('.menu-drop').hover(function () {

      $(this).addClass('__show');
      // over

    }, function () {
      $(this).removeClass('__show')
      // out
    });
  } else {
    $('.menu-drop').click(function (e) {
      $(this).siblings('.menu-drop').removeClass('__show').next('.sub__menu').slideUp();

      $(this).toggleClass('__show').next('.sub__menu').slideToggle();

      e.preventDefault();
    });
  }
  $('.sub__menu-drop').click(function (e) {
     $(this).siblings('.sub__menu-drop').removeClass('__show').find('.sub__menu-sub').slideUp();
    $(this).toggleClass('__show').find('.sub__menu-sub').slideToggle();
    e.preventDefault();

  });
  $(document).keyup(function (e) {
    if (e.keyCode === 27) $('.popup__close').click(); // esc
    $('.find__form').removeClass('__show');
    $('.burger__menu').removeClass('__active');
    $('.menu').removeClass('__show');
    $('.menu__bg').fadeOut();
  });
  $(window).scroll(function () {
    $('.burger__menu').removeClass('__active');
    $('.menu').removeClass('__show');
    $('.menu__bg').fadeOut();
  });

  function menuToggle() {
    $('.burger__menu').toggleClass('__active');
    $('.menu').toggleClass('__show');
    $('.menu__bg').is(':visible') ? $('.menu__bg').fadeOut() : $('.menu__bg').fadeIn();
  }
  $('.burger__menu').click(function (e) {
    menuToggle();
    e.preventDefault();
  });
});