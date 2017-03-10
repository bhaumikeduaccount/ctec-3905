// back to top button JS for personal site
$(window).scroll(function() {
    if ($(this).scrollTop() >= 30) {        // If page is scrolled more than 30px show button if not hide
        $('#back-top').fadeIn(100);
    } else {
        $('#back-top').fadeOut(200);
    }
});
$('#back-top').click(function() {
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body when clicked button
    }, 500);
});