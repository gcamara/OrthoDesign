;(function() {
    var menu = document.getElementsByClassName('cabecalho')[0]
    var menuOffset = menu.offsetTop

    window.onscroll = function() {
        if (window.pageYOffset > menuOffset + 80)
            menu.classList.add('fix')
        else
            menu.classList.remove('fix')
    }

    $('nav a, nav .ic').click(function(event) {
        var self = $(this)
        if ($(this).parent('nav').length)
            self = $(this).parent('nav')

        var section = self.attr('section')
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