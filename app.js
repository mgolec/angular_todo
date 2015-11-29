/**
 * Created by Laptop on 27.11.2015..
 */

var app = angular.module('todoApp', []);

app.controller('myCtrl', function ($scope) {

    $scope.firstName = "john";
    $scope.lastName = "doe";

    console.log($scope);

    this.firstName = "john";
    this.lastName = "snow";
});