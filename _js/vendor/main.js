// Sticky header

function sticky_relocate() {
  var window_top = $(window).scrollTop();
  var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top)
        $('#sticky-element').addClass('sticky');
    else
        $('#sticky-element').removeClass('sticky');
}

$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});

// Spacer for smooth position

function spacer_add() {
  var window_top = $(window).scrollTop();
  var div_top = $('#spacer-anchor').offset().top;
    if (window_top > div_top)
        $('#spacer-element').addClass('spacer');
    else
        $('#spacer-element').removeClass('spacer');
}

$(function() {
    $(window).scroll(spacer_add);
    spacer_add();
});

// Mobile menu

$('.header-menu-icon').click(function() {
    $('.header-list-mobile').toggle('slow', function() {
  });
});
