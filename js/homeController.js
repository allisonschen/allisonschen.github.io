(function (angular) {

        var myApp = angular.module('myApp');
        myApp.controller('homeController', function ($scope, $location) {
                console.log("lol");
                var vm = this;
                vm.message = 'working';
                console.log("working");

                vm.changeView = function() {
                        console.log("clicked");
                        $location.path("/about");
                }

        });

})(angular);
