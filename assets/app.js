$(document).ready(function () {
    $('.js-open').on('click', function () {
      $('html').addClass('menu-open');
    });

    $('.js-close').on('click', function () {
      $('html').removeClass('menu-open');
    });
});

$('.js-anchor').on('click', function(event) {
    event.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate(
        {
            scrollTop: $(target).offset().top,
        },
        1500
    );
});

$(document).on('mousedown', '.grabbable', function() {
  $(this).addClass('active');
});

$(document).on('mouseup', '.grabbable', function() {
  $(this).removeClass('active');
});
