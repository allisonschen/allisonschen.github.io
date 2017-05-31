(function (angular) {

  var myApp = angular.module('myApp');
  myApp.controller('homeController', function (limitToFilter, $scope, $location,$http,$window) {
    var vm = this;
    var accessToken = "";
    vm.userImg="";
    vm.finalj = {
        limit: 20,
        seed_artists: "",
	seed_genres: "",
	seed_tracks: "",
	attrs : ""
    }
    vm.userName="";
    vm.imgs = [];
    if($location.hash()=="") {
	$window.location.href = "https://accounts.spotify.com/authorize?client_id=4543fb54a0694c1db55804cb18276c64&redirect_uri=http:%2F%2Fiworkwithmonkeys.com&response_type=token";
    } else {
      accessToken = ($location.hash().split('&')[0].split('=')[1]);
    }
    vm.login = function() {
      console.log("login pressed");
      angular.forEach(vm.attrs, function(item) {
	vm.finalj[item.name]=item.val;
      });
      $http.get("https://api.spotify.com/v1/recommendations", {
	headers: {
	  Authorization: "Bearer " + accessToken
	},
	params: vm.finalj
      }).then(function(response) {
	console.log(response);
      });
    }
    vm.removeSelection = function(val, i) {
      console.log(val,i);
      console.log("removing");
    }
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
    vm.finalj.attrs=vm.attrs;
    $scope.artists=['lol','lolol','trololol','haha'];		
    vm.token = [];
    vm.artistSearch = "";
    vm.onSelect = function(i,m,l) {
      vm.imgs.unshift(i.img);
      vm.artistSearch="";
    }
    $http.get('https://accounts.spotify.com/authorize', {
      params: {
	'client_id': '4543fb54a0694c1db55804cb18276c64',
	'response_type': 'token',
	'redirect_uri': 'http://iworkwithmonkeys.com',
      },
      headers: {
	'Access-Control-Allow-Origin':'*'
      }
    }).then(function(response){
      console.log(response);
      console.log($location.hash());
      console.log($location.hash().split('/[&=]/')[2])
      console.log('user authenticated');
    },function error(response) {
      console.log(response);
    });
    vm.search = function(val)  {
      console.log(val);
      vm.results = [];
      var auth = "Bearer " + accessToken;
      return $http.get('https://api.spotify.com/v1/search', {
	headers: {
	  Authorization: auth
	},
	params: {
	  q: val+'*',
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
      },function error(response) {
	console.log(response);
      });
    }
    vm.changeView = function() {
      console.log("clicked");
      $location.path("/about");
    }
    
  });
})(angular);
