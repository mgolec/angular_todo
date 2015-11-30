/**
 * Created by Laptop on 27.11.2015..
 */

var app = angular.module('todoApp', []);

app.controller('IndexPageController', function ($scope) {
    //app logic

    $scope.list = [];
    $scope.submit = function () {
        $scope.list.push({
            name: $scope.newItem,
            done: false
        });
        $scope.newItem = "";
    };

});