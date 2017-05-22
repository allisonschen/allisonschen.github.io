(function (angular) {
  var myApp = angular.module('myApp', ['ngMaterial','ui.bootstrap','ngRoute']);
  myApp.config(function ($mdThemingProvider,$httpProvider,$routeProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('light-blue')
    .accentPalette('deep-orange')
    .warnPalette('red')
    $routeProvider
    .when('/', {
      templateUrl: 'pages/home.html',
      controller: 'homeController',
      controllerAs: 'homeVm',
      css: 'css/home.css'
    })

    .when('/about', {
      templateUrl: 'pages/about.html',
      controller: 'aboutController',
      controllerAs: 'aboutVm'
    })
    .otherwise({
      templateUrl: 'pages/home.html',
      controller: 'homeController',
      controllerAs: 'homeVm',
      css: 'css/home.css'
    });
    $httpProvider.defaults.useXDomain = true;
  });
  
})(angular);
