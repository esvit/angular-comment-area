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