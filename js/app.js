(function (angular) {
    var myApp = angular.module('myApp', ['ngRoute']);
    console.log("helvlo");
    myApp.config(function ($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl: '/pages/home.html',
                controller: 'homeController',
                controllerAs: 'homeVm'
            })

            .when('/about', {
                templateUrl: '/pages/about.html',
                controller: 'aboutController'
            })
            .otherwise({
                templateUrl: 'pages/home.html',
                controller: 'homeController',
                controllerAs: 'homeVm'
            });
    });

})(angular);
