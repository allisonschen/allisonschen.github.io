(function (angular) {

  var myApp = angular.module('myApp');
  myApp.controller('homeController', function ($scope, $location,$http) {
    console.log("lol");
    var vm = this;
    vm.message = 'working';
    console.log("working");
    $scope.artists=['lol','lolol','trololol','haha'];		
    $http.get('https://api.spotify.com/v1/search?q=logic&type=artist', {
      }).success(function(data) {
	console.log(data.artists.items);
      }).error(function(response) {
	console.log(response);
      });
    vm.search = function(val)  {
      return $http.get('https://api.spotify.com/v1/search', {
	params: {
	  q: val,
	  type: 'artist'
	}
      }).then(function(response){
	console.log(response.data.artists.items);
	return response.data.artists.items.map(function(item){
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
