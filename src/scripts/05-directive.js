app.directive('bzCommentArea', ['bzCommentAreaIcons', function (icons) {
    'use strict';

    var ELEMENT_NODE = 1,
        TEXT_NODE = 3,
        TAGS_BLOCK = ['p', 'div', 'pre', 'form'],
        KEY_ESC = 27,
        KEY_TAB = 9;
var emojis = [
    "smile", "iphone", "girl", "smiley", "heart", "kiss", "copyright", "coffee",
    "a", "ab", "airplane", "alien", "ambulance", "angel", "anger", "angry",
    "arrow_forward", "arrow_left", "arrow_lower_left", "arrow_lower_right",
    "arrow_right", "arrow_up", "arrow_upper_left", "arrow_upper_right",
    "art", "astonished", "atm", "b", "baby", "baby_chick", "baby_symbol",
    "balloon", "bamboo", "bank", "barber", "baseball", "basketball", "bath",
    "bear", "beer", "beers", "beginner", "bell", "bento", "bike", "bikini",
    "bird", "birthday", "black_square", "blue_car", "blue_heart", "blush",
    "boar", "boat", "bomb", "book", "boot", "bouquet", "bow", "bowtie",
    "boy", "bread", "briefcase", "broken_heart", "bug", "bulb",
    "person_with_blond_hair", "phone", "pig", "pill", "pisces", "plus1",
    "point_down", "point_left", "point_right", "point_up", "point_up_2",
    "police_car", "poop", "post_office", "postbox", "pray", "princess",
    "punch", "purple_heart", "question", "rabbit", "racehorse", "radio",
    "up", "us", "v", "vhs", "vibration_mode", "virgo", "vs", "walking",
    "warning", "watermelon", "wave", "wc", "wedding", "whale", "wheelchair",
    "white_square", "wind_chime", "wink", "wink2", "wolf", "woman",
    "womans_hat", "womens", "x", "yellow_heart", "zap", "zzz", "+1",
    "-1"
];

var names = ["Jacob","Isabella","Ethan","Emma","Michael","Olivia","Alexander","Sophia","William","Ava","Joshua","Emily","Daniel","Madison","Jayden","Abigail","Noah","Chloe","дЅ еҐЅ","дЅ дЅ дЅ "];

var names = $.map(names,function(value,i) {
    return {'id':i,'name':value,'email':value+"@email.com"};
});
var emojis = $.map(emojis, function(value, i) {return {key: value, name:value}});
    var bzCommentArea = {
        restrict: 'C',
        scope: true,
        require: '?ngModel',
        replace: false,
        link: function(scope, element, attrs, ngModel) {
            element.atwho({
                at: ":",
                data: emojis,
                tpl:"<li data-value='${key}'>${name} <img src='http://a248.e.akamai.net/assets.github.com/images/icons/emoji/${name}.png'  height='20' width='20' /></li>",
                insert_tpl: "<img src='http://a248.e.akamai.net/assets.github.com/images/icons/emoji/${name}.png'  height='20' width='20' />",
                show_the_at: false
            }).atwho({
                at: "@",
                data: names,
                tpl: "<li data-value='@${name}'>${name}</li>"
            });
            
            element.on('change', function(val) {
                $('img', element).each(function(n, i) {
                console.info(i);
                    $(i).on('resizestart', function(e) { return false });
                });
            });
        }
    };
    return bzCommentArea;
}]);    