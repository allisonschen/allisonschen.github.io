(function (angular) {

    var myApp = angular.module('myApp');
    myApp.controller('aboutController', function ($scope, $location) {
        var vm = this;
	vm.people = [
	  {
	    img:"leadmonkey.jpg",
	    info:"I run the monkeys"
	  },{
	    img:"alcuck.jpg",
	    info:"I made jookbocks logo"
	  },{
	    img:"kchen.jpg",
	    info:"I can't code"
	  },{
	    img:"wecock.jpg",
	    info:"I literally have done nothing"
	  }];


        vm.changeView = function () {
            $location.path("/");
        }

    });

})(angular);
