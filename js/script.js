scroll
if ($(window).width() > 992) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            $('.navbar2').addClass('new-header-background');
            $('.nav-index-page-titles2').addClass('nav-index-page-titles-scroll');
            $(".nav-index-page-titles2 img").attr("src", "images/user-secondary.png");
        } else {
            $('.navbar2').removeClass('new-header-background');
            $('.nav-index-page-titles2').removeClass('nav-index-page-titles-scroll');
            $(".nav-index-page-titles2 img").attr("src", "images/user.png");
        }
    });
}


// hide all contents accept from the first div
$('.tabContent .tab:not(:first)').toggle();


$('.tabs li').click(function () {


    var position = $(this).position();
    var corresponding = $(this).data("id");

    // scroll to clicked tab with a little gap left to show previous tabs
    scroll = $('.tabs').scrollLeft();
    $('.tabs').animate({
        'scrollLeft': scroll + position.left - 30
    }, 200);

    // hide all content divs
    $('.tabContent .tab').hide();

    // show content of corresponding tab
    $('div.' + corresponding).toggle();

    // remove active class from currently not active tabs
    $('.tabs li').removeClass('active');

    // add active class to clicked tab
    $(this).addClass('active');
});

$('div a').click(function(e){
    e.preventDefault();
    $('li.active').next('li').trigger('click');
});

//they are opposite because we are working with arabic langauage
$('.previous').click(function(e){
    e.preventDefault();
    $('li.active').next('li').trigger('click');
});
$('.next').click(function(e){
    e.preventDefault();
    $('li.active').prev('li').trigger('click');
});
//test side communication pill
$(document).ready(function () {
    function contactStickerDiv() {
        $(".side-communincation").toggleClass("add-click-effect");
        $(".btn-div").toggleClass("btn-div-open");
        var iconDr = lang == 1 ? "fa-chevron-right" : "fa-chevron-left";
        $(".side-communincation .fa").toggleClass(iconDr + " fa-times-circle-o");
    }

    $(".btn-div").click(function () {
        contactStickerDiv();
    });
});

if ($(window).width() > 992) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.fixed-box').addClass('fixed-box-new');
        } else {
            $('.fixed-box').removeClass('fixed-box-new');
        }
    });
}
$(document).ready(function () {

//console.log($(document).height());

    var heightDoc = $(document).height();
    $(window).scroll(function () {
        // console.log(heightDoc);
        //  console.log($(window).scrollTop());
        //console.log($(window).height());
        if (($(window).scrollTop() + 700) > heightDoc - 500) {
            //console.log("bottom here s");
            $('.fixed-box').fadeOut();
        } else {
            $('.fixed-box').fadeIn();

        }
    });

});

function removeActive(){
    $(".courses-img").removeClass("active");
    $(".account-menu").removeClass("active")
}
function addActive(){
    $(".courses-img").addClass("active");
    $(".account-menu").addClass("active")
}
