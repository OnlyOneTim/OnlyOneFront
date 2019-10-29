jQuery(window).scroll(function () {

    if (jQuery("#features").offset().top <= jQuery(this).scrollTop()) {
        jQuery(".navbar-default .navbar-nav>li").eq(1).addClass("active").siblings().removeClass("active");
    }
    if (jQuery("#features").offset().top > jQuery(this).scrollTop()) {
        jQuery(".navbar-default .navbar-nav>li").eq(0).addClass("active").siblings().removeClass("active");
    }

    if (jQuery(window).scrollTop() >= 100)
    {
        jQuery("nav").addClass("scrolled");
    }
    else
    {
        jQuery("nav").removeClass("scrolled");
    }

});

jQuery(".navbar-default .navbar-nav>li>a").click(function () {
    jQuery(this).parent().addClass("active").siblings().removeClass("active");
});

if (jQuery(window).scrollTop() >= 100) {
    jQuery("nav").addClass("scrolled");
}