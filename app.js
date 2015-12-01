/**
 * Created by Laptop on 27.11.2015..
 */

var app = angular.module('todoApp', ['ngStorage']);
app.constant('_', _);

app.controller('IndexPageController', ['$scope', 'API', function ($scope, API) {
    //app logic


    var updateList = function () {
        var list = API.get();
        $scope.activeList = _.where(list, {done: false});
        $scope.doneList = _.where(list, {done: true});
    };

    $scope.submit = function () {
        var item = API.add ({
            name: $scope.newItem,
            done: false
        });

        updateList();
        $scope.newItem = "";
    };
    $scope.update = function (item) {
        API.update(item);
        updateList();

    };

    updateList();
}]);

app.factory('API', ['$localStorage', '_', function ($localStorage, _) {

    //generate if for every to do item
    var generateId = function () {
        return (new Date()).getTime();
    };

    //get current list from local storage
    var getList = function () {
        if (!$localStorage.todos) {
            return [];
        }
        return JSON.parse($localStorage.todos);
    };

    //set current list to local storage
    var setList = function (list) {
        if (!list) {
            list = [];
        }
        $localStorage.todos = JSON.stringify(list);
    };

    return {
        get: function () {
            return getList();
        },
        add: function (item) {
            var list = getList();
            item.id = generateId();
            list.push(item);
            setList(list);
            return item;
        },
        update: function (item) {
            if (!item.id) {
                throw new Error('item id not found')
            }
            var list = getList();
            var it = _.findWhere(list, {id: item.id});
            if (!it) {
                throw new Error('item not found');
            }
            _.extend(it, item);
            setList(list);
            return it;
        }
    }

}]);

app.directive('todoItem', function () {

    return {
        restrict: 'E',
        scope: {
            todo: '=',
            update: '&'
        },
        templateUrl: 'view/todoItem.html'
    }

});

