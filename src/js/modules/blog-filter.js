module.exports = function() {

  // begin blog-filter
  
  $('.blog-filter__item').on('click', function () {
    $('.blog-filter__item').removeClass('active');
    $(this).addClass('active');
  });

  $('.blog-filter__item').on('click', function () {

    var activeFilter = $(this).data('filter');

    $('.blog__item').fadeOut(10);
    $('.blog__item[data-filter=' + activeFilter + ']').fadeIn(100);

    if (activeFilter === 'all') {
      $('.blog__item').fadeIn(100);
    }
  });
  // end blog-filter

};