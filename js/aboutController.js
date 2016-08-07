(function (angular) {

    var myApp = angular.module('myApp');
    myApp.controller('mainController', function ($scope, $location) {
        console.log("lol");
        var vm = this;
        vm.message = 'this is the about page';
        console.log("working");

        vm.changeView = function () {
            $location.path("/");
        }

    });

})(angular);