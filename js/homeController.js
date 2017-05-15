(function (angular) {

  var myApp = angular.module('myApp');
  myApp.controller('homeController', function ($scope, $location,$http) {
    console.log("lol");
    var vm = this;
    vm.message = 'working';
    console.log("working");
    $scope.artists=['lol','lolol','trololol','haha'];		
    vm.results = [];
    vm.token = [];
    $http.get('https://accounts.spotify.com/authorize', {
      params: {
	client_id: '4543fb54a0694c1db55804cb18276c64',
	response_type: 'code',
	redirect_uri: 'https://allisonschen.github.io/#/',
      }
    }).then(function(response){
      console.log("wtf");
      console.log(response);
      console.log('hello bois');
    });
    vm.search = function(val)  {
      vm.results = [];
      return $http.get('https://api.spotify.com/v1/search', {
	params: {
	  q: val,
	  type: 'artist'
	}
      }).then(function(response){
	console.log(response.data.artists.items);
	return response.data.artists.items.map(function(item){
	  vm.results.push(item.name);
	  return item.name;
	});
      });
    };
    console.log($scope.artists[2]);
    vm.changeView = function() {
      console.log("clicked");
      $location.path("/about");
    }


  });

})(angular);
