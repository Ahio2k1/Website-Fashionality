if ($(window).width() <= 500) {
    var inforwer = document.getElementById("infor-wer");
    var inforwer2 = document.getElementById("infor-wer2");
    inforwer.classList.add('toggle-info');
    inforwer2.classList.add('toggle-info');
    $("#infor-wer").on("click", function () {
        // $("#search-guide").css("display", "block");
        $("#infor-wer .nav-left.menu").toggle('slow');
    });
    $("#infor-wer2").on("click", function () {
        // $("#search-guide").css("display", "block");
        $("#infor-wer2 .nav-left.menu").toggle('slow');
    });
}

window.onscroll = function () {
    // myFunction()
};

var menu = $("header .menu-top-fuild");
var scrollTop = menu.offsetTop;

// var FilterScroll = document.getElementById("box-filter-product");
// var FilterScrollTop = FilterScroll.offsetTop + 700;
var nHeightFS = $('#footer-contact').innerHeight() + 5750;
var h = window.innerHeight;


// var shopcartScrollTop = document.getElementById("form-add-cart");
// var cartScrollTop = shopcartScrollTop.offsetTop;


// var listProductSameScroll = document.getElementById("list-product-same");
// var ProductSameScroll = listProductSameScroll.offsetTop;

function myFunction() {
    if (window.pageYOffset > scrollTop) {
        $("#fix-menu-top").addClass('affix');
        // $("#nav-right").addClass('nav-right-scroll');
    } else {
        $("#fix-menu-top").removeClass('affix');
        // $("#nav-right").removeClass('nav-right-scroll');
    }
    console.log(window.pageYOffset)
    console.log(scrollTop)
    // if (window.pageYOffset > FilterScrollTop && window.pageYOffset < nHeightFS) {
    //     $(".box-filter-product .fil-all").addClass('filter-scroll-top');
    //     $('.filter-scroll-top').css('height', h - 200);
    //     $('.filter-scroll-top').css('overflow-y', 'scroll');
    // } else {
    //     $(".box-filter-product .fil-all").removeClass('filter-scroll-top');
    // }
    //
    //
    // if (window.pageYOffset > cartScrollTop && window.pageYOffset < ProductSameScroll) {
    //     $('#form-add-cart').addClass('cartscrollTop');
    // } else {
    //     $('#form-add-cart').remove('cartscrollTop');
    // }
}





