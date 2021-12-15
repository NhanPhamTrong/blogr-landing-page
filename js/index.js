const navLink = $("header .nav-link");

navLink.click(function() {
    if ($(this).hasClass("active")) {
        navLink.removeClass("active");
        $(this).removeClass("active");
    }
    else {
        navLink.removeClass("active");
        $(this).addClass("active");
    }
});