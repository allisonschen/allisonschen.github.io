var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : './index.html',
            controller : 'homeController'
        })

        .when('/about', {
            templateUrl : 'pages/about.html',
            controller : 'aboutController'
        });
});