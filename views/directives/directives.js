var directives = angular.module('directives', []);

directives.directive('todoItem', function () {

    return {
        restrict: 'E',
        scope: {
            todo: '=',
            update: '&'
        },
        templateUrl: 'views/directives/todoItem.html'
    };

});

directives.directive('archiveItem', function () {

    return {
        restrict: 'E',
        scope: {
            archivedtodo: '=',
            undo: '&'
        },
        templateUrl: 'views/directives/archiveItem.html'
    };

});