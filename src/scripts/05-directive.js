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