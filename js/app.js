var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : '/pages/home.html',
            controller : 'homeController as homeVm'
        })

        .when('/about', {
            templateUrl : '/pages/about.html',
            controller : 'aboutController'
        });
});