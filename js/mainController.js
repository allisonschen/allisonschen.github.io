(function(angular) {

    var myApp = angular.module('myApp');
    myApp.controller('mainController', function($scope, $location) {
        var vm = this;
        vm.aboutView = function() {
            $location.path("/about");
        }

        vm.homeView = function() {
            $location.path("/");
        }

    });

});