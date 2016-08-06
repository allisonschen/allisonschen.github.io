(function (angular) {

        var myApp = angular.module('myApp');
        myApp.controller('homeController', function ($scope) {
                console.log("lol");
                vm = $scope;
                vm.message = 'working';
                console.log("working");

        });

})(angular);
