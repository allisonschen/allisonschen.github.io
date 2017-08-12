(function (angular) {

  var myApp = angular.module('myApp');
  myApp.controller('homeController', function (limitToFilter, $scope, $location,$http,$window) {
    var vm = this;
    var accessToken = "";
    vm.userImg="";
    vm.isDisabled = false;
    vm.finalj = {
        limit: 20,
        seed_artists: "",
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
      vm.finalj.seed_artists.slice(0,-1);
      angular.forEach(vm.attrs, function(item) {
	n = "target_" + item.name;
	vm.finalj[n]=item.val;
      });
      delete vm.finalj.attrs;
      var auth = "Bearer " + accessToken;
      $http.get("https://api.spotify.com/v1/recommendations", {
	headers: {
	  Authorization: auth
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
      "name": "Dance",
      "val": 0.0
    },{
      "name" : "Akewstic",
      "val": 0.0
    },{
      "name" : "Instrooment",
      "val": 0
    },{
      "name": "Loud",
      "val" : 0,
    },{
      "name" : "Energy",
      "val": 0 
    },{ 
      "name" : "Popular",
      "val" : 0
    },{
      "name" : "Vocal",
      "val" : 0 
    },{
      "name" :"Happy",
      "val" : 0
    }];
    vm.finalj.attrs=vm.attrs;
    $scope.artists=['lol','lolol','trololol','haha'];		
    vm.token = [];
    vm.artistSearch = "";
    vm.onSelect = function(i,m,l) {
      vm.finalj.seed_artists += i.uri.split(":")[2] + ",";
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
