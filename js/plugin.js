/*global $, console , document, window*/
$(document).ready(function () {
    "use strict";
    /*height of header*/
    $(".header .slider").css("height", $(window).height());
    $(window).on("resize", function () {
        $(".header .slider").css("height", $(window).height());
    });
    /*navbar*/
    $(".togglenav").on("click", function (e) {
        $(".navbar .ulcontent > ul").toggleClass("left");
        e.preventDefault();
    });
    /*menu*/
    $(".menu li").on("click", function () {
        var $class = $(this).attr("class");
        $(this).attr("id", "active").siblings().removeAttr("id");
        $(".menu .imgs img").hide();
        $(".menu .imgs img." + $class).fadeIn();
    });
    /*button to top*/
    $(window).on("scroll", function () {
        if ($(this).scrollTop() >= 100) {
            $("button#top").show(400);
        } else {
            $("button#top").hide(400);
        }
    });

    $("button#top").click(function () {
        $("html, body").animate({scrollTop: 0}, 500);
    });
    /*offer*/
    $(".offer").on("click", "button.next", function (e) {
        $(".slider > .offerinfo").first().appendTo(".offer .slider");
        e.preventDefault();
    });
    $(".offer").on("click", "button.prev", function (e) {
        $(".slider > .offerinfo").last().prependTo(".offer .slider");
        e.preventDefault();
    });
    /*modal*/
    function show1() {
        $("#imgview").show(400);
        $("#imagefull").attr("src", ($(".onactive img").attr("src")));
        $("#caption").html("");
        $("#caption").html($(".onactive img").next(".info").html());
    }
    $(".latestproducts, .menu .imgs").on("click", "img", function () {
        $("body").find(".onactive").removeClass("onactive");
        $(this).parent("div").addClass("onactive");
        show1();
    });
    $("#imgview").on("click", "#close", function (e) {
        $("#imgview").hide(400);
        e.preventDefault();
    });
    $("#imgview .right").on("click", function (e) {
        $(".onactive").next("div").addClass("onactive").siblings().removeClass("onactive");
        show1();
    });

    $("#imgview .left").on("click", function (e) {
        $(".onactive").prev("div").addClass("onactive").siblings().removeClass("onactive");
        show1();
    });
    /*links*/
    $(".copyright .links a").hover(function () {
        $(this).siblings().fadeTo(0, 0.5);

    }, function () {
        $(".copyright .links a").fadeTo(0, 1);
    });
});
