angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http, Links) {
  // Your code here
  angular.extend($scope,$location,$http, Links);
  //this might be a good place to refactor
  $scope.link=[];
  $scope.addLink = function(url){
    $scope.links.push(url);
    $scope.url="";
    $http({
      method: 'POST',
      url: '/api/links',
      data: url
    })
    .then(function (resp) {
      console.log(resp.data);
    });

  }
});
