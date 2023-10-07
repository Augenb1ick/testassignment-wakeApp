$(function () {
  (function () {
    $('.root').addClass('loaded');
  });

  $(window).on('load', function () {
    $('.root').addClass('loaded');
  });
});

$(function () {
  $('#sign-up').on('click', function () {
    $('#popup').fadeIn(500).css('visibility', 'visible');
  });

  $('#close-popup').on('click', function () {
    $('#popup').fadeOut(500).css('visibility', 'hidden');
  });
});
