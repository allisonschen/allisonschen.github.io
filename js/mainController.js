(function (angular) {

    var myApp = angular.module('myApp');
    myApp.controller('aboutController', function ($scope, $location) {
        var vm = this;
        vm.aboutView = function () {
            $location.path("/about");
        }

        vm.homeView = function () {
            $location.path("/");
        }
    });
})(angular);




