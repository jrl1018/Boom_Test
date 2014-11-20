var main = function () {
    $('.nav-mobile-btn').click(function() {
        $('.mobile-nav-menu').animate(
            {left: '0px'}, 
            200
            );
        
        $('.site-body').animate(
            {left: '285px'}, 
            200
            );

        $('.nav-mobile-btn').addClass('.active');
        $('.nav-logo-contain a').addClass('.disabled');

    });
    
    $('.hide-menu-btn').click(function() {
        $('.mobile-nav-menu').animate(
            {left: '-285px'},
            200
            );
        $('.site-body').animate(
            {left: '0'}, 
            200);
        $('.active').removeClass('.active');
        $('.disabled').removeClass('.disabled');
    });

    $('.dropdown').hover(function() {
        $('.dropdown').toggleClass('open');
    });

};

$(document).ready(main);