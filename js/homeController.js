(function (angular) {

        var myApp = angular.module('myApp');
        myApp.controller('homeController', function ($scope) {
                console.log("lol");
                var vm = this;
                vm.message = 'working';
                console.log("working");

        });

})(angular);
