(function (angular) {

    var myApp = angular.module('myApp');
    myApp.controller('mainController', function ($scope, $location) {
        var vm = this;
        vm.message = "hello";
        vm.aboutView = function () {
            $location.path("/about");
        }

        vm.homeView = function () {
            $location.path("/");
        }
    });
})(angular);




