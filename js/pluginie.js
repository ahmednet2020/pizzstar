/*global $, alert, console, document*/
$(document).ready(function () {
    "use strict";
    var $offer = $(".wrapper .container .offer .slidercontent .slider .offerinfo");
    $offer.eq(0).css({"left": "0%"});
    $offer.eq(1).css({"left": "12%"});
    $offer.eq(2).css({"left": "24%"});
    $offer.eq(3).css({"left": "36%"});
    $offer.eq(4).css({"left": "48%"});
    $offer.eq(5).css({"left": "60%"});
    $offer.eq(6).css({"left": "72%"});
    $offer.eq(7).css({"left": "84%"});
    $offer.eq(8).css({"left": "96%"});
});
