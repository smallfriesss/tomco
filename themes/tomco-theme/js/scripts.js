jQuery(function () {
    var jQuerytogglebutton = jQuery('.nav-hamburger'),
        jQuerymenuWrap = jQuery('.menu-main-menu-container');

    jQuerytogglebutton.on('click', function () {
        jQuery(this).toggleClass('button-open');
        jQuerymenuWrap.toggleClass('menu-show');

    });

    jQuery('.readmore-button').click(function () {
        jQuery(this).hide();
        jQuery('.about-readmore').slideDown().addClass('.show');
    })

});

jQuery('#explore-button').click(function(){
    alert('HELLO');
    
})

var a = 0;
jQuery(window).scroll(function () {

    var oTop = jQuery('#counter').offset().top - window.innerHeight;
    if (a === 0 && jQuery(window).scrollTop() > oTop) {
        jQuery('.counter-value').each(function () {
            var jQuerythis = jQuery(this),
                countTo = jQuerythis.attr('data-count');
            jQuery({
                countNum: jQuerythis.text()
            }).animate({
                    countNum: countTo
                },

                {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        jQuerythis.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        jQuerythis.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        a = 1;
    }

});

