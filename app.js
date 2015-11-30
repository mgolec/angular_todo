/**
 * Created by Laptop on 27.11.2015..
 */

var app = angular.module('todoApp', []);

app.controller('IndexPageController', function ($scope, API) {
    //app logic

    $scope.list = API.get();
    $scope.submit = function () {
        $scope.list = API.add ({
            name: $scope.newItem,
            done: false
        });
        $scope.newItem = "";
    };

});

app.factory('API', function () {
    var list = [];

    return {
        get: function () {
            return list;
        },
        add: function (item) {
            list.push(item);
            return list;
        }
    }

});

app.directive('todoItem', function () {

    return {
        template: '<h3 class="{{todo.done ? "line-through" : ""}}"><input type="checkbox" ng-model="todo.done"> {{todo.name}}</h3>'
    }

});

