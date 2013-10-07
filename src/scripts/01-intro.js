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