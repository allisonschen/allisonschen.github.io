var myApp = angular.module('myApp', []);

myApp.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : 'pages/index.html',
            controller : 'homeController'
        })

        .when('/about', {
            templateUrl : 'pages/about.html',
            controller : 'aboutController'
        });
});