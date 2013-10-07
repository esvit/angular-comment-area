/*! bzCommentArea v0.1.0 by Vitalii Savchuk(esvit666@gmail.com) - https://github.com/esvit/angular-comment-area - New BSD License */
!function(a,b){return"function"==typeof define&&define.amd?(define("bzCommentArea",["jquery","angular"],function(a,c){return b(c)}),void 0):b(a)}(angular||null,function(a){var b=a.module("bzCommentArea",["ngAnimate"]);b.factory("bzCommentAreaIcons",function(){var a=["bowtie","smile","laughing","blush","smiley","relaxed","smirk","heart_eyes","kissing_heart","kissing_closed_eyes","flushed","relieved","satisfied","grin","wink","wink2","stuck_out_tongue_winking_eye","stuck_out_tongue_closed_eyes","grinning","kissing","kissing_smiling_eyes","stuck_out_tongue","sleeping","worried","frowning","anguished","open_mouth","grimacing","confused","hushed","expressionless","unamused","sweat_smile","sweat","weary","pensive","disappointed","confounded","fearful","cold_sweat","persevere","cry","sob","joy","scream","astonished","neckbeard","tired_face","angry","rage","triumph","sleepy","yum","mask","sunglasses","dizzy_face","imp","smiling_imp","neutral_face","no_mouth","innocent","alien","yellow_heart","blue_heart","purple_heart","heart","green_heart","broken_heart","heartbeat","heartpulse","two_hearts","revolving_hearts","cupid","sparkling_heart","sparkles","star","star2","dizzy","boom","anger","exclamation","question","grey_exclamation","grey_question","zzz","dash","sweat_drops","notes","musical_note","fire","shit","thumbsup","thumbsdown","ok_hand","punch","fist","v","wave","hand","open_hands","point_up","point_down","point_left","point_right","raised_hands","pray","point_up_2","clap","muscle","metal","walking","runner","couple","family","two_men_holding_hands","two_women_holding_hands","dancer","dancers","ok_woman","no_good","information_desk_person","raised_hand","bride_with_veil","person_with_pouting_face","person_frowning","bow","couplekiss","couple_with_heart","massage","haircut","nail_care","boy","girl","woman","man","baby","older_woman","older_man","person_with_blond_hair","man_with_gua_pi_mao","man_with_turban","construction_worker","cop","angel","princess","smiley_cat","smile_cat","heart_eyes_cat","kissing_cat","smirk_cat","scream_cat","crying_cat_face","joy_cat","pouting_cat","japanese_ogre","japanese_goblin","see_no_evil","hear_no_evil","speak_no_evil","guardsman","skull","feet","lips","kiss","droplet","ear","eyes","nose","tongue","love_letter","bust_in_silhouette","busts_in_silhouette","speech_balloon","thought_balloon","trollface"],b=["sunny","umbrella","cloud","snowflake","snowman","zap","cyclone","foggy","ocean","cat","dog","mouse","hamster","rabbit","wolf","frog","tiger","koala","bear","pig","pig_nose","cow","boar","monkey_face","monkey","horse","racehorse","camel","sheep","elephant","panda_face","snake","bird","baby_chick","hatched_chick","hatching_chick","chicken","penguin","turtle","bug","honeybee","ant","beetle","snail","octopus","tropical_fish","fish","whale","whale2","dolphin","cow2","ram","rat","water_buffalo","tiger2","rabbit2","dragon","goat","rooster","dog2","pig2","mouse2","ox","dragon_face","blowfish","crocodile","dromedary_camel","leopard","cat2","poodle","paw_prints","bouquet","cherry_blossom","tulip","four_leaf_clover","rose","sunflower","hibiscus","maple_leaf","leaves","fallen_leaf","herb","mushroom","cactus","palm_tree","evergreen_tree","deciduous_tree","chestnut","seedling","blossom","ear_of_rice","shell","globe_with_meridians","sun_with_face","full_moon_with_face","new_moon_with_face","new_moon","waxing_crescent_moon","first_quarter_moon","waxing_gibbous_moon","full_moon","waning_gibbous_moon","last_quarter_moon","waning_crescent_moon","last_quarter_moon_with_face","first_quarter_moon_with_face","moon","earth_africa","earth_americas","earth_asia","volcano","milky_way","partly_sunny","octocat","squirrel"],c=["bamboo","gift_heart","dolls","school_satchel","mortar_board","flags","fireworks","sparkler","wind_chime","rice_scene","jack_o_lantern","ghost","santa","christmas_tree","gift","bell","no_bell","tanabata_tree","tada","confetti_ball","balloon","crystal_ball","cd","dvd","floppy_disk","camera","video_camera","movie_camera","computer","tv","iphone","phone","telephone","telephone_receiver","pager","fax","minidisc","vhs","sound","speaker","mute","loudspeaker","mega","hourglass","hourglass_flowing_sand","alarm_clock","watch","radio","satellite","loop","mag","mag_right","unlock","lock","lock_with_ink_pen","closed_lock_with_key","key","bulb","flashlight","high_brightness","low_brightness","electric_plug","battery","calling","email","mailbox","postbox","bath","bathtub","shower","toilet","wrench","nut_and_bolt","hammer","seat","moneybag","yen","dollar","pound","euro","credit_card","money_with_wings","e-mail","inbox_tray","outbox_tray","envelope","incoming_envelope","postal_horn","mailbox_closed","mailbox_with_mail","mailbox_with_no_mail","door","smoking","bomb","gun","hocho","pill","syringe","page_facing_up","page_with_curl","bookmark_tabs","bar_chart","chart_with_upwards_trend","chart_with_downwards_trend","scroll","clipboard","calendar","date","card_index","file_folder","open_file_folder","scissors","pushpin","paperclip","black_nib","pencil2","straight_ruler","triangular_ruler","closed_book","green_book","blue_book","orange_book","notebook","notebook_with_decorative_cover","ledger","books","bookmark","name_badge","microscope","telescope","newspaper","football","basketball","soccer","baseball","tennis","eightball","rugby_football","bowling","golf","mountain_bicyclist","bicyclist","horse_racing","snowboarder","swimmer","surfer","ski","spades","hearts","clubs","diamonds","gem","ring","trophy","musical_score","musical_keyboard","violin","space_invader","video_game","black_joker","flower_playing_cards","game_die","dart","mahjong","clapper","memo","pencil","book","art","microphone","headphones","trumpet","saxophone","guitar","shoe","sandal","high_heel","lipstick","boot","shirt","tshirt","necktie","womans_clothes","dress","running_shirt_with_sash","jeans","kimono","bikini","ribbon","tophat","crown","womans_hat","mans_shoe","closed_umbrella","briefcase","handbag","pouch","purse","eyeglasses","fishing_pole_and_fish","coffee","tea","sake","baby_bottle","beer","beers","cocktail","tropical_drink","wine_glass","fork_and_knife","pizza","hamburger","fries","poultry_leg","meat_on_bone","spaghetti","curry","fried_shrimp","bento","sushi","fish_cake","rice_ball","rice_cracker","rice","ramen","stew","oden","dango","egg","bread","doughnut","custard","icecream","ice_cream","shaved_ice","birthday","cake","cookie","chocolate_bar","candy","lollipop","honey_pot","apple","green_apple","tangerine","lemon","cherries","grapes","watermelon","strawberry","peach","melon","banana","pear","pineapple","sweet_potato","eggplant","tomato","corn"],d=["onezeronine","house","house_with_garden","school","office","post_office","hospital","bank","convenience_store","love_hotel","hotel","wedding","church","department_store","european_post_office","city_sunrise","city_sunset","japanese_castle","european_castle","tent","factory","tokyo_tower","japan","mount_fuji","sunrise_over_mountains","sunrise","stars","statue_of_liberty","bridge_at_night","carousel_horse","rainbow","ferris_wheel","fountain","roller_coaster","ship","speedboat","boat","sailboat","rowboat","anchor","rocket","airplane","helicopter","steam_locomotive","tram","mountain_railway","bike","aerial_tramway","suspension_railway","mountain_cableway","tractor","blue_car","oncoming_automobile","car","red_car","taxi","oncoming_taxi","articulated_lorry","bus","oncoming_bus","rotating_light","police_car","oncoming_police_car","fire_engine","ambulance","minibus","truck","train","station","train2","bullettrain_front","bullettrain_side","light_rail","monorail","railway_car","trolleybus","ticket","fuelpump","vertical_traffic_light","traffic_light","warning","construction","beginner","atm","slot_machine","busstop","barber","hotsprings","checkered_flag","crossed_flags","izakaya_lantern","moyai","circus_tent","performing_arts","round_pushpin","triangular_flag_on_post","jp","kr","cn","us","fr","es","it","ru","gb","uk","de"],e=["one","two","three","four","five","six","seven","eight","nine","keycap_ten","onetwothreefour","zero","hash","symbols","arrow_backward","arrow_down","arrow_forward","arrow_left","capital_abcd","abcd","abc","arrow_lower_left","arrow_lower_right","arrow_right","arrow_up","arrow_upper_left","arrow_upper_right","arrow_double_down","arrow_double_up","arrow_down_small","arrow_heading_down","arrow_heading_up","leftwards_arrow_with_hook","arrow_right_hook","left_right_arrow","arrow_up_down","arrow_up_small","arrows_clockwise","arrows_counterclockwise","rewind","fast_forward","information_source","ok","twisted_rightwards_arrows","repeat","repeat_one","new","top","up","cool","free","ng","cinema","koko","signal_strength","u5272","u5408","u55b6","u6307","u6708","u6709","u6e80","u7121","u7533","u7a7a","u7981","sa","restroom","mens","womens","baby_symbol","no_smoking","parking","wheelchair","metro","baggage_claim","accept","wc","potable_water","put_litter_in_its_place","secret","congratulations","m","passport_control","left_luggage","customs","ideograph_advantage","cl","sos","id","no_entry_sign","underage","no_mobile_phones","do_not_litter","non-potable_water","no_bicycles","no_pedestrians","children_crossing","no_entry","eight_spoked_asterisk","eight_pointed_black_star","heart_decoration","vs","vibration_mode","mobile_phone_off","chart","currency_exchange","aries","taurus","gemini","cancer","leo","virgo","libra","scorpius","sagittarius","capricorn","aquarius","pisces","ophiuchus","six_pointed_star","negative_squared_cross_mark","a","b","ab","o2","diamond_shape_with_a_dot_inside","recycle","end","on","soon","clock1","clock130","clock10","clock1030","clock11","clock1130","clock12","clock1230","clock2","clock230","clock3","clock330","clock4","clock430","clock5","clock530","clock6","clock630","clock7","clock730","clock8","clock830","clock9","clock930","heavy_dollar_sign","copyright","registered","tm","x","heavy_exclamation_mark","bangbang","interrobang","o","heavy_multiplication_x","heavy_plus_sign","heavy_minus_sign","heavy_division_sign","white_flower","onehundred","heavy_check_mark","ballot_box_with_check","radio_button","link","curly_loop","wavy_dash","part_alternation_mark","trident","black_square","white_square","white_check_mark","black_square_button","white_square_button","black_circle","white_circle","red_circle","large_blue_circle","large_blue_diamond","large_orange_diamond","small_blue_diamond","small_orange_diamond","small_red_triangle","small_red_triangle_down","shipit"];return{people:a,nature:b,places:d,objects:c,symbols:e}});var c=["$scope","bzCommentAreaIcons",function(a,b){a.icons=b;var c=function(a){return String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")};a.emptyGif="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",a.createIcon=function(b){var d=":"+b+":";return'<img src="'+a.emptyGif+'" class="emojify '+b+'" alt="'+c(d)+'">'},a.showSmiles=function(){a.selection=a.saveSelection(),a.$showSmiles=!a.$showSmiles},a.insert=function(b){var c=$(a.createIcon(b));c[0].attachEvent&&c[0].attachEvent("onresizestart",function(a){a.returnValue=!1},!1),a.editor.focus(),a.selection&&a.restoreSelection(a.selection);try{a.replaceSelection(c[0])}catch(d){}a.editor.trigger("paste"),a.$showSmiles=!1},a.restoreSelection=function(){return window.getSelection?function(a){var b=window.getSelection();b.removeAllRanges();for(var c=0,d=a.length;d>c;++c)b.addRange(a[c])}:document.selection&&document.selection.createRange?function(a){a&&a.select()}:void 0}(),a.replaceSelection=function(){return window.getSelection?function(a){var b,c=window.getSelection(),d="string"==typeof a?document.createTextNode(a):a;c.getRangeAt&&c.rangeCount&&(b=c.getRangeAt(0),b.deleteContents(),b.insertNode(document.createTextNode(" ")),b.insertNode(d),b.setStart(d,0),window.setTimeout(function(){b=document.createRange(),b.setStartAfter(d),b.collapse(!0),c.removeAllRanges(),c.addRange(b)},0))}:document.selection&&document.selection.createRange?function(a){var b=document.selection.createRange();"string"==typeof a?b.text=a:b.pasteHTML(a.outerHTML)}:void 0}(),a.saveSelection=function(){return window.getSelection?function(){var a=window.getSelection(),b=[];if(a.rangeCount)for(var c=0,d=a.rangeCount;d>c;++c)b.push(a.getRangeAt(c));return b}:document.selection&&document.selection.createRange?function(){var a=document.selection;return"none"!==a.type.toLowerCase()?a.createRange():null}:void 0}()}];return b.directive("bzCommentArea",["bzCommentAreaIcons",function(a){"use strict";var b=1,d=3,e=["p","div","pre","form"],f=27,g=9,h={restrict:"C",scope:!0,require:"?ngModel",replace:!0,controller:c,templateUrl:"/src/bz-comment-area/area.html",link:function(c,h,i,j){var k,l;c.editor=k=$("<div>").addClass("emoji-wysiwyg-editor").attr({contenteditable:"true"}).on("blur keyup change paste",function(){j.$setViewValue(k.html()),c.$$phase||c.$apply()}).on("mousedown focus",function(){document.execCommand("enableObjectResizing",!1,!1)}).on("blur",function(){document.execCommand("enableObjectResizing",!0,!0)}).on("keydown",function(a){a.keyCode===f&&(c.$showSmiles=!1),a.keyCode===g&&c.showSmiles()});var m=function(a){return(a+"").replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")};h.addClass("form-control").find("textarea").hide().after(k),j.$render=function(){k.html(j.$viewValue||"")},j.$formatters.unshift(function(b){for(var d=0;d<a.people.length;d++){var e=a.people[d];b=b.replace(new RegExp(m(":"+e+":"),"g"),c.createIcon(e))}return b}),j.$parsers.unshift(function(){return l()}),l=function(){for(var a=[],c=[],f=function(){a.push(c.join("")),c=[]},g=function(a){if(a.nodeType===d)c.push(a.nodeValue);else if(a.nodeType===b){var h=a.tagName.toLowerCase(),i=-1!==e.indexOf(h);if(i&&c.length&&f(),"img"===h){var j=a.getAttribute("alt")||"";return j&&c.push(j),void 0}"br"===h&&f();for(var k=a.childNodes,l=0;l<k.length;l++)g(k[l]);i&&c.length&&f()}},h=k[0].childNodes,i=0;i<h.length;i++)g(h[i]);return c.length&&f(),a.join("\n")}}};return h}]),a.module("ngTable").run(["$templateCache",function(a){a.put("bz-comment-area/area.html",'<div class="bz-comment-area-container form-control"> <div ng-show="$showSmiles" class="emoji-container"> <div ng-repeat="(name, smiles) in icons"> <div ng-if="name==\'people\'"> <a href="" ng-repeat="smile in smiles" ng-click="insert(smile)"><img ng-class="smile" ng-src="{{ emptyGif }}" class="emojify"/></a> </div> </div> </div> <textarea></textarea> <div title="Використовуйте TAB, щоб швидше відкривати смайли" class="emoji_smile emoji_smile_animation fl_l" ng-click="showSmiles()" ng-class="{\'emoji_smile_on\': $showSmiles, \'emoji_smile_off\': !$showSmiles}" style="opacity: 0.7;"> <div class="emojify_on smiley"></div> <div class="emojify smiley"></div> </div> <p class="drag-and-drop"> <span class="default"> Attach images by dragging &amp; dropping, <input type="file" multiple="multiple" class="manual-file-chooser js-manual-file-chooser"> <a class="manual-file-chooser-text" href="#">selecting them</a>, or pasting from the clipboard. </span> <span class="loading"> <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16"> Uploading your images… </span> <span class="error bad-file"> Unfortunately we don\'t support that file type yet. Please use PNG, GIF, or JPG. </span> <span class="error too-big"> Yowza, that\'s a big file. Please submit an image file smaller than 5MB. </span> <span class="error bad-browser"> This browser doesn\'t support image attachments. </span> <span class="error failed-request"> Something went really wrong and we can\'t process that image. </span> </p> </div>')}]),b});
//# sourceMappingURL=bz-comment-area.map