(function (angular) {

  var myApp = angular.module('myApp');
  myApp.controller('homeController', function (limitToFilter, $scope, $location,$http) {
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
    $scope.artists=['lol','lolol','trololol','haha'];		
    vm.token = [];
    vm.artistSearch = "";
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
      console.log(val);
      vm.results = [];
      return $http.get('https://api.spotify.com/v1/search', {
	params: {
	  q: val,
	  type: 'artist',
	  limit: '50'
	}
      }).then(function(response){
	console.log(response);
	function compare(a,b) {
	  return b.popularity - a.popularity;
	}
	response.data.artists.items.sort(compare);
	return limitToFilter(angular.forEach(response.data.artists.items, function(item) {
	  i = item.images[Object.keys(item.images)[item.images.length-1]];
	  i != null ?  item.img=i.url  :  item.img="./images/DefaultArtist.png";
	  return vm.results.push(item);
	})
	,5);
      });
    };
    vm.changeView = function() {
      console.log("clicked");
      $location.path("/about");
    }


  });

})(angular);
