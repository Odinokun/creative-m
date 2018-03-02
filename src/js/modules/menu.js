module.exports = function() {

  // begin menu

  // открывание подпунктов мобильного меню
  $('.menu__cross').on('click', function () {
    $(this).siblings('.menu__sublist').slideToggle();
    $(this).parent('.menu__item--parent').toggleClass('active');
  });

  // открывание самого меню
  $('.menu__mobile-title').on('click', function () {
    $('#menu-container').slideDown();
  });

  // закрытие меню
  $('.menu__close').on('click', function () {
    $('#menu-container').slideUp();
  });

  // end menu

};