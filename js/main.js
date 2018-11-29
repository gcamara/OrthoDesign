;(function() {
    var menu = document.getElementsByClassName('cabecalho')[0]
    var menuOffset = menu.offsetTop

    window.onscroll = function() {
        if (window.pageYOffset > menuOffset + 80)
            menu.classList.add('fix')
        else
            menu.classList.remove('fix')

        $('.arrow').removeClass('kick')

        $('section').each(function (i) {

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window - 1700 > bottom_of_object) {

                $(this).addClass('show')
            }

        });
    }

    $('nav, nav *').click(function(event) {
        var section = $(this).attr('section')
        var el = $('section.'+section)
        if (!el.length)
            el = $(section)

        $('html, body').animate({
            scrollTop: el.offset().top - 100
        }, 1000)
    })

    $(window).click(event => {
        var target = $(event.target)
        var menu = $('menu')
        if (target[0] != $('button.trigger-menu')[0] && (target != menu || !target.parent('menu').length)) {
            menu.removeClass('show')
        }
    })
})()