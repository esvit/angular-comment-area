(function(angular, factory) {
    if (typeof define === 'function' && define.amd) {
        // bz - http://bazalt-cms.com/
        define('bzCommentArea', ['jquery', 'angular'], function($, angular) {
            return factory(angular);
        });
    } else {
        return factory(angular);
    }
}(angular || null, function(angular) {
var app = angular.module('bzCommentArea', ['ngAnimate']);
app.factory('bzCommentAreaIcons', function() {

    var emoticons = [],
        people = [
            'bowtie',
            'smile',
            'laughing',
            'blush',
            'smiley',
            'relaxed',
            'smirk',
            'heart_eyes',
            'kissing_heart',
            'kissing_closed_eyes',
            'flushed',
            'relieved',
            'satisfied',
            'grin',
            'wink',
            'wink2',
            'stuck_out_tongue_winking_eye',
            'stuck_out_tongue_closed_eyes',
            'grinning',
            'kissing',
            'kissing_smiling_eyes',
            'stuck_out_tongue',
            'sleeping',
            'worried',
            'frowning',
            'anguished',
            'open_mouth',
            'grimacing',
            'confused',
            'hushed',
            'expressionless',
            'unamused',
            'sweat_smile',
            'sweat',
            'weary',
            'pensive',
            'disappointed',
            'confounded',
            'fearful',
            'cold_sweat',
            'persevere',
            'cry',
            'sob',
            'joy',
            'scream',
            'astonished',
            'neckbeard',
            'tired_face',
            'angry',
            'rage',
            'triumph',
            'sleepy',
            'yum',
            'mask',
            'sunglasses',
            'dizzy_face',
            'imp',
            'smiling_imp',
            'neutral_face',
            'no_mouth',
            'innocent',
            'alien',
            'yellow_heart',
            'blue_heart',
            'purple_heart',
            'heart',
            'green_heart',
            'broken_heart',
            'heartbeat',
            'heartpulse',
            'two_hearts',
            'revolving_hearts',
            'cupid',
            'sparkling_heart',
            'sparkles',
            'star',
            'star2',
            'dizzy',
            'boom',
            //'collision',
            'anger',
            'exclamation',
            'question',
            'grey_exclamation',
            'grey_question',
            'zzz',
            'dash',
            'sweat_drops',
            'notes',
            'musical_note',
            'fire',
            //'hankey',
            //'poop',
            'shit',
            'thumbsup',
            'thumbsdown',
            'ok_hand',
            'punch',
            //'facepunch',
            'fist',
            'v',
            'wave',
            'hand',
            'open_hands',
            'point_up',
            'point_down',
            'point_left',
            'point_right',
            'raised_hands',
            'pray',
            'point_up_2',
            'clap',
            'muscle',
            'metal',
            'walking',
            'runner',
            //'running',
            'couple',
            'family',
            'two_men_holding_hands',
            'two_women_holding_hands',
            'dancer',
            'dancers',
            'ok_woman',
            'no_good',
            'information_desk_person',
            'raised_hand',
            'bride_with_veil',
            'person_with_pouting_face',
            'person_frowning',
            'bow',
            'couplekiss',
            'couple_with_heart',
            'massage',
            'haircut',
            'nail_care',
            'boy',
            'girl',
            'woman',
            'man',
            'baby',
            'older_woman',
            'older_man',
            'person_with_blond_hair',
            'man_with_gua_pi_mao',
            'man_with_turban',
            'construction_worker',
            'cop',
            'angel',
            'princess',
            'smiley_cat',
            'smile_cat',
            'heart_eyes_cat',
            'kissing_cat',
            'smirk_cat',
            'scream_cat',
            'crying_cat_face',
            'joy_cat',
            'pouting_cat',
            'japanese_ogre',
            'japanese_goblin',
            'see_no_evil',
            'hear_no_evil',
            'speak_no_evil',
            'guardsman',
            'skull',
            'feet',
            'lips',
            'kiss',
            'droplet',
            'ear',
            'eyes',
            'nose',
            'tongue',
            'love_letter',
            'bust_in_silhouette',
            'busts_in_silhouette',
            'speech_balloon',
            'thought_balloon',
            //'feelsgood',
            //'finnadie',
            //'goberserk',
            //'godmode',
            //'hurtrealbad',
            //'rage1',
            //'rage2',
            //'rage3',
            //'rage4',
            //'suspect',
            'trollface'
        ],
        nature = [
            'sunny',
            'umbrella',
            'cloud',
            'snowflake',
            'snowman',
            'zap',
            'cyclone',
            'foggy',
            'ocean',
            'cat',
            'dog',
            'mouse',
            'hamster',
            'rabbit',
            'wolf',
            'frog',
            'tiger',
            'koala',
            'bear',
            'pig',
            'pig_nose',
            'cow',
            'boar',
            'monkey_face',
            'monkey',
            'horse',
            'racehorse',
            'camel',
            'sheep',
            'elephant',
            'panda_face',
            'snake',
            'bird',
            'baby_chick',
            'hatched_chick',
            'hatching_chick',
            'chicken',
            'penguin',
            'turtle',
            'bug',
            'honeybee',
            'ant',
            'beetle',
            'snail',
            'octopus',
            'tropical_fish',
            'fish',
            'whale',
            'whale2',
            'dolphin',
            'cow2',
            'ram',
            'rat',
            'water_buffalo',
            'tiger2',
            'rabbit2',
            'dragon',
            'goat',
            'rooster',
            'dog2',
            'pig2',
            'mouse2',
            'ox',
            'dragon_face',
            'blowfish',
            'crocodile',
            'dromedary_camel',
            'leopard',
            'cat2',
            'poodle',
            'paw_prints',
            'bouquet',
            'cherry_blossom',
            'tulip',
            'four_leaf_clover',
            'rose',
            'sunflower',
            'hibiscus',
            'maple_leaf',
            'leaves',
            'fallen_leaf',
            'herb',
            'mushroom',
            'cactus',
            'palm_tree',
            'evergreen_tree',
            'deciduous_tree',
            'chestnut',
            'seedling',
            'blossom',
            'ear_of_rice',
            'shell',
            'globe_with_meridians',
            'sun_with_face',
            'full_moon_with_face',
            'new_moon_with_face',
            'new_moon',
            'waxing_crescent_moon',
            'first_quarter_moon',
            'waxing_gibbous_moon',
            'full_moon',
            'waning_gibbous_moon',
            'last_quarter_moon',
            'waning_crescent_moon',
            'last_quarter_moon_with_face',
            'first_quarter_moon_with_face',
            'moon',
            'earth_africa',
            'earth_americas',
            'earth_asia',
            'volcano',
            'milky_way',
            'partly_sunny',
            'octocat',
            'squirrel'
        ],
        objects = [
            'bamboo',
            'gift_heart',
            'dolls',
            'school_satchel',
            'mortar_board',
            'flags',
            'fireworks',
            'sparkler',
            'wind_chime',
            'rice_scene',
            'jack_o_lantern',
            'ghost',
            'santa',
            'christmas_tree',
            'gift',
            'bell',
            'no_bell',
            'tanabata_tree',
            'tada',
            'confetti_ball',
            'balloon',
            'crystal_ball',
            'cd',
            'dvd',
            'floppy_disk',
            'camera',
            'video_camera',
            'movie_camera',
            'computer',
            'tv',
            'iphone',
            'phone',
            'telephone',
            'telephone_receiver',
            'pager',
            'fax',
            'minidisc',
            'vhs',
            'sound',
            'speaker',
            'mute',
            'loudspeaker',
            'mega',
            'hourglass',
            'hourglass_flowing_sand',
            'alarm_clock',
            'watch',
            'radio',
            'satellite',
            'loop',
            'mag',
            'mag_right',
            'unlock',
            'lock',
            'lock_with_ink_pen',
            'closed_lock_with_key',
            'key',
            'bulb',
            'flashlight',
            'high_brightness',
            'low_brightness',
            'electric_plug',
            'battery',
            'calling',
            'email',
            'mailbox',
            'postbox',
            'bath',
            'bathtub',
            'shower',
            'toilet',
            'wrench',
            'nut_and_bolt',
            'hammer',
            'seat',
            'moneybag',
            'yen',
            'dollar',
            'pound',
            'euro',
            'credit_card',
            'money_with_wings',
            'e-mail',
            'inbox_tray',
            'outbox_tray',
            'envelope',
            'incoming_envelope',
            'postal_horn',
            'mailbox_closed',
            'mailbox_with_mail',
            'mailbox_with_no_mail',
            'door',
            'smoking',
            'bomb',
            'gun',
            'hocho',
            'pill',
            'syringe',
            'page_facing_up',
            'page_with_curl',
            'bookmark_tabs',
            'bar_chart',
            'chart_with_upwards_trend',
            'chart_with_downwards_trend',
            'scroll',
            'clipboard',
            'calendar',
            'date',
            'card_index',
            'file_folder',
            'open_file_folder',
            'scissors',
            'pushpin',
            'paperclip',
            'black_nib',
            'pencil2',
            'straight_ruler',
            'triangular_ruler',
            'closed_book',
            'green_book',
            'blue_book',
            'orange_book',
            'notebook',
            'notebook_with_decorative_cover',
            'ledger',
            'books',
            'bookmark',
            'name_badge',
            'microscope',
            'telescope',
            'newspaper',
            'football',
            'basketball',
            'soccer',
            'baseball',
            'tennis',
            'eightball',
            'rugby_football',
            'bowling',
            'golf',
            'mountain_bicyclist',
            'bicyclist',
            'horse_racing',
            'snowboarder',
            'swimmer',
            'surfer',
            'ski',
            'spades',
            'hearts',
            'clubs',
            'diamonds',
            'gem',
            'ring',
            'trophy',
            'musical_score',
            'musical_keyboard',
            'violin',
            'space_invader',
            'video_game',
            'black_joker',
            'flower_playing_cards',
            'game_die',
            'dart',
            'mahjong',
            'clapper',
            'memo',
            'pencil',
            'book',
            'art',
            'microphone',
            'headphones',
            'trumpet',
            'saxophone',
            'guitar',
            'shoe',
            'sandal',
            'high_heel',
            'lipstick',
            'boot',
            'shirt',
            'tshirt',
            'necktie',
            'womans_clothes',
            'dress',
            'running_shirt_with_sash',
            'jeans',
            'kimono',
            'bikini',
            'ribbon',
            'tophat',
            'crown',
            'womans_hat',
            'mans_shoe',
            'closed_umbrella',
            'briefcase',
            'handbag',
            'pouch',
            'purse',
            'eyeglasses',
            'fishing_pole_and_fish',
            'coffee',
            'tea',
            'sake',
            'baby_bottle',
            'beer',
            'beers',
            'cocktail',
            'tropical_drink',
            'wine_glass',
            'fork_and_knife',
            'pizza',
            'hamburger',
            'fries',
            'poultry_leg',
            'meat_on_bone',
            'spaghetti',
            'curry',
            'fried_shrimp',
            'bento',
            'sushi',
            'fish_cake',
            'rice_ball',
            'rice_cracker',
            'rice',
            'ramen',
            'stew',
            'oden',
            'dango',
            'egg',
            'bread',
            'doughnut',
            'custard',
            'icecream',
            'ice_cream',
            'shaved_ice',
            'birthday',
            'cake',
            'cookie',
            'chocolate_bar',
            'candy',
            'lollipop',
            'honey_pot',
            'apple',
            'green_apple',
            'tangerine',
            'lemon',
            'cherries',
            'grapes',
            'watermelon',
            'strawberry',
            'peach',
            'melon',
            'banana',
            'pear',
            'pineapple',
            'sweet_potato',
            'eggplant',
            'tomato',
            'corn'
        ],
        places = [
            'onezeronine',
            'house',
            'house_with_garden',
            'school',
            'office',
            'post_office',
            'hospital',
            'bank',
            'convenience_store',
            'love_hotel',
            'hotel',
            'wedding',
            'church',
            'department_store',
            'european_post_office',
            'city_sunrise',
            'city_sunset',
            'japanese_castle',
            'european_castle',
            'tent',
            'factory',
            'tokyo_tower',
            'japan',
            'mount_fuji',
            'sunrise_over_mountains',
            'sunrise',
            'stars',
            'statue_of_liberty',
            'bridge_at_night',
            'carousel_horse',
            'rainbow',
            'ferris_wheel',
            'fountain',
            'roller_coaster',
            'ship',
            'speedboat',
            'boat',
            'sailboat',
            'rowboat',
            'anchor',
            'rocket',
            'airplane',
            'helicopter',
            'steam_locomotive',
            'tram',
            'mountain_railway',
            'bike',
            'aerial_tramway',
            'suspension_railway',
            'mountain_cableway',
            'tractor',
            'blue_car',
            'oncoming_automobile',
            'car',
            'red_car',
            'taxi',
            'oncoming_taxi',
            'articulated_lorry',
            'bus',
            'oncoming_bus',
            'rotating_light',
            'police_car',
            'oncoming_police_car',
            'fire_engine',
            'ambulance',
            'minibus',
            'truck',
            'train',
            'station',
            'train2',
            'bullettrain_front',
            'bullettrain_side',
            'light_rail',
            'monorail',
            'railway_car',
            'trolleybus',
            'ticket',
            'fuelpump',
            'vertical_traffic_light',
            'traffic_light',
            'warning',
            'construction',
            'beginner',
            'atm',
            'slot_machine',
            'busstop',
            'barber',
            'hotsprings',
            'checkered_flag',
            'crossed_flags',
            'izakaya_lantern',
            'moyai',
            'circus_tent',
            'performing_arts',
            'round_pushpin',
            'triangular_flag_on_post',
            'jp',
            'kr',
            'cn',
            'us',
            'fr',
            'es',
            'it',
            'ru',
            'gb',
            'uk',
            'de'
        ],
        symbols = [
            'one',
            'two',
            'three',
            'four',
            'five',
            'six',
            'seven',
            'eight',
            'nine',
            'keycap_ten',
            'onetwothreefour',
            'zero',
            'hash',
            'symbols',
            'arrow_backward',
            'arrow_down',
            'arrow_forward',
            'arrow_left',
            'capital_abcd',
            'abcd',
            'abc',
            'arrow_lower_left',
            'arrow_lower_right',
            'arrow_right',
            'arrow_up',
            'arrow_upper_left',
            'arrow_upper_right',
            'arrow_double_down',
            'arrow_double_up',
            'arrow_down_small',
            'arrow_heading_down',
            'arrow_heading_up',
            'leftwards_arrow_with_hook',
            'arrow_right_hook',
            'left_right_arrow',
            'arrow_up_down',
            'arrow_up_small',
            'arrows_clockwise',
            'arrows_counterclockwise',
            'rewind',
            'fast_forward',
            'information_source',
            'ok',
            'twisted_rightwards_arrows',
            'repeat',
            'repeat_one',
            'new',
            'top',
            'up',
            'cool',
            'free',
            'ng',
            'cinema',
            'koko',
            'signal_strength',
            'u5272',
            'u5408',
            'u55b6',
            'u6307',
            'u6708',
            'u6709',
            'u6e80',
            'u7121',
            'u7533',
            'u7a7a',
            'u7981',
            'sa',
            'restroom',
            'mens',
            'womens',
            'baby_symbol',
            'no_smoking',
            'parking',
            'wheelchair',
            'metro',
            'baggage_claim',
            'accept',
            'wc',
            'potable_water',
            'put_litter_in_its_place',
            'secret',
            'congratulations',
            'm',
            'passport_control',
            'left_luggage',
            'customs',
            'ideograph_advantage',
            'cl',
            'sos',
            'id',
            'no_entry_sign',
            'underage',
            'no_mobile_phones',
            'do_not_litter',
            'non-potable_water',
            'no_bicycles',
            'no_pedestrians',
            'children_crossing',
            'no_entry',
            'eight_spoked_asterisk',
            'eight_pointed_black_star',
            'heart_decoration',
            'vs',
            'vibration_mode',
            'mobile_phone_off',
            'chart',
            'currency_exchange',
            'aries',
            'taurus',
            'gemini',
            'cancer',
            'leo',
            'virgo',
            'libra',
            'scorpius',
            'sagittarius',
            'capricorn',
            'aquarius',
            'pisces',
            'ophiuchus',
            'six_pointed_star',
            'negative_squared_cross_mark',
            'a',
            'b',
            'ab',
            'o2',
            'diamond_shape_with_a_dot_inside',
            'recycle',
            'end',
            'on',
            'soon',
            'clock1',
            'clock130',
            'clock10',
            'clock1030',
            'clock11',
            'clock1130',
            'clock12',
            'clock1230',
            'clock2',
            'clock230',
            'clock3',
            'clock330',
            'clock4',
            'clock430',
            'clock5',
            'clock530',
            'clock6',
            'clock630',
            'clock7',
            'clock730',
            'clock8',
            'clock830',
            'clock9',
            'clock930',
            'heavy_dollar_sign',
            'copyright',
            'registered',
            'tm',
            'x',
            'heavy_exclamation_mark',
            'bangbang',
            'interrobang',
            'o',
            'heavy_multiplication_x',
            'heavy_plus_sign',
            'heavy_minus_sign',
            'heavy_division_sign',
            'white_flower',
            'onehundred',
            'heavy_check_mark',
            'ballot_box_with_check',
            'radio_button',
            'link',
            'curly_loop',
            'wavy_dash',
            'part_alternation_mark',
            'trident',
            'black_square',
            'white_square',
            'white_check_mark',
            'black_square_button',
            'white_square_button',
            'black_circle',
            'white_circle',
            'red_circle',
            'large_blue_circle',
            'large_blue_diamond',
            'large_orange_diamond',
            'small_blue_diamond',
            'small_orange_diamond',
            'small_red_triangle',
            'small_red_triangle_down',
            'shipit'
        ];

    return {
        //emoticons: emoticons,
        people: people,
        nature: nature,
        places: places,
        objects: objects,
        symbols: symbols
    };
});
var bzCommentAreaController = ['$scope', 'bzCommentAreaIcons', function($scope, icons) {
    $scope.icons = icons;

    var htmlEntities = function(str) {
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    };

    $scope.emptyGif = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

    $scope.createIcon = function(emoji) {
        var text = ':' + emoji + ':';
        return '<img src="' + $scope.emptyGif + '" class="emojify ' + emoji + '" alt="' + htmlEntities(text) + '">';
    };

    $scope.showSmiles = function() {
        $scope.selection = $scope.saveSelection();
        $scope.$showSmiles = !$scope.$showSmiles;
    };

    $scope.insert = function(emoji) {
        var $img = $($scope.createIcon(emoji));
        if ($img[0].attachEvent) {
            $img[0].attachEvent('onresizestart', function(e) { e.returnValue = false; }, false);
        }

        $scope.editor.focus();
        if ($scope.selection) {
            $scope.restoreSelection($scope.selection);
        }
        try { $scope.replaceSelection($img[0]); } catch (e) {}
        $scope.editor.trigger('paste');
        $scope.$showSmiles = false;
    };

    $scope.restoreSelection = (function() {
        if (window.getSelection) {
            return function(savedSelection) {
                var sel = window.getSelection();
                sel.removeAllRanges();
                for (var i = 0, len = savedSelection.length; i < len; ++i) {
                    sel.addRange(savedSelection[i]);
                }
            };
        } else if (document.selection && document.selection.createRange) {
            return function(savedSelection) {
                if (savedSelection) {
                    savedSelection.select();
                }
            };
        }
    })();

    $scope.replaceSelection = (function() {
        if (window.getSelection) {
            return function(content) {
                var range, sel = window.getSelection();
                var node = typeof content === 'string' ? document.createTextNode(content) : content;
                if (sel.getRangeAt && sel.rangeCount) {
                    range = sel.getRangeAt(0);
                    range.deleteContents();
                    range.insertNode(document.createTextNode(' '));
                    range.insertNode(node);
                    range.setStart(node, 0);

                    window.setTimeout(function() {
                        range = document.createRange();
                        range.setStartAfter(node);
                        range.collapse(true);
                        sel.removeAllRanges();
                        sel.addRange(range);
                    }, 0);
                }
            }
        } else if (document.selection && document.selection.createRange) {
            return function(content) {
                var range = document.selection.createRange();
                if (typeof content === 'string') {
                    range.text = content;
                } else {
                    range.pasteHTML(content.outerHTML);
                }
            }
        }
    })();

    $scope.saveSelection = (function() {
        if (window.getSelection) {
            return function() {
                var sel = window.getSelection(), ranges = [];
                if (sel.rangeCount) {
                    for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                        ranges.push(sel.getRangeAt(i));
                    }
                }
                return ranges;
            };
        } else if (document.selection && document.selection.createRange) {
            return function() {
                var sel = document.selection;
                return (sel.type.toLowerCase() !== 'none') ? sel.createRange() : null;
            };
        }
    })();
}];
app.directive('bzCommentArea', ['bzCommentAreaIcons', function (icons) {
    'use strict';

    var ELEMENT_NODE = 1,
        TEXT_NODE = 3,
        TAGS_BLOCK = ['p', 'div', 'pre', 'form'],
        KEY_ESC = 27,
        KEY_TAB = 9;

    var bzCommentArea = {
        restrict: 'C',
        scope: true,
        require: '?ngModel',
        replace: true,
        controller: bzCommentAreaController,
        templateUrl: '/src/bz-comment-area/area.html',
        link: function(scope, element, attrs, ngModel) {
            var editor, val;


            scope.editor = editor = $('<div>').addClass('emoji-wysiwyg-editor')
            //this.$editor.text($textarea.val());
            .attr({contenteditable: 'true'})
            .on('blur keyup change paste', function() {
                    ngModel.$setViewValue(editor.html());
                    if (!scope.$$phase) {
                        scope.$apply();
                    }
                })
            .on('mousedown focus', function() { document.execCommand('enableObjectResizing', false, false); })
            .on('blur', function() { document.execCommand('enableObjectResizing', true, true); })
            .on('keydown', function(e) {
                if (e.keyCode === KEY_ESC) {
                    scope.$showSmiles = false;
                }
                if (e.keyCode === KEY_TAB) {
                    scope.showSmiles();
                }
            });

            var escapeRegex = function(str) {
                return (str + '').replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
            };

            element.addClass('form-control').find('textarea').hide().after(editor);

            ngModel.$render = function() {
                editor.html(ngModel.$viewValue || '');
            };

            // set value, replace text by smiles
            ngModel.$formatters.unshift(function (modelValue) {
                for (var i = 0; i < icons.people.length; i++) {
                    var key = icons.people[i];
                    modelValue = modelValue.replace(new RegExp(escapeRegex(':' + key + ':'), 'g'), scope.createIcon(key));
                }
                return modelValue;
            });

            // replace html by text
            ngModel.$parsers.unshift(function (viewValue) {
                return val();
            });

            val = function() {
                var lines = [];
                var line  = [];

                var flush = function() {
                    lines.push(line.join(''));
                    line = [];
                };

                var sanitizeNode = function(node) {
                    if (node.nodeType === TEXT_NODE) {
                        line.push(node.nodeValue);
                    } else if (node.nodeType === ELEMENT_NODE) {
                        var tagName = node.tagName.toLowerCase();
                        var isBlock = TAGS_BLOCK.indexOf(tagName) !== -1;

                        if (isBlock && line.length) flush();

                        if (tagName === 'img') {
                            var alt = node.getAttribute('alt') || '';
                            if (alt) line.push(alt);
                            return;
                        } else if (tagName === 'br') {
                            flush();
                        }

                        var children = node.childNodes;
                        for (var i = 0; i < children.length; i++) {
                            sanitizeNode(children[i]);
                        }

                        if (isBlock && line.length) flush();
                    }
                };

                var children = editor[0].childNodes;
                for (var i = 0; i < children.length; i++) {
                    sanitizeNode(children[i]);
                }

                if (line.length) flush();

                return lines.join('\n');
            };
        }
    };
    return bzCommentArea;
}]);
angular.module('ngTable').run(['$templateCache', function ($templateCache) {
	$templateCache.put('bz-comment-area/area.html', '<div class="bz-comment-area-container form-control"> <div ng-show="$showSmiles" class="emoji-container"> <div ng-repeat="(name, smiles) in icons"> <div ng-if="name==\'people\'"> <a href="" ng-repeat="smile in smiles" ng-click="insert(smile)"><img ng-class="smile" ng-src="{{ emptyGif }}" class="emojify"/></a> </div> </div> </div> <textarea></textarea> <div title="Використовуйте TAB, щоб швидше відкривати смайли" class="emoji_smile emoji_smile_animation fl_l" ng-click="showSmiles()" ng-class="{\'emoji_smile_on\': $showSmiles, \'emoji_smile_off\': !$showSmiles}" style="opacity: 0.7;"> <div class="emojify_on smiley"></div> <div class="emojify smiley"></div> </div> <p class="drag-and-drop"> <span class="default"> Attach images by dragging &amp; dropping, <input type="file" multiple="multiple" class="manual-file-chooser js-manual-file-chooser"> <a class="manual-file-chooser-text" href="#">selecting them</a>, or pasting from the clipboard. </span> <span class="loading"> <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16"> Uploading your images… </span> <span class="error bad-file"> Unfortunately we don\'t support that file type yet. Please use PNG, GIF, or JPG. </span> <span class="error too-big"> Yowza, that\'s a big file. Please submit an image file smaller than 5MB. </span> <span class="error bad-browser"> This browser doesn\'t support image attachments. </span> <span class="error failed-request"> Something went really wrong and we can\'t process that image. </span> </p> </div>');
}]);
    return app;
}));