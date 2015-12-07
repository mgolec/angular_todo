/**
 * Created by Laptop on 27.11.2015..
 */

var app = angular.module('todoApp', ['ngRoute', 'directives', 'pages']);
app.constant('_', _);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.
    when('/', {
        templateUrl: 'views/pages/home/home.html',
        controller: 'IndexPageController'
    }).
    when('/archive', {
        templateUrl: 'views/pages/archive/archive.html',
        controller: 'ArchivePageController'
    })

}]);





