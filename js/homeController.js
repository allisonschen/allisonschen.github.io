(function (angular) {

  var myApp = angular.module('myApp');
  myApp.controller('homeController', function ($scope, $location,$http) {
    console.log("lol");
    var vm = this;
    vm.attrs = [{
      "name": "danceability",
      "val": 0.0
    },{
      "name" : "acousticness",
      "val": 0.0
    },{
      "name" : "instrumentalness",
      "val": 0
    },{
      "name" : "liveness",
      "val" : 0
    },{
      "name": "loudness",
      "val" : 0,
    },{
      "name" : "energy",
      "val": 0 
    },{ 
      "name" : "popularity",
      "val" : 0
    },{
      "name" : "speechiness",
      "val" : 0 
    },{
      "name" :"valence",
       "val" : 0
    }];
    vm.dance = 0.0;
    vm.message = 'working';
    console.log("working");
    $scope.artists=['lol','lolol','trololol','haha'];		
    vm.results = [];
    vm.token = [];
    $http.get('https://accounts.spotify.com/authorize', {
      params: {
	'client_id': '4543fb54a0694c1db55804cb18276c64',
	'response_type': 'token',
	'redirect_uri': 'iworkwithmonkeys.com',
      },
      headers: {
	'Access-Control-Allow-Origin':'*'
      }
    }).then(function(response){
      console.log("wtf");
      console.log(response);
      console.log('hello bois');
    },function error(response) {
      console.log(response);
    });
    vm.search = function(val)  {
      vm.results = [];
      $http.get('https://api.spotify.com/v1/search', {
	params: {
	  q: val,
	  type: 'artist'
	}
      }).then(function(response){
	response.data.artists.items.map(function(item){
	  vm.results.push(item.name);
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
