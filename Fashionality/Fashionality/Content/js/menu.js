var clicks = 0;

function hide_search() {
    clicks += 1;
    if (clicks % 2 == 1) {
        // $('#nav-right').css('display', 'none');
        // $('#nav-right').css('opacity', 'hide');
        // $('#nav-right').css('width', 'hide');
        // $('#mobile-info').css('display','non');
    } else {
        // $('#nav-right').css('display', 'block');
        $('#mobile-info').css('display', 'block');
    }
    // $('#nav-right').toggle();
    $('#nav-right').fadeToggle();
}

$(document).click(function () {
    $("#nav-right").hide();
});
$("#nav-right").click(function (e) {
    this.hide_search().click;
});
$('.c-box_mmenu .offcanvas-menu-toggler').click(function () {
    var element = $(this).parent().parent();
    if (element.hasClass('c-open')) {
        element.removeClass('c-open');
    } else {
        element.removeClass('c-open');
        element.addClass('c-open');
    }
})

$(document).ready(function () {
    $('.c-box_search .c-call_search').click(function () {
        $(".c-box_search .search-box").toggle(400);
        $(".c-box_funs .c-box_viewCart").hide('slow');
        return false;
    })

    $('.c-box_funs .c-btn_cart,.c-box_funs .c-close_cart').click(function () {
        $(".c-box_funs .c-box_viewCart").toggle(400);
        $(".c-box_search .search-box").hide('slow');
        return false;
    })

    $('.c-box_mmenu .c-btn_close--menu,#call_menu').click(function () {
        $(".c-box_mmenu").toggle(400);
        $(".c-menu_mobile,.c-box_maccount").show();
        return false;
    })

    $('.c-call_msearch').click(function () {
        $(".c-box_mmenu").toggle(400);
        $(".c-menu_mobile,.c-box_maccount").hide();
        return false;
    })

    $('.c-btn_sort').click(function () {
        $(".c-box_sort .dropdown-menu").toggle(400);
        return false;
    })

    loadNav();
})

function loadNav() {
    $('.main-menu > .menu-item > a').hover(function () {
        // $(this).next().toggle(500);
        //
        $(this).next().stop(true, true).slideDown(500);
    }, function () {
    });

    $('.main-menu > .menu-item').hover(function () {
    }, function () {
        // $(this).find('.light-menu').toggle(500);
        $(this).find('.light-menu').stop(true, true).slideUp(500);
    });
}