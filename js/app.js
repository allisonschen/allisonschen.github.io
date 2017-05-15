(function (angular) {
  var myApp = angular.module('myApp', ['ui.bootstrap','ngRoute']);
  myApp.config(function ($httpProvider,$routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'pages/home.html',
      controller: 'homeController',
      controllerAs: 'homeVm'
    })

    .when('/about', {
      templateUrl: 'pages/about.html',
      controller: 'aboutController',
      controllerAs: 'aboutVm'
    })
    .otherwise({
      templateUrl: 'pages/home.html',
      controller: 'homeController',
      controllerAs: 'homeVm'
    });
    $httpProvider.defaults.withCredentials = true;
  });

})(angular);
