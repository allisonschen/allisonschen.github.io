
(function (angular) {

  var myApp = angular.module('myApp');
  myApp.controller('videoController', function ($scope, $location) {
    var vm = this;
    vm.changeView = function () {
      $location.path("/");
    }   

  }); 

})(angular);
